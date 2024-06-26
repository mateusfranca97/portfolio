import { GlowCapture } from "@codaworks/react-glow"
import Card from "./Card"
import { Forward } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {

  return (
    <GlowCapture className='lg:h-[36rem] flex flex-col lg:grid grid-cols-12 gap-2'>
      <div className="h-full col-span-8">
        <div className="h-96 text-white text-2xl flex flex-col justify-end gap-10">
          <h1 className="lg:text-5xl font-bold leading-snug select-none">Vamos <b className="text-tomato-800">COMEÇAR</b><br /> a construir algo grande <br /> juntos ?</h1>
          <a href="https://wa.me/558182082488" target="_blank">
            <motion.button 
              whileHover={{ scale: 1.10, rotate: "2.5deg"}}
              transition={{
                duration: 0.125,
                ease: "easeOut"
              }}
              
              className="
                flex
                items-center
                justify-center
                h-10 w-40 
                rounded-full 
                hover:bg-tomato-800
                hover:text-black 
                transition-all 
                duration-300 
                gap-2
                text-sm"
                >Fale comigo <Forward width={15}/>
            </motion.button>
          </a>
        </div>
      </div>
      <motion.div className="pt-10 lg:h-full lg:pt-0 col-span-4 text-white">
          <div className="grid grid-cols-2 gap-3">
            <Card >Sobre mim</Card>
            <Card width="large">Experiencias</Card>
          </div>
          <div className="grid grid-cols gap-3 mt-3">
            <Card>Meus Projetos</Card>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Card>Rede Social</Card>
            <Card height="large"></Card>
          </div>
      </motion.div>
      <div className="w-36 h-36 bg-tomato-800/30 absolute blur-3xl top-[10rem]"></div>
    </GlowCapture>
  )
}

export default Hero