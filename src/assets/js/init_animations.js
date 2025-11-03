AOS.init({duration: 1000, once: false});

particlesJS("particles-js", {
    particles: {
        number: {value: 200},
        color: {value: "#000000"},
        shape: {type:"circle"},
        opacity: {value: 0.3},
        size: {value: 2},
        move: {
            enable: true,
            speed: 10,
            direction: "none"
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});