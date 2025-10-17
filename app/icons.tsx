import { FaJava, FaImage, FaVrCardboard } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { 
    SiNextdotjs, SiTypescript, SiShadcnui, SiTailwindcss, SiJavascript, SiReact, 
    SiHtml5, SiCss3, SiCanva, SiFigma, SiLinux, SiCplusplus, SiC, SiPython, 
    SiPandas, SiNumpy, SiMysql, SiGit, SiNodedotjs, SiExpress, SiMongodb, 
    SiGooglegemini, SiGooglemaps, SiLeaflet, SiOpenstreetmap, SiScratch,
    SiJsonwebtokens, SiSocketdotio, SiCloudinary, SiWebrtc, SiApachemaven
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { GiNightSleep, GiDna2, GiHand } from "react-icons/gi";
import { FaBedPulse, FaHeartPulse } from "react-icons/fa6"; 
import { MdBiotech, Md3dRotation, MdRecordVoiceOver, MdOutlineAddAlert } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { PiCornersOutThin } from "react-icons/pi";
import { SiMediapipe } from "react-icons/si";
import { Zap } from "lucide-react"; 

import SpringBootIcon from "@/icons/spring-boot.svg";
import RedisIcon from "@/icons/redis.svg";
import DockerIcon from "@/icons/docker.svg";
import JavaIcon from "@/icons/java.svg";

export const iconsMap: Record<string, IconType> = {
    "SiNextdotjs": SiNextdotjs,
    "SiTypescript": SiTypescript,
    "SiJavascript": SiJavascript,
    "SiReact": SiReact,
    "SiShadcnui": SiShadcnui,
    "SiTailwindcss": SiTailwindcss,
    "SiHtml5": SiHtml5,
    "SiCss3": SiCss3,
    "SiMongodb": SiMongodb,
    "SiExpress": SiExpress,
    "SiNodedotjs": SiNodedotjs,
    "SiGit": SiGit,
    "SiMysql": SiMysql,
    "SiNumpy": SiNumpy,
    "SiPandas": SiPandas,
    "SiPython": SiPython,
    "FaJava": FaJava,
    "SiC": SiC,
    "SiCplusplus": SiCplusplus,
    "SiLinux": SiLinux,
    "SiFigma": SiFigma,
    "SiCanva": SiCanva,
    "SiGooglegemini": SiGooglegemini,
    "TbBrandFramerMotion": TbBrandFramerMotion,
    "SiGooglemaps": SiGooglemaps,
    "FaStripe": FaStripe,
    "SiLeaflet": SiLeaflet,
    "SiOpenstreetmap": SiOpenstreetmap,
    "SiScratch": SiScratch,
    "GrGraphQl": GrGraphQl,
    "FaBedPulse": FaBedPulse,
    "GiNightSleep": GiNightSleep,
    "GiDna2": GiDna2,
    "MdBiotech": MdBiotech,
    "IoIosEye": IoIosEye,
    "PiCornersOutThin": PiCornersOutThin,
    "FaImage": FaImage,
    "GiHand": GiHand,
    "SiMediapipe": SiMediapipe,
    "Md3dRotation": Md3dRotation,
    "FaVrCardboard": FaVrCardboard,
    "MdRecordVoiceOver": MdRecordVoiceOver,
    "FaHeartPulse": FaHeartPulse,
    "MdOutlineAddAlert": MdOutlineAddAlert,
    "SiJsonwebtokens": SiJsonwebtokens,
    "SiSocketdotio": SiSocketdotio,
    "SiCloudinary": SiCloudinary,
    "SiWebrtc": SiWebrtc,
    "SiSpringboot": SpringBootIcon,
    "SiJava": JavaIcon,
    "SiRedis": RedisIcon,
    "SiDocker": DockerIcon,
    "SiApachemaven": SiApachemaven,
};

// Export a fallback icon to use when an icon name is not found in the map
export const FallbackIcon = Zap;