class InDocApp {
    constructor() {
        this.quill = null;
        
        this.init();
    }
    
    // Helper
    t(key, defaultText) {
        if (window.Localization) return window.Localization.t(key);
        return defaultText || key;
    }

    async init() {
        this.initializeQuill();
        this.setupEventListeners();
        
        // Listener for language change to update placeholder if needed
        window.addEventListener('languageChanged', () => {
             const ph = this.t('indoc.placeholder');
             this.quill.root.dataset.placeholder = ph;
        });
    }

    initializeQuill() {
        // Configuración de la toolbar de Quill
        const toolbarOptions = [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean']
        ];

        this.quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: {
                    container: toolbarOptions
                }
            },
            placeholder: this.t('indoc.placeholder', 'Comienza a escribir aquí. :)')
        });

        // Mover la toolbar al contenedor personalizado
        const toolbar = document.querySelector('.ql-toolbar');
        document.getElementById('toolbar').appendChild(toolbar);
    }

    setupEventListeners() {
        // Botones del toolbar principal
        document.getElementById('new-doc').addEventListener('click', () => this.newDocument());
        document.getElementById('open-doc').addEventListener('click', () => this.showOpenDialog());
        document.getElementById('save-doc').addEventListener('click', () => this.saveToLocalStorage());
        document.getElementById('export-pdf').addEventListener('click', () => this.exportToPDF());
        document.getElementById('export-txt').addEventListener('click', () => this.exportToTXT());
        // Atajos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey) {
                switch(e.key) {
                    case 'n':
                        e.preventDefault();
                        this.newDocument();
                        break;
                    case 's':
                        e.preventDefault();
                        this.saveToLocalStorage();
                        break;
                    case 'o':
                        e.preventDefault();
                        this.showOpenDialog();
                        break;
                    case 'e':
                        if (e.shiftKey) {
                            e.preventDefault();
                            this.exportToPDF();
                        }
                        break;
                }
            }
        });
    }

    newDocument() {
        if (confirm(this.t('indoc.confirm_new', 'Revisa antes si has guardado los cambios por que al abrir un nuevo documento se perderán.'))) {
            this.quill.setContents([]);
            this.quill.focus();
        }
    }

    saveToLocalStorage() {
        const title = prompt(this.t('indoc.prompt_name', 'Nombre del documento:'), `Documento ${new Date().toLocaleString()}`);
        if (!title) return;

        const content = this.quill.getContents();
        const htmlContent = this.quill.root.innerHTML;
        
        const document = {
            id: Date.now().toString(),
            title: title,
            delta: content,
            html: htmlContent,
            created: new Date().toISOString(),
            modified: new Date().toISOString()
        };
        
        // Obtener documentos existentes
        const savedDocs = JSON.parse(localStorage.getItem('quill-documents') || '[]');
        savedDocs.push(document);
        
        // Guardar en localStorage
        localStorage.setItem('quill-documents', JSON.stringify(savedDocs));
        
        alert(`${this.t('indoc.doc_saved', 'Documento guardado correctamente')}: "${title}"`);
    }

    showOpenDialog() {
        const savedDocs = JSON.parse(localStorage.getItem('quill-documents') || '[]');
        
        if (savedDocs.length === 0) {
            alert(this.t('indoc.no_docs', 'No hay documentos guardados'));
            return;
        }

        // Crear modal para mostrar documentos
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;

        let html = `<h3 style="margin-bottom: 20px;">${this.t('indoc.docs_title', 'Documentos Guardados')}</h3>`;
        
        savedDocs.reverse().forEach(doc => {
            const date = new Date(doc.created).toLocaleString();
            html += `
                <div style="padding: 12px; border: 1px solid #ddd; margin-bottom: 10px; border-radius: 4px; cursor: pointer;" 
                     onmouseover="this.style.background='#f5f5f5'" 
                     onmouseout="this.style.background='white'"
                     onclick="window.quillApp.openDocument('${doc.id}')">
                    <strong>${doc.title}</strong><br>
                    <small style="color: #666;">${this.t('indoc.created', 'Creado:')} ${date}</small>
                    <button onclick="event.stopPropagation(); window.quillApp.deleteDocument('${doc.id}')" 
                            style="float: right; background: #dc3545; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">
                        ${this.t('indoc.delete', 'Eliminar')}
                    </button>
                </div>
            `;
        });
        
        html += `<button onclick="this.closest('.modal').remove()" style="margin-top: 20px; padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">${this.t('indoc.close', 'Cerrar')}</button>`;
        
        content.innerHTML = html;
        modal.className = 'modal';
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    openDocument(docId) {
        const savedDocs = JSON.parse(localStorage.getItem('quill-documents') || '[]');
        const doc = savedDocs.find(d => d.id === docId);
        
        if (doc) {
            this.quill.setContents(doc.delta);
            document.querySelector('.modal')?.remove();
            alert(`${this.t('indoc.doc_opened', 'Documento abierto')}: "${doc.title}"`);
        }
    }

    deleteDocument(docId) {
        if (confirm(this.t('indoc.confirm_delete', '¿Estás seguro de que quieres eliminar este documento?'))) {
            const savedDocs = JSON.parse(localStorage.getItem('quill-documents') || '[]');
            const filteredDocs = savedDocs.filter(d => d.id !== docId);
            localStorage.setItem('quill-documents', JSON.stringify(filteredDocs));
            
            // Cerrar modal y volver a abrir para actualizar lista
            document.querySelector('.modal')?.remove();
            this.showOpenDialog();
        }
    }

    saveDocument() {
        // Método legacy - mantener por compatibilidad
        this.saveToLocalStorage();
    }

    async exportToPDF() {
        try {
            if (typeof html2pdf === 'undefined') {
                alert(this.t('indoc.error_html2pdf', 'Error: html2pdf no está cargado.'));
                return;
            }
            const content = document.querySelector('.ql-editor').innerHTML;
            const opt = {
                margin: 1,
                filename: `documento_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().set(opt).from(content).save();
            if (typeof showToast === 'function') {
                showToast(this.t('indoc.pdf_success', 'PDF exportado exitosamente'), 'success');
            } else {
                alert(this.t('indoc.pdf_success', 'PDF exportado exitosamente'));
            }
        } catch (error) {
            console.error('Error exportando a PDF:', error);
            if (typeof showToast === 'function') {
                showToast(this.t('indoc.pdf_error', 'Error al exportar a PDF: ') + error.message, 'error');
            } else {
                alert(this.t('indoc.pdf_error', 'Error al exportar a PDF: ') + error.message);
            }
        }
    }

    exportToTXT() {
        const text = this.quill.getText();
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `documento_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        
        URL.revokeObjectURL(url);
    }


}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.quillApp = new InDocApp();
});
