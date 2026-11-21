// Elements
      const typeTabs = document.querySelectorAll('.type-tab');
      const textForm = document.getElementById('textForm');
      const wifiForm = document.getElementById('wifiForm');
      const barcodeForm = document.getElementById('barcodeForm');
      const textInput = document.getElementById('textInput');
      const wifiSSID = document.getElementById('wifiSSID');
      const wifiPassword = document.getElementById('wifiPassword');
      const wifiSecurity = document.getElementById('wifiSecurity');
      const wifiHidden = document.getElementById('wifiHidden');
      const barcodeText = document.getElementById('barcodeText');
      const barcodeType = document.getElementById('barcodeType');
      const copyBtn = document.getElementById('copyBtn');
      const copyIcon = document.getElementById('copyIcon');
      const checkIcon = document.getElementById('checkIcon');
      const generateBtn = document.getElementById('generateBtn');
      const generateText = document.getElementById('generateText');
      const placeholder = document.getElementById('placeholder');
      const codeResult = document.getElementById('codeResult');
      const codeImage = document.getElementById('codeImage');
      const downloadBtn = document.getElementById('downloadBtn');
      const downloadText = document.getElementById('downloadText');
      const encodedText = document.getElementById('encodedText');
      const resultTitle = document.getElementById('resultTitle');
      const tipsList = document.getElementById('tipsList');
      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toastMessage');

      let currentCodeUrl = '';
      let currentType = 'text';

      // Tips for each type (Using keys)
      const tips = {
        text: [
          'inqr.tips_text_1',
          'inqr.tips_text_2',
          'inqr.tips_text_3'
        ],
        wifi: [
          'inqr.tips_wifi_1',
          'inqr.tips_wifi_2',
          'inqr.tips_wifi_3',
          'inqr.tips_wifi_4'
        ],
        barcode: [
          'inqr.tips_barcode_1',
          'inqr.tips_barcode_2',
          'inqr.tips_barcode_3',
          'inqr.tips_barcode_4'
        ]
      };

      // Helper for translation
      const t = (key, defaultText) => {
          if (window.Localization) return window.Localization.t(key);
          return defaultText || key;
      };

      // Show toast
      function showToast(message, type = 'success') {
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        setTimeout(() => {
          toast.classList.remove('show');
        }, 9000);
      }

      // Update tips
      function updateTips(type) {
        tipsList.innerHTML = tips[type].map(key => `<li>${t(key)}</li>`).join('');
      }
      
      // Update UI texts (Title, etc)
      function updateUITexts() {
          if (currentType === 'text') {
            resultTitle.textContent = t('inqr.title_text', 'Tu Código QR');
          } else if (currentType === 'wifi') {
            resultTitle.textContent = t('inqr.title_wifi', 'Tu Código QR WiFi');
          } else if (currentType === 'barcode') {
            resultTitle.textContent = t('inqr.title_barcode', 'Tu Código de Barras');
          }
          
          if (!codeResult.classList.contains('hidden')) {
               downloadText.textContent = currentType === 'barcode' ? t('inqr.download_barcode') : t('inqr.download_qr');
          }
          
          updateTips(currentType);
      }
      
      // Listen for language changes
      window.addEventListener('languageChanged', () => {
          updateUITexts();
      });

      // Handle type tab clicks
      typeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs
          typeTabs.forEach(t => t.classList.remove('active'));
          // Add active class to clicked tab
          tab.classList.add('active');
          
          // Hide all forms
          textForm.classList.remove('active');
          wifiForm.classList.remove('active');
          barcodeForm.classList.remove('active');
          
          // Show selected form
          const type = tab.dataset.type;
          currentType = type;
          
          if (type === 'text') {
            textForm.classList.add('active');
          } else if (type === 'wifi') {
            copyIcon.classList.add('hidden');
            wifiForm.classList.add('active');
          } else if (type === 'barcode') {
            copyIcon.classList.add('hidden');
            barcodeForm.classList.add('active');
          }
          
          updateUITexts(); // Update titles and tips
          
          // Mostrar u ocultar textInput según el tipo
          if (type === 'text') {
            textInput.classList.remove('hidden');
          } else {
            textInput.classList.add('hidden');
          }

          updateGenerateButton();
        });
      });

      // Copy to clipboard
      async function copyToClipboard() {
        try {
          await navigator.clipboard.writeText(textInput.value);
          copyIcon.classList.add('hidden');
          checkIcon.classList.remove('hidden');
          
          setTimeout(() => {
            copyIcon.classList.remove('hidden');
            checkIcon.classList.add('hidden');
          }, 2000);
          
          showToast(t('inqr.toast_copied', 'Texto copiado al portapapeles'));
        } catch (error) {
          showToast(t('inqr.toast_error_copy', 'No se pudo copiar el texto'), 'error');
        }
      }

      // Generate code based on type
      async function generateCode() {
        let data = '';
        let isBarcode = false;
        
        if (currentType === 'text') {
          data = textInput.value.trim();
          if (!data) {
            showToast(t('inqr.toast_empty_text', 'Por favor ingresa un texto para generar el código QR'), 'error');
            return;
          }
        } else if (currentType === 'wifi') {
          const ssid = wifiSSID.value.trim();
          const password = wifiPassword.value.trim();
          const security = wifiSecurity.value;
          const hidden = wifiHidden.checked;
          
          if (!ssid) {
            showToast(t('inqr.toast_empty_ssid', 'Por favor ingresa el nombre de la red WiFi'), 'error');
            return;
          }
          
          // WiFi QR format: WIFI:T:WPA;S:MyNetwork;P:MyPassword;H:false;;
          data = `WIFI:T:${security};S:${ssid};P:${password};H:${hidden ? 'true' : 'false'};;`;
        } else if (currentType === 'barcode') {
          const text = barcodeText.value.trim();
          const type = barcodeType.value;
          
          if (!text) {
            showToast(t('inqr.toast_empty_barcode', 'Por favor ingresa el texto para el código de barras'), 'error');
            return;
          }
          
          data = text;
          isBarcode = true;
        }

        // Show loading state
        generateBtn.disabled = true;
        generateText.innerHTML = `
          <div class="spinner"></div>
          <span>${t('inqr.generating', 'Generando...')}</span>
        `;

        try {
          // Everything is drawn here, on a canvas, with libraries served from
          // this site: the text, the WiFi password and the code never travel
          // to a third-party API.
          const codeUrl = isBarcode
            ? renderBarcode(data)
            : renderQrCode(data);

          currentCodeUrl = codeUrl;
          codeImage.src = codeUrl;
          encodedText.textContent = data;

          placeholder.classList.add('hidden');
          codeResult.classList.remove('hidden');

          downloadText.textContent = isBarcode ? t('inqr.download_barcode', 'Descargar Código de Barras') : t('inqr.download_qr', 'Descargar Código QR');

          showToast(isBarcode ? t('inqr.toast_success_barcode', '¡Código de barras generado correctamente!') : t('inqr.toast_success_qr', '¡Código QR generado correctamente!'));
        } catch (error) {
          console.error('No se pudo generar el código', error);
          showToast(t('inqr.toast_error_generate', 'No se pudo generar el código. Inténtalo de nuevo.'), 'error');
        } finally {
          // Reset button state
          generateBtn.disabled = false;
          generateText.innerHTML = `
            <span data-i18n="inqr.generate">${t('inqr.generate', 'Generar Código')}</span>
          `;
        }
      }

      // Draw a QR code on a canvas and return it as a PNG data URL.
      function renderQrCode(data, size = 300) {
        const qr = qrcode(0, 'M');
        qr.addData(data);
        qr.make();

        const modules = qr.getModuleCount();
        const margin = 4;
        const scale = Math.max(1, Math.floor(size / (modules + margin * 2)));
        const pixels = (modules + margin * 2) * scale;

        const canvas = document.createElement('canvas');
        canvas.width = pixels;
        canvas.height = pixels;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pixels, pixels);
        ctx.fillStyle = '#000000';

        for (let row = 0; row < modules; row++) {
          for (let col = 0; col < modules; col++) {
            if (qr.isDark(row, col)) {
              ctx.fillRect((col + margin) * scale, (row + margin) * scale, scale, scale);
            }
          }
        }

        return canvas.toDataURL('image/png');
      }

      // CODE 128, drawn by JsBarcode on a canvas, also as a PNG data URL.
      function renderBarcode(data) {
        const canvas = document.createElement('canvas');
        JsBarcode(canvas, data, {
          format: 'CODE128',
          width: 2,
          height: 80,
          displayValue: true,
          margin: 10,
          background: '#ffffff',
          lineColor: '#000000'
        });
        return canvas.toDataURL('image/png');
      }

      // Download code: the data URL is already local, no fetch needed.
      function downloadCode() {
        if (!currentCodeUrl) return;
        
        try {
          const link = document.createElement('a');
          link.href = currentCodeUrl;
          const fileType = currentType === 'barcode' ? 'barcode' : 'qr-code';
          link.download = `${fileType}-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          showToast(t('inqr.toast_success_download', 'El código se ha descargado correctamente'));
        } catch (error) {
          showToast(t('inqr.toast_error_download', 'Vaya, ha fallado la descarga...'), 'error');
        }
      }

      // Update generate button state
      function updateGenerateButton() {
        let hasData = false;
        
        if (currentType === 'text') {
          hasData = textInput.value.trim().length > 0;
        } else if (currentType === 'wifi') {
          hasData = wifiSSID.value.trim().length > 0;
        } else if (currentType === 'barcode') {
          hasData = barcodeText.value.trim().length > 0;
        }
        
        generateBtn.disabled = !hasData;
      }

      // Event listeners
      copyBtn.addEventListener('click', copyToClipboard);
      generateBtn.addEventListener('click', generateCode);
      downloadBtn.addEventListener('click', downloadCode);

      // URL Synchronization Logic
      let urlSyncTimeout;
      function updateURL() {
          clearTimeout(urlSyncTimeout);
          urlSyncTimeout = setTimeout(() => {
              const url = new URL(window.location.href);
              url.searchParams.set('type', currentType);

              if (currentType === 'text') {
                  const val = textInput.value.trim();
                  if (val) url.searchParams.set('v', val);
                  else url.searchParams.delete('v');
                  ['s', 'p', 'sec', 'h'].forEach(p => url.searchParams.delete(p));
              } else if (currentType === 'wifi') {
                  const s = wifiSSID.value.trim();
                  const p = wifiPassword.value.trim();
                  const sec = wifiSecurity.value;
                  const h = wifiHidden.checked;
                  if (s) url.searchParams.set('s', s); else url.searchParams.delete('s');
                  if (p) url.searchParams.set('p', p); else url.searchParams.delete('p');
                  url.searchParams.set('sec', sec);
                  url.searchParams.set('h', h);
                  url.searchParams.delete('v');
              } else if (currentType === 'barcode') {
                  const val = barcodeText.value.trim();
                  if (val) url.searchParams.set('v', val);
                  else url.searchParams.delete('v');
                  ['s', 'p', 'sec', 'h'].forEach(p => url.searchParams.delete(p));
              }

              // If a code is already generated, keep the generatenow flag
              if (!codeResult.classList.contains('hidden')) {
                  url.searchParams.set('generatenow', 'true');
              } else {
                  url.searchParams.delete('generatenow');
              }

              window.history.replaceState({}, '', url.toString());
          }, 800);
      }

      function loadFromURL() {
          const params = new URLSearchParams(window.location.search);
          const type = params.get('type');
          if (!type) return;

          // Switch to tab
          const tab = document.querySelector(`.type-tab[data-type="${type}"]`);
          if (tab) tab.click();

          if (type === 'text' || type === 'barcode') {
              const v = params.get('v');
              if (v) {
                  if (type === 'text') textInput.value = v;
                  else barcodeText.value = v;
              }
          } else if (type === 'wifi') {
              const s = params.get('s');
              const p = params.get('p');
              const sec = params.get('sec');
              const h = params.get('h');
              if (s) wifiSSID.value = s;
              if (p) wifiPassword.value = p;
              if (sec) wifiSecurity.value = sec;
              if (h === 'true') wifiHidden.checked = true;
          }

          updateGenerateButton();
          
          const generateNow = params.get('generatenow') === 'true';
          const hasData = (currentType === 'text' && textInput.value) || 
                          (currentType === 'barcode' && barcodeText.value) || 
                          (currentType === 'wifi' && wifiSSID.value);
          
          if (hasData && generateNow) {
              generateCode();
          }
      }

      // Input event listeners to trigger URL sync and button state
      textInput.addEventListener('input', () => { updateGenerateButton(); updateURL(); });
      wifiSSID.addEventListener('input', () => { updateGenerateButton(); updateURL(); });
      wifiPassword.addEventListener('input', () => { updateGenerateButton(); updateURL(); });
      wifiSecurity.addEventListener('change', () => { updateGenerateButton(); updateURL(); });
      wifiHidden.addEventListener('change', () => { updateGenerateButton(); updateURL(); });
      barcodeText.addEventListener('input', () => { updateGenerateButton(); updateURL(); });
      barcodeType.addEventListener('change', () => { updateGenerateButton(); updateURL(); });

      // Enter key to generate
      [textInput, wifiSSID, wifiPassword, barcodeText].forEach(input => {
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            generateCode();
          }
        });
      });

      // Initial state
      loadFromURL();
      if (window.Localization) {
          updateUITexts();
      } else {
          updateTips('text');
      }
      updateGenerateButton();