// Variables globales
let markdownInput, preview, filenameInput, loading, wordCount;

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado, inicializando...");

  // Obtener elementos
  markdownInput = document.getElementById("markdown-input");
  preview = document.getElementById("preview");
  filenameInput = document.getElementById("filename");
  loading = document.getElementById("loading");
  wordCount = document.getElementById("word-count");

  // Botones
  const btnExport = document.getElementById("btn-export");
  const btnExample = document.getElementById("btn-example");
  const btnClear = document.getElementById("btn-clear");

  if (markdownInput && preview) {
    console.log("Elementos encontrados, configurando eventos...");

    // Configurar eventos
    markdownInput.addEventListener("input", updatePreview);
    markdownInput.addEventListener("keyup", updatePreview);
    markdownInput.addEventListener("paste", function () {
      setTimeout(updatePreview, 10);
    });

    // Eventos de botones
    if (btnExport) btnExport.addEventListener("click", downloadPDF);
    if (btnExample) btnExample.addEventListener("click", insertExample);
    if (btnClear) btnClear.addEventListener("click", clearEditor);

    // Actualizar vista previa inicial
    updatePreview();
    console.log("Editor inicializado correctamente");

    // Gestión de gestos táctiles y botones toggle
    const previewPanel = document.querySelector(".preview-panel");
    const toggleBtn = document.getElementById("btn-toggle-preview");
    const welcomeModal = document.getElementById("welcome-modal");
    const closeWelcomeBtn = document.getElementById("btn-close-welcome");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        previewPanel.classList.toggle("--visible");
      });
    }

    if (closeWelcomeBtn) {
        closeWelcomeBtn.addEventListener('mousedown', (e) => {
            e.preventDefault();
            console.log('Botón de bienvenida clickeado');
            welcomeModal.style.setProperty('display', 'none', 'important');
        });
    }
    document.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      false,
    );

    document.addEventListener(
      "touchend",
      (e) => {
        let touchEndX = e.changedTouches[0].screenX;
        handleSwipe(touchStartX, touchEndX);
      },
      false,
    );

    function handleSwipe(startX, endX) {
      if (window.innerWidth > 768) return;
      const diff = endX - startX;
      if (diff < -50) {
        // Deslizamiento derecha a izquierda
        previewPanel.classList.add("--visible");
      } else if (diff > 50) {
        // Deslizamiento izquierda a derecha
        previewPanel.classList.remove("--visible");
      }
    }
  } else {
    console.error("No se encontraron los elementos necesarios");
  }
});

// Función para actualizar la vista previa
function updatePreview() {
  if (!markdownInput || !preview) return;

  const text = markdownInput.value;

  // Si no hay texto, mostrar placeholder
  if (!text.trim()) {
    preview.innerHTML =
      '<div class="placeholder-text">Escribe algo en el editor para ver la vista previa...</div>';
    if (wordCount) wordCount.textContent = "0 palabras";
    return;
  }

  try {
    // Convertir markdown a HTML
    let html = marked.parse(text);

    // Procesar fórmulas matemáticas
    html = html.replace(/\$\$([\s\S]+?)\$\$/g, function (match, math) {
      return '<div class="math-display">$$' + math + "$$</div>";
    });

    html = html.replace(/\$([^\$\n]+?)\$/g, function (match, math) {
      return '<span class="math-inline">$' + math + "$</span>";
    });

    // Actualizar contenido
    preview.innerHTML = html;

    // Contar palabras
    if (wordCount) {
      const words = text
        .trim()
        .split(/\s+/)
        .filter(function (word) {
          return word.length > 0;
        });
      wordCount.textContent = words.length + " palabras";
    }

    // Renderizar matemáticas con MathJax
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([preview]).catch(function (err) {
        console.warn("Error renderizando matemáticas:", err);
      });
    }
  } catch (error) {
    console.error("Error actualizando vista previa:", error);
    preview.innerHTML =
      '<div style="color: #e74c3c; padding: 20px;">Error renderizando el contenido. Verifica la sintaxis de Markdown.</div>';
  }
}

// Función para insertar ejemplo
function insertExample() {
  if (!markdownInput) return;

  const currentContent = markdownInput.value.trim();
  if (
    currentContent &&
    !confirm("¿Quieres reemplazar el contenido actual con el ejemplo?")
  ) {
    return;
  }

  markdownInput.value = `# Guia Completa de Markdown

## Encabezados

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4

---

## Énfasis

Texto en *cursiva* o _cursiva_
Texto en **negrita** o __negrita__
Texto en ***negrita y cursiva***
Texto ~~tachado~~

---

## Listas

### Lista desordenada
- Elemento 1
- Elemento 2
  - Sub-elemento 2.1
  - Sub-elemento 2.2
- Elemento 3

### Lista ordenada
1. Primer punto
2. Segundo punto
   1. Subpunto A
   2. Subpunto B
3. Tercer punto

---

## Enlaces e Imágenes

[Enlace a Google](https://www.google.com)
[Enlace con título](https://www.ejemplo.com "Título del enlace")

---

## Código

Código en línea: \`console.log('Hola mundo')\`

Bloque de código:

\`\`\`javascript
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Mundo"));
\`\`\`

\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
\`\`\`

---

## Citas

> Esta es una cita simple.
>
> Puede tener múltiples párrafos.

> Esta es una cita con **texto en negrita** y *cursiva*.

---

## Tablas

| Nombre | Edad | Ciudad |
|--------|------|--------|
| Ana | 25 | Madrid |
| Luis | 30 | Barcelona |
| María | 28 | Valencia |

Tabla con alineación:

| Izquierda | Centro | Derecha |
|:----------|:------:|--------:|
| Texto | Texto | Texto |
| Más | Contenido | Aquí |

---

## Matemáticas

### Fórmulas en línea
La ecuación más famosa: $E = mc^2$

Teorema de Pitágoras: $a^2 + b^2 = c^2$

### Fórmulas en bloque

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$

$$\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}
\\begin{pmatrix}
x \\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
ax + by \\\\
cx + dy
\\end{pmatrix}$$

### Más matemáticas
Límite: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

Derivada: $\\frac{d}{dx}(x^n) = nx^{n-1}$

Integral: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$

---

## Líneas horizontales

Se crean con tres o más guiones:

---

## Listas de tareas

- [x] Tarea completada
- [x] Otra tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente

---

## HTML embebido

<p style="color: red; font-weight: bold;">Este texto es rojo y en negrita usando HTML</p>

<div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
Este es un div con estilo personalizado
</div>

---

## Caracteres especiales

Para mostrar caracteres literales:

\\*asterisco\\*
\\_guión bajo\\_
\\# almohadilla
\\\`comilla invertida\`

---

¡Listo para generar tu PDF! 📄✨`;

  updatePreview();
  markdownInput.focus();
}

// Función para limpiar editor
function clearEditor() {
  if (!markdownInput) return;

  const hasContent = markdownInput.value.trim().length > 0;

  if (!hasContent || confirm("¿Seguro que quieres borrar todo el contenido?")) {
    markdownInput.value = "";
    updatePreview();
    markdownInput.focus();
  }
}

// Función para generar PDF
function downloadPDF() {
  if (!markdownInput || !markdownInput.value.trim()) {
    alert("No hay contenido para convertir a PDF");
    return;
  }

  const filename = (filenameInput?.value?.trim() || "documento") + ".pdf";

  // Mostrar loading
  if (loading) loading.style.display = "flex";

  // Crear contenido HTML para el PDF
  const content = preview.innerHTML;
  const printContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Exported with Inled Insuite MDPDF</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #2c3e50;
            line-height: 1.7;
            padding: 40px;
        }
        h1 { font-size: 2em; margin-top: 1.5em; margin-bottom: 0.5em; border-bottom: 2px solid #eee; padding-bottom: 10px; color: #2c3e50; }
        h2 { font-size: 1.7em; margin-top: 1.5em; margin-bottom: 0.5em; color: #2c3e50; }
        h3 { font-size: 1.4em; margin-top: 1.5em; margin-bottom: 0.5em; color: #2c3e50; }
        h4, h5, h6 { font-size: 1.2em; margin-top: 1.5em; margin-bottom: 0.5em; color: #2c3e50; }
        p { margin-bottom: 1em; }
        pre { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; overflow-x: auto; margin: 1em 0; }
        code { background: #f8f9fa; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 0.9em; }
        blockquote { border-left: 4px solid #3498db; margin: 1em 0; padding-left: 15px; color: #666; font-style: italic; }
        table { width: 100%; border-collapse: collapse; margin: 1em 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background: #f8f9fa; font-weight: 600; }
        ul, ol { margin: 1em 0; padding-left: 30px; }
        li { margin-bottom: 0.5em; }
        hr { border: none; border-top: 2px solid #eee; margin: 2em 0; }
        .placeholder-text { display: none; }
    </style>
</head>
<body>
${content}
</body>
</html>`;

  // Crear ventana para imprimir
  const printWindow = window.open("", "_blank");
  printWindow.document.write(printContent);
  printWindow.document.close();

  printWindow.onload = function () {
    setTimeout(function () {
      printWindow.focus();
      printWindow.print();

      // Ocultar loading después de un delay
      setTimeout(function () {
        if (loading) loading.style.display = "none";
        printWindow.close();
      }, 1000);
    }, 500);
  };
}

// Atajos de teclado
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    downloadPDF();
  }
  if (e.ctrlKey && e.key === "e") {
    e.preventDefault();
    insertExample();
  }
});
