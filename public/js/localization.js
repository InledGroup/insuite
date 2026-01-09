const translations = {
    es: {
        // Global / Sidebar / Footer
        "sidebar.home": "Inicio",
        "sidebar.apps": "Aplicaciones",
        "footer.rights": "Inled Group 2026. Licenciado bajo GNU GPLv3.0",
        "ai.link": "Ir a Inled AI",
        "ai.powered": "Funciona gracias a Inled AI",
        "ai.chat": "Chat IA",
        "ai.loading": "Cargando modelo de IA...",
        "ai.placeholder": "Habla aquí con la IA...",
        "ai.send": "Enviar",
        "ai.insert": "Insertar",
        "ai.copy": "Copiar",
        "ai.title": "Inled AI",
        "ai.thinking": "Pensando",
        "ai.copied": "Copiado",
        "ai.error": "Lo siento, hubo un error al procesar tu mensaje.",

        // Landing Page
        "landing.title": "InSuite | Tu suite ofimática libre",
        "landing.header.features": "Características",
        "landing.header.editors": "Editores",
        "landing.header.docs": "Documentación",
        "landing.header.access": "Acceder gratis",
        "landing.hero.title_start": "La suite en línea",
        "landing.hero.title_free": "libre",
        "landing.hero.title_private": "privada",
        "landing.hero.title_ai": "con IA",
        "landing.hero.desc": "Varios editores que solventan sus quehaceres diarios sin llevarse ni un solo dato que le pertenece.",
        "landing.hero.access": "Acceder",
        "landing.hero.docs": "Documentación",
        "landing.hero.card_more_title": "Mucho más",
        "landing.hero.card_more_desc": "Que si no la página se hace muy grande",
        "landing.hero.card_indoc": "Crea documentos con IA",
        "landing.hero.card_inmd": "Edita markdown sin ver código",
        "landing.hero.card_inlinked": "Crea post de LinkedIn con IA",

        "landing.features.title": "¿Por qué InSuite?",
        "landing.features.desc": "Una alternativa privada, gratuita, de código abierto y con IA (que también es privada)",
        "landing.features.free_title": "Libre y gratuita",
        "landing.features.free_desc": "Toda la InSuite es gratuita y de código abierto",
        "landing.features.private_title": "Más privada que todas",
        "landing.features.private_desc": "Las suites actuales hacen de usted un producto cuyos datos son utilizados. <br> InSuite procesa todo en su PC y no recopila ningún dato",
        "landing.features.ai_title": "Inled AI integrada",
        "landing.features.ai_desc": "Inled AI, un sistema de IA novedoso que permite su ejecución en su PC, está integrada en los mejores editores de InSuite",
        "landing.features.intuitive_title": "Intuitiva",
        "landing.features.intuitive_desc": "No necesitará los manuales de usuario para dar sus primeros pasos",
        "landing.features.rgpd_title": "Cumple con el RGPD",
        "landing.features.rgpd_desc": "Por el mero hecho de que no sacamos ni el más mínimo dato de su interacción con InSuite",
        "landing.features.security_title": "Seguridad",
        "landing.features.security_desc": "Nunca sus documentos saldrán de su dispositivo a través de la InSuite (a excepción de InQR, que genera el QR desde una API pública)",

        "landing.products.title": "Suite completa de productividad",
        "landing.products.desc": "Aplicaciones diseñadas para su día a día",
        "landing.products.indoc_sub": "Editor de texto en línea",
        "landing.products.indoc_explore": "Explorar InDOC",
        "landing.products.inmd_sub": "El único editor visual de Markdown libre",
        "landing.products.inmd_explore": "Explorar InMD",
        "landing.products.inlinked_sub": "Formateador de Post de LinkedIN",
        "landing.products.inlinked_explore": "Explorar InLinked",
        "landing.products.mdpdf_sub": "Edita y visualiza markdown y exporta a PDF",
        "landing.products.mdpdf_explore": "Explorar MDPDF",
        "landing.products.inqr_sub": "Generador de códigos QR",
        "landing.products.inqr_explore": "Explorar InQR",
        "landing.products.inpdf_sub": "Visor de PDF con IA",
        "landing.products.inpdf_desc": "Próximamente, InPDF va a recibir una actualización para mejorar su capacidad de lectura de PDFs con IA. Estate atento.",
        "landing.products.inpdf_explore": "Explorar InPDF",
        "landing.products.mdocx_sub": "Conversor MD ↔ DOCX",
        "landing.products.mdocx_explore": "Explorar MDOCX",
        
        "landing.footer.desc": "Tu suite de ofimática libre",
        "landing.footer.editors": "Editores",
        "landing.footer.support": "Soporte",
        "landing.footer.help": "Centro de ayuda",
        "landing.footer.tutorials": "Tutoriales",
        "landing.footer.privacy": "Política de Privacidad",
        "landing.footer.terms": "Términos de Servicio",
        "landing.footer.cookies": "Política de Cookies",
        "landing.footer.copyright": "© 2025 Inled Group por el diseño web.",

        // Features List (Common)
        "feat.ai_integration": "Integración de Inled AI",
        "feat.export_pdf_txt": "Exportación a PDF y texto",
        "feat.text_format": "Formateo de texto",
        "feat.continue": "Continuar por donde lo dejaste",
        "feat.export_md_html": "Exportación a MD y HTML",
        "feat.no_code": "Edición sin código",
        "feat.sync_view": "Visualización de código sincronizada",
        "feat.linkedin_format": "Compatible con el formato LinkedIN",
        "feat.latex": "Compatibilidad con fórmulas LaTeX",
        "feat.chatgpt_fmt": "Compatible con el formato de ChatGPT, Deepseek, Gemini...",
        "feat.emojis": "Compatible con emoticonos",
        "feat.pdf_exact": "Exportación a PDF con formato idéntico",
        "feat.qr_web": "Genera QR de un sitio web",
        "feat.qr_wifi": "Crea QR de acceso a Wifi",
        "feat.wifi_types": "Compatible con múltiples tipos de Wifi",
        "feat.barcodes": "Compone códigos de barras",
        "feat.chrome_plus": "Más funciones que el visor predeterminado de Chrome",
        "feat.max_privacy": "Máxima privacidad",
        "feat.ai_adv": "Inteligencia artificial avanzada",
        "feat.md_docx_bi": "Conversión bidireccional MD y DOCX",
        "feat.docx_compat": "Archivos DOCX compatibles con Word y OnlyOffice",
        "feat.md_editor": "Editor de markdown integrado",
        "feat.local_proc": "Procesamiento local sin subir a la nube",

        // Sub (Newsletter)
        "sub.validation_error": "No hemos podido validar su suscripción.",
        "sub.success": "Se ha realizado su suscripción.",
        "sub.title": "Buenas!",
        "sub.text1": "Ofrecemos la InSuite de manera gratuita y sin anuncios. A cambio, nos haría ilusión que te suscribieras a nuestra newsletter.",
        "sub.text2": "No mandamos spam, solamente recibirás novedades e innovaciones importantes.",
        "sub.label": "Déjanos tu email y descubre novedades antes que nadie",
        "sub.placeholder": "Tu mejor email...",
        "sub.button": "SUSCRIBIRSE",
        "sub.close": "Cerrar",

        // Apps Page
        "apps.title": "Aplicaciones",
        "apps.mdpdf_desc": "Edita y previsualiza markdown y expórtalo a PDF",
        "apps.inlinked_desc": "Formatea texto para LinkedIN",
        "apps.inmd_desc": "Edita markdown como si estuvieras en Word, sin ver código",
        "apps.indoc_desc": "Edita texto enriquecido online",
        "apps.inqr_desc": "crea códigos QR para webs, redes wifi y códigos de barras",
        "apps.inpdf_desc": "Visor PDF con IA. Para Chrome",
        "apps.mdocx_desc": "Convierte archivos entre MD y DOCX con edición en tiempo real",
        "apps.utils_title": "Utilidades",
        "apps.devreka_desc": "Genera ideas de desarrollo para devs con IA",
        "apps.glassy_desc": "Transforma una imagen en un svg liquid glass al estilo apple",
        "apps.matrix_desc": "Simulaciones web de los programas que aparecen en la trilogía de Matrix",

        // InDoc
        "indoc.title": "InDoc - Edita texto con IA gratuitamente",
        "indoc.desc": "Editor de texto con IA integrada gratuito, privado y open-source",
        "indoc.header": "InDoc | Editor de texto gratuito con IA",
        "indoc.new": "Nuevo",
        "indoc.open": "Abrir",
        "indoc.save": "Guardar",
        "indoc.pdf": "PDF",
        "indoc.txt": "TXT",
        "indoc.placeholder": "Comienza a escribir aquí con la ayuda de la IA. :)",
        "indoc.confirm_new": "Revisa antes si has guardado los cambios por que al abrir un nuevo documento se perderán.",
        "indoc.prompt_name": "Nombre del documento:",
        "indoc.doc_saved": "Documento guardado correctamente",
        "indoc.no_docs": "No hay documentos guardados",
        "indoc.docs_title": "Documentos Guardados",
        "indoc.created": "Creado:",
        "indoc.delete": "Eliminar",
        "indoc.close": "Cerrar",
        "indoc.doc_opened": "Documento abierto",
        "indoc.confirm_delete": "¿Estás seguro de que quieres eliminar este documento?",
        "indoc.error_html2pdf": "Error: html2pdf no está cargado. Contacte con el administrador.",
        "indoc.pdf_success": "PDF exportado exitosamente",
        "indoc.pdf_error": "Error al exportar a PDF: ",
        "indoc.copy_error": "Error al copiar el texto",
        "indoc.ai_system_prompt": "Eres un asistente de escritura útil y amigable. Ayudas a los usuarios con sus documentos, proporcionas sugerencias de escritura, corriges gramática y respondes preguntas de manera clara y concisa. Responde siempre en español. Puedes usar Markdown para formatear tu respuesta (negrita **texto**, cursiva *texto*, listas, etc.). El usuario está trabajando en el siguiente texto:\n\n",
        "indoc.ai_ready": "¡IA lista para usar!",
        "indoc.ai_downloading": "Descargando modelo de IA...",
        "indoc.ai_error_load": "Error al cargar la IA. Inténtalo más tarde.",

        // InMD
        "inmd.title": "InMD | Editor Markdown Visual Gratuito y Open-Source",
        "inmd.desc": "InMD es un editor visual de Markdown gratuito y de código abierto. Listo para usar sin pagar y sin login",
        "inmd.header": "InMD",
        "inmd.visual": "Editor Visual",
        "inmd.markdown": "Código Markdown",
        "inmd.copy_md": "Copiar Markdown",
        "inmd.copy_html": "Copiar HTML",
        "inmd.download_md": "Descargar .md",
        "inmd.load_file": "Cargar archivo",
        
        // InMD Toolbar
        "inmd.bold": "Negrita (Ctrl+B)",
        "inmd.italic": "Cursiva (Ctrl+I)",
        "inmd.underline": "Subrayado",
        "inmd.strikethrough": "Tachado",
        "inmd.ul": "Lista sin orden",
        "inmd.ol": "Lista ordenada",
        "inmd.task": "Lista de tareas",
        "inmd.link": "Enlace",
        "inmd.image": "Imagen",
        "inmd.code": "Código inline",
        "inmd.codeblock": "Bloque de código",
        "inmd.quote": "Cita",
        "inmd.table": "Tabla",
        "inmd.hr": "Línea horizontal",
        "inmd.undo": "Deshacer (Ctrl+Z)",
        "inmd.redo": "Rehacer (Ctrl+Y)",

        // InLinked
        "inlinked.title": "Inlinked | Formateador de texto para LinkedIN",
        "inlinked.desc": "Formatea texto para LinkedIN con IA",
        "inlinked.header": "Inlinked",
        "inlinked.format_group": "Formato",
        "inlinked.linkedin_group": "Estilos LinkedIn",
        "inlinked.actions_group": "Acciones",
        "inlinked.bold": "Negrita",
        "inlinked.italic": "Cursiva",
        "inlinked.underline": "Subr.",
        "inlinked.strikethrough": "Tachado",
        "inlinked.code": "Código",
        "inlinked.clean": "Limpiar",
        "inlinked.clear": "Borrar",
        "inlinked.copy": "Copiar",
        "inlinked.copied": "Copiado",
        "inlinked.placeholder": "Escribe aquí tu post para LinkedIn...",
        "inlinked.confirm_clear": "¿Borrar todo el texto?",
        "inlinked.error_copy": "No se pudo copiar el texto.",

        // InQR
        "inqr.title": "InQR | Genera QR gratis y privado",
        "inqr.desc": "Generador de códigos QR y códigos de barras moderno y fácil de usar",
        "inqr.header": "InQR",
        "inqr.subtitle": "Genera códigos QR",
        "inqr.create": "Crear código",
        "inqr.your_code": "Tu Código",
        "inqr.tab_text": "Texto/URL",
        "inqr.tab_wifi": "Acceso WiFi",
        "inqr.tab_barcode": "Código de Barras",
        "inqr.input_text": "Escribe aquí tu texto, URL, número de teléfono... ",
        "inqr.wifi_ssid": "Nombre de la red (SSID):",
        "inqr.wifi_pass": "Contraseña:",
        "inqr.wifi_security": "Tipo de seguridad:",
        "inqr.wifi_hidden": " Red oculta",
        "inqr.barcode_content": "Contenido del código de barras:",
        "inqr.barcode_type": "Tipo de código de barras:",
        "inqr.generate": "Generar Código",
        "inqr.download": "Descargar Código",
        "inqr.tips_title": "Consejos:",
        "inqr.tip1": "• Puedes usar URLs, texto, números de teléfono",
        "inqr.tip2": "• El código se puede descargar como imagen PNG",
        "inqr.no_code_title": "No hay código aún",
        "inqr.no_code_desc": "Selecciona un tipo y genera tu código",
        "inqr.encoded_data": "Datos codificados:",
        "inqr.footer": "Genera códigos QR gratuitamente · No recopilamos tus datos",

        // InQR JS
        "inqr.toast_copied": "Texto copiado al portapapeles",
        "inqr.toast_error_copy": "No se pudo copiar el texto",
        "inqr.toast_empty_text": "Por favor ingresa un texto para generar el código QR",
        "inqr.toast_empty_ssid": "Por favor ingresa el nombre de la red WiFi",
        "inqr.toast_empty_barcode": "Por favor ingresa el texto para el código de barras",
        "inqr.generating": "Generando...",
        "inqr.download_barcode": "Descargar Código de Barras",
        "inqr.download_qr": "Descargar Código QR",
        "inqr.toast_success_barcode": "¡Código de barras generado correctamente!",
        "inqr.toast_success_qr": "¡Código QR generado correctamente!",
        "inqr.toast_error_download": "Error al descargar. Haz clic derecho en el código y pulsa en Guardar imagen como...",
        "inqr.toast_success_download": "El código se ha descargado correctamente",
        "inqr.title_text": "Tu Código QR",
        "inqr.title_wifi": "Tu Código QR WiFi",
        "inqr.title_barcode": "Tu Código de Barras",
        
        "inqr.tips_text_1": "• Puedes usar URLs, texto, números de teléfono",
        "inqr.tips_text_2": "• El código QR se puede descargar como imagen PNG",
        "inqr.tips_text_3": "• Puedes generarlo también pulsando Enter",

        "inqr.tips_wifi_1": "• Los dispositivos podrán conectarse automáticamente",
        "inqr.tips_wifi_2": "• Asegúrate de que los datos sean correctos",
        "inqr.tips_wifi_3": "• Funciona con la mayoría de smartphones modernos",
        "inqr.tips_wifi_4": "• Puedes generarlo también pulsando Enter",

        "inqr.tips_barcode_1": "• Útil para inventarios y productos",
        "inqr.tips_barcode_2": "• CODE 128 es el más versátil",
        "inqr.tips_barcode_3": "• Pronto añadiremos más tipos de códigos de barras.",
        "inqr.tips_barcode_4": "• Puedes generarlo también pulsando Enter",


        // MDOCX
        "mdoxc.title": "MDOCX | Conversor Privado MD/DOCX",
        "mdoxc.desc": "Convierte Markdown a DOCX y DOCX a Markdown en tu navegador. Privado y gratuito.",
        "mdoxc.header": "MDOCX",
        "mdoxc.upload": "Subir archivo",
        "mdoxc.convert": "Convertir",
        "mdoxc.download": "Descargar",
        "mdoxc.mode_docx_md": "Cambiar a DOCX → MD",
        "mdoxc.mode_md_docx": "Cambiar a MD → DOCX",
        "mdoxc.clear": "Limpiar",
        "mdoxc.editor": "Editor",
        "mdoxc.preview": "Previsualización",
        "mdoxc.status_ready": "Listo",
        "mdoxc.words": "palabras",
        "mdoxc.placeholder": "# Mi Documento\n\nEscribe aquí tu contenido en Markdown o sube un archivo...",

        // MDPDF
        "mdpdf.title": "Editor Gratuito de Markdown a PDF",
        "mdpdf.header": "MDPDF",
        "mdpdf.export": "Exportar a PDF",
        "mdpdf.example": "Insertar ejemplo",
        "mdpdf.clear_all": "Limpiar todo",
        "mdpdf.editor": "Editor",
        "mdpdf.preview": "Vista previa",
        "mdpdf.report": "Reportar error",
        "mdpdf.generating": "Generando PDF...",
        "mdpdf.placeholder": "# Mi Documento\n\nEscribe aquí tu contenido en Markdown..."
    },
    en: {
        // Global / Sidebar / Footer
        "sidebar.home": "Home",
        "sidebar.apps": "Apps",
        "footer.rights": "Inled Group 2026. Licensed under GNU GPLv3.0",
        "ai.link": "Go to Inled AI",
        "ai.powered": "Powered by Inled AI",
        "ai.chat": "AI Chat",
        "ai.loading": "Loading AI model...",
        "ai.placeholder": "Talk to AI here...",
        "ai.send": "Send",
        "ai.insert": "Insert",
        "ai.copy": "Copy",
        "ai.title": "Inled AI",
        "ai.thinking": "Thinking",
        "ai.copied": "Copied",
        "ai.error": "Sorry, there was an error processing your message.",

        // Landing Page
        "landing.title": "InSuite | Your free office suite",
        "landing.header.features": "Features",
        "landing.header.editors": "Editors",
        "landing.header.docs": "Documentation",
        "landing.header.access": "Access free",
        "landing.hero.title_start": "The online suite",
        "landing.hero.title_free": "free",
        "landing.hero.title_private": "private",
        "landing.hero.title_ai": "with AI",
        "landing.hero.desc": "Several editors that solve your daily tasks without taking a single piece of data that belongs to you.",
        "landing.hero.access": "Access",
        "landing.hero.docs": "Documentation",
        "landing.hero.card_more_title": "Much more",
        "landing.hero.card_more_desc": "Otherwise the page gets too big",
        "landing.hero.card_indoc": "Create documents with AI",
        "landing.hero.card_inmd": "Edit markdown without seeing code",
        "landing.hero.card_inlinked": "Create LinkedIn posts with AI",

        "landing.features.title": "Why InSuite?",
        "landing.features.desc": "A private, free, open-source alternative with AI (which is also private)",
        "landing.features.free_title": "Free and Open",
        "landing.features.free_desc": "All InSuite is free and open source",
        "landing.features.private_title": "More private than all",
        "landing.features.private_desc": "Current suites make you a product whose data is used. <br> InSuite processes everything on your PC and collects no data",
        "landing.features.ai_title": "Integrated Inled AI",
        "landing.features.ai_desc": "Inled AI, a novel AI system that allows execution on your PC, is integrated into the best InSuite editors",
        "landing.features.intuitive_title": "Intuitive",
        "landing.features.intuitive_desc": "You won't need user manuals to take your first steps",
        "landing.features.rgpd_title": "GDPR Compliant",
        "landing.features.rgpd_desc": "By the mere fact that we don't take even the slightest bit of data from your interaction with InSuite",
        "landing.features.security_title": "Security",
        "landing.features.security_desc": "Your documents will never leave your device through InSuite (except for InQR, which generates the QR from a public API)",

        "landing.products.title": "Complete Productivity Suite",
        "landing.products.desc": "Apps designed for your day to day",
        "landing.products.indoc_sub": "Online text editor",
        "landing.products.indoc_explore": "Explore InDOC",
        "landing.products.inmd_sub": "The only free visual Markdown editor",
        "landing.products.inmd_explore": "Explore InMD",
        "landing.products.inlinked_sub": "LinkedIn Post Formatter",
        "landing.products.inlinked_explore": "Explore InLinked",
        "landing.products.mdpdf_sub": "Edit and view markdown and export to PDF",
        "landing.products.mdpdf_explore": "Explore MDPDF",
        "landing.products.inqr_sub": "QR Code Generator",
        "landing.products.inqr_explore": "Explore InQR",
        "landing.products.inpdf_sub": "AI PDF Viewer",
        "landing.products.inpdf_desc": "Coming soon, InPDF will receive an update to improve its AI PDF reading capability. Stay tuned.",
        "landing.products.inpdf_explore": "Explore InPDF",
        "landing.products.mdocx_sub": "MD ↔ DOCX Converter",
        "landing.products.mdocx_explore": "Explore MDOCX",

        "landing.footer.desc": "Your free office suite",
        "landing.footer.editors": "Editors",
        "landing.footer.support": "Support",
        "landing.footer.help": "Help Center",
        "landing.footer.tutorials": "Tutorials",
        "landing.footer.privacy": "Privacy Policy",
        "landing.footer.terms": "Terms of Service",
        "landing.footer.cookies": "Cookie Policy",
        "landing.footer.copyright": "© 2025 Inled Group for web design.",

        // Features List (Common)
        "feat.ai_integration": "Inled AI Integration",
        "feat.export_pdf_txt": "Export to PDF and text",
        "feat.text_format": "Text formatting",
        "feat.continue": "Continue where you left off",
        "feat.export_md_html": "Export to MD and HTML",
        "feat.no_code": "No-code editing",
        "feat.sync_view": "Synchronized code view",
        "feat.linkedin_format": "Compatible with LinkedIn format",
        "feat.latex": "LaTeX formula support",
        "feat.chatgpt_fmt": "Compatible with ChatGPT, Deepseek, Gemini format...",
        "feat.emojis": "Compatible with emojis",
        "feat.pdf_exact": "Export to PDF with identical format",
        "feat.qr_web": "Generate website QR",
        "feat.qr_wifi": "Create Wifi access QR",
        "feat.wifi_types": "Compatible with multiple Wifi types",
        "feat.barcodes": "Compose barcodes",
        "feat.chrome_plus": "More features than default Chrome viewer",
        "feat.max_privacy": "Maximum privacy",
        "feat.ai_adv": "Advanced artificial intelligence",
        "feat.md_docx_bi": "Bidirectional MD and DOCX conversion",
        "feat.docx_compat": "DOCX files compatible with Word and OnlyOffice",
        "feat.md_editor": "Integrated markdown editor",
        "feat.local_proc": "Local processing without uploading to cloud",

        // Sub (Newsletter)
        "sub.validation_error": "We could not validate your subscription.",
        "sub.success": "Your subscription has been completed.",
        "sub.title": "Hello!",
        "sub.text1": "We offer InSuite for free and without ads. In exchange, we would love for you to subscribe to our newsletter.",
        "sub.text2": "We don't send spam, you will only receive important news and innovations.",
        "sub.label": "Leave us your email and discover news before anyone else",
        "sub.placeholder": "Your best email...",
        "sub.button": "SUBSCRIBE",
        "sub.close": "Close",

        // Apps Page
        "apps.title": "Applications",
        "apps.mdpdf_desc": "Edit and preview markdown and export to PDF",
        "apps.inlinked_desc": "Format text for LinkedIn",
        "apps.inmd_desc": "Edit markdown as if in Word, without seeing code",
        "apps.indoc_desc": "Edit rich text online",
        "apps.inqr_desc": "Create QR codes for webs, wifi networks and barcodes",
        "apps.inpdf_desc": "AI PDF Viewer. For Chrome",
        "apps.mdocx_desc": "Convert files between MD and DOCX with real-time editing",
        "apps.utils_title": "Utilities",
        "apps.devreka_desc": "Generate development ideas for devs with AI",
        "apps.glassy_desc": "Transform an image into an apple-style liquid glass svg",
        "apps.matrix_desc": "Web simulations of programs appearing in the Matrix trilogy",

        // InDoc
        "indoc.title": "InDoc - Edit text with AI for free",
        "indoc.desc": "Free, private, open-source AI-integrated text editor",
        "indoc.header": "InDoc | Free AI Text Editor",
        "indoc.new": "New",
        "indoc.open": "Open",
        "indoc.save": "Save",
        "indoc.pdf": "PDF",
        "indoc.txt": "TXT",
        "indoc.placeholder": "Start writing here with AI help. :)",
        "indoc.confirm_new": "Check if you have saved changes because opening a new document will lose them.",
        "indoc.prompt_name": "Document Name:",
        "indoc.doc_saved": "Document saved successfully",
        "indoc.no_docs": "No saved documents",
        "indoc.docs_title": "Saved Documents",
        "indoc.created": "Created:",
        "indoc.delete": "Delete",
        "indoc.close": "Close",
        "indoc.doc_opened": "Document opened",
        "indoc.confirm_delete": "Are you sure you want to delete this document?",
        "indoc.error_html2pdf": "Error: html2pdf is not loaded. Contact administrator.",
        "indoc.pdf_success": "PDF exported successfully",
        "indoc.pdf_error": "Error exporting PDF: ",
        "indoc.copy_error": "Error copying text",
        "indoc.ai_system_prompt": "You are a helpful and friendly writing assistant. You help users with their documents, provide writing suggestions, correct grammar, and answer questions clearly and concisely. Respond always in English. You can use Markdown to format your response (bold **text**, italic *text*, lists, etc.). The user is working on the following text:\n\n",
        "indoc.ai_ready": "AI ready to use!",
        "indoc.ai_downloading": "Downloading AI model...",
        "indoc.ai_error_load": "Error loading AI. Try again later.",
        
        // InMD
        "inmd.title": "InMD | Free & Open-Source Visual Markdown Editor",
        "inmd.desc": "InMD is a free and open-source visual Markdown editor. Ready to use without payment or login",
        "inmd.header": "InMD",
        "inmd.visual": "Visual Editor",
        "inmd.markdown": "Markdown Code",
        "inmd.copy_md": "Copy Markdown",
        "inmd.copy_html": "Copy HTML",
        "inmd.download_md": "Download .md",
        "inmd.load_file": "Load file",

         // InMD Toolbar
        "inmd.bold": "Bold (Ctrl+B)",
        "inmd.italic": "Italic (Ctrl+I)",
        "inmd.underline": "Underline",
        "inmd.strikethrough": "Strikethrough",
        "inmd.ul": "Unordered List",
        "inmd.ol": "Ordered List",
        "inmd.task": "Task List",
        "inmd.link": "Link",
        "inmd.image": "Image",
        "inmd.code": "Inline Code",
        "inmd.codeblock": "Code Block",
        "inmd.quote": "Quote",
        "inmd.table": "Table",
        "inmd.hr": "Horizontal Line",
        "inmd.undo": "Undo (Ctrl+Z)",
        "inmd.redo": "Redo (Ctrl+Y)",

        // InLinked
        "inlinked.title": "Inlinked | Text Formatter for LinkedIn",
        "inlinked.desc": "Format text for LinkedIn with AI",
        "inlinked.header": "Inlinked",
        "inlinked.format_group": "Format",
        "inlinked.linkedin_group": "LinkedIn Styles",
        "inlinked.actions_group": "Actions",
        "inlinked.bold": "Bold",
        "inlinked.italic": "Italic",
        "inlinked.underline": "Underline",
        "inlinked.strikethrough": "Strikethrough",
        "inlinked.code": "Code",
        "inlinked.clean": "Clean",
        "inlinked.clear": "Clear",
        "inlinked.copy": "Copy",
        "inlinked.copied": "Copied",
        "inlinked.placeholder": "Write your LinkedIn post here...",
        "inlinked.confirm_clear": "Clear all text?",
        "inlinked.error_copy": "Could not copy text.",

        // InQR
        "inqr.title": "InQR | Generate QR for free and private",
        "inqr.desc": "Modern and easy-to-use QR code and barcode generator",
        "inqr.header": "InQR",
        "inqr.subtitle": "Generate QR codes",
        "inqr.create": "Create code",
        "inqr.your_code": "Your Code",
        "inqr.tab_text": "Text/URL",
        "inqr.tab_wifi": "WiFi Access",
        "inqr.tab_barcode": "Barcode",
        "inqr.input_text": "Enter text, URL, phone number here... ",
        "inqr.wifi_ssid": "Network Name (SSID):",
        "inqr.wifi_pass": "Password:",
        "inqr.wifi_security": "Security Type:",
        "inqr.wifi_hidden": " Hidden Network",
        "inqr.barcode_content": "Barcode Content:",
        "inqr.barcode_type": "Barcode Type:",
        "inqr.generate": "Generate Code",
        "inqr.download": "Download Code",
        "inqr.tips_title": "Tips:",
        "inqr.tip1": "• You can use URLs, text, phone numbers",
        "inqr.tip2": "• The code can be downloaded as a PNG image",
        "inqr.no_code_title": "No code yet",
        "inqr.no_code_desc": "Select a type and generate your code",
        "inqr.encoded_data": "Encoded Data:",
        "inqr.footer": "Generate QR codes for free · We do not collect your data",
        
        // InQR JS
        "inqr.toast_copied": "Text copied to clipboard",
        "inqr.toast_error_copy": "Could not copy text",
        "inqr.toast_empty_text": "Please enter text to generate QR code",
        "inqr.toast_empty_ssid": "Please enter WiFi network name",
        "inqr.toast_empty_barcode": "Please enter text for barcode",
        "inqr.generating": "Generating...",
        "inqr.download_barcode": "Download Barcode",
        "inqr.download_qr": "Download QR Code",
        "inqr.toast_success_barcode": "Barcode generated successfully!",
        "inqr.toast_success_qr": "QR code generated successfully!",
        "inqr.toast_error_download": "Error downloading. Right click code and Save Image As...",
        "inqr.toast_success_download": "Code downloaded successfully",
        "inqr.title_text": "Your QR Code",
        "inqr.title_wifi": "Your WiFi QR Code",
        "inqr.title_barcode": "Your Barcode",
        
        "inqr.tips_text_1": "• You can use URLs, text, phone numbers",
        "inqr.tips_text_2": "• QR code can be downloaded as PNG image",
        "inqr.tips_text_3": "• You can also generate by pressing Enter",

        "inqr.tips_wifi_1": "• Devices can connect automatically",
        "inqr.tips_wifi_2": "• Make sure data is correct",
        "inqr.tips_wifi_3": "• Works with most modern smartphones",
        "inqr.tips_wifi_4": "• You can also generate by pressing Enter",

        "inqr.tips_barcode_1": "• Useful for inventory and products",
        "inqr.tips_barcode_2": "• CODE 128 is the most versatile",
        "inqr.tips_barcode_3": "• More barcode types coming soon.",
        "inqr.tips_barcode_4": "• You can also generate by pressing Enter",


        // MDOCX
        "mdoxc.title": "MDOCX | Private MD/DOCX Converter",
        "mdoxc.desc": "Convert Markdown to DOCX and DOCX to Markdown in your browser. Private and free.",
        "mdoxc.header": "MDOCX",
        "mdoxc.upload": "Upload file",
        "mdoxc.convert": "Convert",
        "mdoxc.download": "Download",
        "mdoxc.mode_docx_md": "Switch to DOCX → MD",
        "mdoxc.mode_md_docx": "Switch to MD → DOCX",
        "mdoxc.clear": "Clear",
        "mdoxc.editor": "Editor",
        "mdoxc.preview": "Preview",
        "mdoxc.status_ready": "Ready",
        "mdoxc.words": "words",
        "mdoxc.placeholder": "# My Document\n\nWrite your Markdown content here or upload a file...",

        // MDPDF
        "mdpdf.title": "Free Markdown to PDF Editor",
        "mdpdf.header": "MDPDF",
        "mdpdf.export": "Export to PDF",
        "mdpdf.example": "Insert example",
        "mdpdf.clear_all": "Clear all",
        "mdpdf.editor": "Editor",
        "mdpdf.preview": "Preview",
        "mdpdf.report": "Report bug",
        "mdpdf.generating": "Generating PDF...",
        "mdpdf.placeholder": "# My Document\n\nWrite your Markdown content here..."
    }
};

class Localization {
    constructor() {
        this.lang = 'es'; // Default
        this.init();
    }

    init() {
        // Detect language
        const storedLang = localStorage.getItem('app_lang');
        const browserLang = navigator.language.split('-')[0];
        
        if (storedLang && ['es', 'en'].includes(storedLang)) {
            this.lang = storedLang;
        } else if (['es', 'en'].includes(browserLang)) {
            this.lang = browserLang;
        } else {
            this.lang = 'es'; // Fallback
        }

        // Apply on load
        document.addEventListener('DOMContentLoaded', () => {
            this.applyTranslations();
            this.updateSwitch();
            this.setupSwitch();
        });
    }

    toggle() {
        this.lang = this.lang === 'es' ? 'en' : 'es';
        localStorage.setItem('app_lang', this.lang);
        this.applyTranslations();
        this.updateSwitch();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.lang] && translations[this.lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = translations[this.lang][key];
                    }
                } else if (el.hasAttribute('title') && !el.textContent.trim()) {
                     el.title = translations[this.lang][key];
                } else {
                    const childNodes = Array.from(el.childNodes);
                    const textNode = childNodes.find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
                    
                    if (textNode) {
                        textNode.textContent = translations[this.lang][key];
                    } else if (childNodes.length === 0 || (childNodes.length === 1 && childNodes[0].nodeType === Node.TEXT_NODE)) {
                        el.textContent = translations[this.lang][key];
                    } else {
                         // InnerHTML fallback for formatted text
                         if (translations[this.lang][key].includes('<')) {
                             el.innerHTML = translations[this.lang][key];
                         } else {
                             el.textContent = translations[this.lang][key];
                         }
                    }
                }
            }
        });

        // Placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[this.lang][key]) {
                el.placeholder = translations[this.lang][key];
            }
        });

        // Tooltip attributes
        document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
            const key = el.getAttribute('data-i18n-tooltip');
            if (translations[this.lang][key]) {
                el.title = translations[this.lang][key];
            }
        });

        const titleKey = document.body.getAttribute('data-i18n-title');
        if (titleKey && translations[this.lang][titleKey]) {
            document.title = translations[this.lang][titleKey];
        }

        document.documentElement.lang = this.lang;
        
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.lang } }));
    }

    updateSwitch() {
        const switchEl = document.getElementById('lang-switch-input');
        const labelEl = document.getElementById('lang-switch-label');
        const switchElMobile = document.getElementById('lang-switch-input-mobile');
        const labelElMobile = document.getElementById('lang-switch-label-mobile');

        const isEn = this.lang === 'en';
        const labelText = isEn ? 'EN' : 'ES';

        if (switchEl) switchEl.checked = isEn;
        if (switchElMobile) switchElMobile.checked = isEn;
        
        if (labelEl) labelEl.textContent = labelText;
        if (labelElMobile) labelElMobile.textContent = labelText;
    }

    setupSwitch() {
        const switchEl = document.getElementById('lang-switch-input');
        const switchElMobile = document.getElementById('lang-switch-input-mobile');

        if (switchEl) {
            switchEl.addEventListener('change', () => {
                this.toggle();
            });
        }
        if (switchElMobile) {
            switchElMobile.addEventListener('change', () => {
                this.toggle();
            });
        }
    }
    
    t(key) {
        if (translations[this.lang] && translations[this.lang][key]) {
            return translations[this.lang][key];
        }
        return key;
    }
}

window.Localization = new Localization();
