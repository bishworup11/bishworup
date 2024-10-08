import { Particles as ReactParticles } from "react-tsparticles";

const Particles = () => {
    const particlesOptions = {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    area: 1000
                }
            },
            color: {
                value: [
                    "#c912ed",
                    "#00bfff",
                    "#22dd22",
                    "#ffd500",
                    "#ff8000",
                    "#ff2600"
                ]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000"
                },
                polygon: {
                    nb_sides: 5
                },
            },
            opacity: {
                value: 0.9,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: {
                    enable: true,
                    minimumValue: 2
                },
                anim: {
                    enable: false,
                    speed: 30,
                    size_min: 0.1,
                    sync: true
                }
            },
            links: {
                enable: true,
                distance: 100,
                color: "#999",
                opacity: 0.9,
                width: 1,
                consent: false,
                blink: false
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "push"
                },
                onclick: {
                    enable: true,
                    mode: "trail"
                },
                resize: true
            },
            modes: {
                attract: {
                    distance: 100,
                    duration: 1,
                    speed: 5
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 3
                },
                remove: {
                    particles_nb: 2
                },
                repulse: {
                    distance: 100,
                    duration: 1
                },
                trail: {
                    delay: 0.005,
                    quantity: 5,
                    particles: {
                        color: {
                            value: "#ff0000",
                            animation: {
                                enable: true,
                                speed: 400,
                                sync: true
                            }
                        },
                        links: {
                            enable: false
                        },
                        move: {
                            outModes: {
                                default: "destroy"
                            },
                            speed: 2
                        },
                        size: {
                            value: 5,
                            animation: {
                                enable: true,
                                speed: 5,
                                minimumValue: 1,
                                sync: true,
                                startValue: "min",
                                destroy: "max"
                            }
                        },
                    }
                }
            }
        },
        detectRetina: true,
        fpsLimit: 60
    };

    return (
        <div className="particle-container">
            <ReactParticles options={particlesOptions} height={"91vh"} />
        </div>
    );
};

export default Particles;
