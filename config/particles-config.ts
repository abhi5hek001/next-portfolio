import { ISourceOptions } from "tsparticles-engine";\
import { isMobile } from "react-device-detect";

const particlesConfig: ISourceOptions = {
    fullScreen: { enable: false },
    preset: "links",
    background: {
        color: { value: "" }, 
    },
    particles: {
        number: { value: isMobile ? 20 : 80 },
        shape: { type: "dots" },
        color: { value: "#000" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 5 } },
        move: {
            enable: true,
            speed: 1.5,
            direction: "topRight",
            random: false,
            straight: false,
        },
        links: {
            enable: true,
            distance: 150,
            color: "#000",
            opacity: 0.4,
            width: 1.75,
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: ["grab", "attract"], 
                },
                onClick: {
                    enable: true,
                    mode: "push", 
                },
            },
            modes: {
                grab: {
                    distance: 200,
                    links: { opacity: 1 }, 
                },
                attract: {
                    distance: 200,
                    duration: 0.4,
                    factor: 5, 
                },
            },
        },
    },
};

export default particlesConfig;
