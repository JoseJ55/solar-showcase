const particleBackground = {
    autoPlay: true,
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    fpsLimit: 24,
    // detectRetina: true,
    particles: {
        links: {
            enable: true,
            distance: 100,
            // color: ["#666", "#888", "#999"],
            color: ["#4f36b7"],
            triangles: {
                enable: true,
                frequency: .2
            },
            frequency: .9,
            blink: true,
            consent: true,
            wrap: true,
            width: .1
        },
        color: {
            value: ["#4f36b7"],
        },
        move: {
            enable: true,
            outModes: {
                default: "bounce"
            },
            speed: .6
        },
        number: {
            density: {
                enable: true,
                area: 1000,
                factor: 1000,
            },
            limit: 200,
            value: 150,
        },
        shape: {
            options: {},
            type: "none",
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100
}

export default pBackground;