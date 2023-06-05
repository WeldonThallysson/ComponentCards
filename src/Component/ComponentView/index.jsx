import React from "react";
import './style.css'
import { motion } from "framer-motion";

const ComponentViewButton = () => {
    return(
        <motion.div animate={{opacity: 0.9}} transition={{ease:"linear", duration: 2 }}  className="Conteiner">
            <a href="#"className="Btn">Ver Detalhes</a>
        </motion.div>

    )
}

export default ComponentViewButton 