import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge, ExternalLink, Image } from 'lucide-react'

const CardProject = () => {
  return (
    <Card className='h-72 lg:w-80 lg:h-80 rounded-xl bg-gray-950 border-none text-white'>
        <CardHeader>
            <CardTitle className=''>Título</CardTitle>
            <CardDescription>Descrição sobre o projeto</CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center'>
            <Image className='w-20 h-20 lg:w-32 lg:h-32'/>
        </CardContent>
        <CardFooter className='flex justify-between pt-5'>
            <div className='flex gap-2'>
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
            </div>
            <div>
                <a href='https://www.copernicvs.com.br/' target='_blank'>
                <ExternalLink />
                </a>
            </div>
        </CardFooter>
    </Card>
  )
}

export default CardProject