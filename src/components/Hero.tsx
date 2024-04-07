import { GlowCapture } from "@codaworks/react-glow"
import { Button } from "./ui/button"
import Card from "./Card"
import { Forward } from "lucide-react"

const Hero = () => {
  return (

    <GlowCapture className='h-[33rem] flex flex-col lg:grid grid-cols-12 gap-2'>
      <div className="h-full col-span-8">
        <div className="h-96 text-white text-2xl flex flex-col justify-end gap-10">
          <h1 className="lg:text-5xl font-bold leading-snug select-none">Vamos <b className="text-tomato-900">COMEÇAR</b><br /> a construir algo grande <br /> juntos ?</h1>
          <Button className="w-40 rounded-full hover:bg-tomato-900 hover:text-black transition-all duration-300 gap-2">Fale comigo <Forward width={15}/></Button>
        </div>
      </div>
      <div className="pt-10 lg:h-full lg:pt-0 col-span-4 text-white">
          <div className="grid grid-cols-2 gap-3">
            <Card >Sobre mim</Card>
            <Card>Meus Projetos</Card>
          </div>
          <div className="grid grid-cols gap-3 mt-3">
            <Card width="large">Experiencias</Card>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Card>Midia </Card>
            <Card height="large"></Card>
          </div>
      </div>
      <div className="w-36 h-36 bg-tomato-900/30 absolute blur-3xl top-[10rem]"></div>
    </GlowCapture>
  )
}

export default Hero