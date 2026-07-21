"use client";

import { motion } from "framer-motion";
import { SiPython, SiReact, SiNextdotjs, SiDocker, SiGithub } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { TbBrandGoogle } from "react-icons/tb";

const icons = [
  { Icon: SiPython, color: "#3776AB", delay: 0 },
  { Icon: FaJava, color: "#ED8B00", delay: 0.5 },
  { Icon: SiReact, color: "#61DAFB", delay: 1 },
  { Icon: SiNextdotjs, color: "#FFFFFF", delay: 1.5 },
  { Icon: TbBrandOpenai, color: "#412991", delay: 2 },
  { Icon: SiDocker, color: "#2496ED", delay: 2.5 },
  { Icon: SiGithub, color: "#FFFFFF", delay: 3 },
  { Icon: TbBrandGoogle, color: "#4285F4", delay: 3.5 },
];

const positions = [
  { top: "10%", left: "5%" },
  { top: "20%", right: "10%" },
  { bottom: "30%", left: "8%" },
  { bottom: "15%", right: "5%" },
  { top: "50%", left: "2%" },
  { top: "60%", right: "3%" },
  { bottom: "45%", right: "15%" },
  { top: "35%", left: "15%" },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {icons.map(({ Icon, color, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={positions[i]}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon style={{ color }} />
        </motion.div>
      ))}
    </div>
  );
}
