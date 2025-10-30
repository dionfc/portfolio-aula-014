AOS.init({duration: 1000, once: false});

particlesJS("particles-js", {
    particles: {
        number: {value: 80},
        color: {value: ["#ff7676", "#f54ea2", "#6a11cb", "#2575fc"]},
        shape: {type:"circle"},
        opacity: {value: 0.7},
        size: {value: 3},
        move: {
            enable: true,
            speed: 2,
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