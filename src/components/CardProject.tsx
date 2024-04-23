"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ExternalLink} from 'lucide-react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button } from './ui/button'

export interface CardProjectProps {
    title: string,
    description: string,
    srcImage: string,
    altImage: string,
    badge: string[],
    href: string,
}

const CardProject:React.FC<CardProjectProps> = ({title, description, srcImage, altImage, badge, href}) => {
  return (
    <Card className='w-60 lg:w-80 lg:h-[27rem] rounded-xl bg-gradient-to-tl from-gray-800 to-gray-950 border-transparent text-white flex flex-col justify-between group hover:cursor-pointer'>
        <CardHeader>
            <AspectRatio ratio={16/9}>
                <Image className='rounded-lg group-hover:scale-[1.1] transition duration-50' src={srcImage} alt={altImage} width={500} height={500}/>
            </AspectRatio>
        </CardHeader>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className='flex flex-col gap-7'>
            <div>
                <a href={href} target='_blank'>
                    <Button className='gap-3 lg:w-60 border border-white/30 hover:bg-gray-800/50'>
                        <p> Acessar projeto</p>
                        <ExternalLink className='w-4 h-4'/>
                    </Button>
                </a>
            </div>
            <div className='flex flex-wrap gap-2'>
                {badge.map((badge, key) =>(
                    <Badge key={key} className='text-[0.3rem] lg:text-xs'>{badge}</Badge>
                ))}
            </div>
        </CardFooter>
    </Card>
  )
}

export default CardProject