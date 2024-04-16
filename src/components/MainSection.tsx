
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import CardProject from './CardProject'

const MainSection = () => {
  return (
    <main className='grid gap-10 lg:gap-40'>
      <div className='flex flex-col rounded-2xl p-10 bg-tomato-800 select-none gap-5 mt-10'>
        <div className='row-span-1 flex items-center justify-between'>
          <span className='font-black lg:text-3xl'>01.</span>
          <h1 className='lg:text-3xl font-semibold text-center'>Sobre mim</h1>
        </div>
        <div className='flex flex-col justify-center h-80'>
          <div className='lg:flex items-center justify-around'>
            <div className='flex justify-center'>
              <Avatar className='w-28 h-28 lg:h-72 lg:w-72 border-8 border-gray-950'>
                <AvatarImage src="https://github.com/mateusfranca97.png" />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
            </div>
            <div className='lg:w-[30rem]'>
              <p className='font-medium text-sm lg:text-2xl text-justify pt-5'>Eu sou um desenvolvedor Full Stack comprometido e apaixonado pelo que faço. No momento, estou trabalhando em projetos como freelancer, sempre buscando aprimorar-me tanto no âmbito pessoal quanto no profissional.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col rounded-2xl p-10 bg-tomato-800 select-none gap-5'>
        <div className='row-span-1 flex items-center justify-between'>
          <span className='font-black lg:text-3xl'>02.</span>
          <h1 className='lg:text-3xl font-semibold text-center'>Meus projetos</h1>
        </div>
        <div className='grid lg:grid-cols-3 gap-y-14'>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </div>
      </div>
    </main>
  )
}

export default MainSection