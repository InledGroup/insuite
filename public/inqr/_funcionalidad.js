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
          let codeUrl = '';
          
          if (isBarcode) {
            // Generate barcode using barcode API
            const encodedText = encodeURIComponent(data);
            const type = barcodeType.value;
            codeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodedText}&code=${type.toUpperCase()}&translate-esc=true&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0`;
          } else {
            // Generate QR code
            const encodedText = encodeURIComponent(data);
            codeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}&format=png&ecc=M`;
          }
          
          // Test if the image loads
          const img = new Image();
          img.onload = function() {
            currentCodeUrl = codeUrl;
            codeImage.src = codeUrl;
            encodedText.textContent = data;
            
            placeholder.classList.add('hidden');
            codeResult.classList.remove('hidden');
            
            downloadText.textContent = isBarcode ? t('inqr.download_barcode', 'Descargar Código de Barras') : t('inqr.download_qr', 'Descargar Código QR');
            
            showToast(isBarcode ? t('inqr.toast_success_barcode', '¡Código de barras generado correctamente!') : t('inqr.toast_success_qr', '¡Código QR generado correctamente!'));
          };
          
          img.onerror = function() {
            throw new Error('Failed to load code');
          };
          
          img.src = codeUrl;
          
        } catch (error) {
          showToast(t('inqr.toast_error_download', 'Error al descargar...'), 'error');
        } finally {
          // Reset button state
          generateBtn.disabled = false;
          generateText.innerHTML = `
            <span data-i18n="inqr.generate">${t('inqr.generate', 'Generar Código')}</span>
          `;
        }
      }

      // Download code
      async function downloadCode() {
        if (!currentCodeUrl) return;
        
        try {
          const response = await fetch(currentCodeUrl);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          const fileType = currentType === 'barcode' ? 'barcode' : 'qr-code';
          link.download = `${fileType}-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          window.URL.revokeObjectURL(url);
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

      // Input event listeners
      textInput.addEventListener('input', updateGenerateButton);
      wifiSSID.addEventListener('input', updateGenerateButton);
      barcodeText.addEventListener('input', updateGenerateButton);

      // Enter key to generate
      [textInput, wifiSSID, wifiPassword, barcodeText].forEach(input => {
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            generateCode();
          }
        });
      });

      // Initial state
      // We wait for window load or just init
      // Since localization might load after
      if (window.Localization) {
          updateUITexts();
      } else {
          // Default
          updateTips('text');
      }
      updateGenerateButton();