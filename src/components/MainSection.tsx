
import React from 'react'

const MainSection = () => {
  return (
    <main className='h-[38rem] grid grid-rows-3'>
      <div className='flex flex-col rounded-2xl row-span-2 lg:grid grid-cols-2 p-10 bg-tomato-900 select-none gap-5'>
        <div className='lg:grid grid-rows-6'>
          <div className='h-full flex items-center'>
            <h1 className='font-black text-3xl'>01.</h1>
          </div>
          <div className='row-span-5'>

          </div>

        </div>
        <div className='lg:grid grid-rows-3'>
          <div className='row-span-1 flex items-center'>
            <h1 className='text-3xl font-semibold'>Sobre mim</h1>
          </div>
          <div>
            <p className='font-medium text-sm lg:text-xl text-justify'>Eu sou um desenvolvedor Full Stack comprometido e apaixonado pelo que faço. No momento, estou trabalhando em projetos como freelancer, sempre buscando aprimorar-me tanto no âmbito pessoal quanto no profissional.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection