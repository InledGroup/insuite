

function animatePreloader() {
            const tl = gsap.timeline();
            
            // Animación de 3 segundos exactos
            tl.to(".square", {
                rotation: 360,
                duration: 3,
                ease: "power2.inOut"
            })
            
            .to(".squares-container", {
                scale: 20,
                duration: 3,
                ease: "power2.in"
            }, 0) // Empezar al mismo tiempo
            
            .to(".preloader", {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            }, 2.5) // Empezar a desvanecer a los 2.5 segundos
            
            .set(".preloader", { display: "none" })
            .set("body", { overflow: "visible" })
            .to("#mainContent", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        }

        function restartAnimation() {
            // Reset
            gsap.set(".preloader", { 
                display: "flex", 
                opacity: 1 
            });
            gsap.set(".squares-container", { scale: 1 });
            gsap.set(".square", { rotation: 0 });
            gsap.set("#mainContent", { opacity: 0 });
            gsap.set("body", { overflow: "hidden" });
            
            // Restart
            setTimeout(() => {
                animatePreloader();
            }, 100);
        }

        // Ejecutar al cargar
        window.addEventListener('load', () => {
            animatePreloader();
        });

        if (document.readyState === 'complete') {
            animatePreloader();
        }