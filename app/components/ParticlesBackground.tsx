"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import ParticlesConfig from "@/config/particles-config";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        await loadLinksPreset(engine);
    }, []);

    return (
        <div className="fixed inset-0 -z-10">
            <Particles
                init={particlesInit}
                options={ParticlesConfig}
                className="w-full h-full"
            />
        </div>
    )
};

export default ParticlesBackground;
