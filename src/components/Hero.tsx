import { GlowCapture } from "@codaworks/react-glow"
import { Button } from "./ui/button"
import Card from "./Card"
import CardEffect from "./CardEffect"

const Hero = () => {
  return (

    <main className='h-[33rem] flex flex-col lg:grid grid-cols-12 gap-2'>
      <div className="h-full col-span-8">
        <div className="h-96 text-white text-2xl flex flex-col justify-end gap-10">
          <h1 className="lg:text-5xl font-bold leading-snug">Vamos COMEÇAR <br />a construir algo grande <br /> juntos ?</h1>
          <Button className="w-40 rounded-full">Fale comigo</Button>
        </div>
      </div>
      <div className="pt-10 lg:h-full lg:pt-0 col-span-4 rounded-2xl text-white">
        <GlowCapture>
          <div className="grid grid-cols-2 gap-3">
            <Card >Sobre mim</Card>
            <Card>Meus Projetos</Card>
          </div>
        </GlowCapture>
        <GlowCapture>
          <div className="grid grid-cols gap-3 mt-3">
            <Card width="large">Experiencias</Card>
          </div>
        </GlowCapture>
        <GlowCapture>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Card>Midia </Card>
            <Card height="large"></Card>
          </div>
        </GlowCapture>
      </div>
    </main>
  )
}

export default Hero