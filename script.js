
    const planets = document.querySelectorAll('.planet');
    const sun = document.querySelector('.sun');

    planets.forEach((planet, index) => {
        planet.addEventListener('click', function() {
            // Glow ring on sun (as child of sun)
            const glowCircle = document.createElement('div');
            glowCircle.classList.add('glow-circle');
            glowCircle.style.left = '50%';
            glowCircle.style.top = '50%';
            glowCircle.style.transform = 'translate(-50%, -50%)';
            glowCircle.style.opacity = '1';
            sun.appendChild(glowCircle);
            setTimeout(() => {
                glowCircle.remove();
            }, 2000);

            // Glow sun's border
            sun.classList.add('sun-glow');
            setTimeout(() => {
                sun.classList.remove('sun-glow');
            }, 2000);

            // Glow the corresponding orbit
            const orbits = document.querySelectorAll('.orbit');
            orbits[index].classList.add('orbit-glow');
            setTimeout(() => {
                orbits[index].classList.remove('orbit-glow');
            }, 2000);
        });
    });

    sun.addEventListener('click', function() {
        // Glow sun's border
        sun.classList.add('sun-glow');
        setTimeout(() => {
            sun.classList.remove('sun-glow');
        }, 2000);
    });
