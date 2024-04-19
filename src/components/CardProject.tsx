import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ExternalLink} from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

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
    <Card className='h-72 w-72 lg:w-96 lg:h-96 rounded-xl bg-gray-950/5 text-white flex flex-col justify-between'>
        <CardHeader>
            <Image className='rounded-lg' src={srcImage} alt={altImage} width={500} height={500}/>
        </CardHeader>
        <CardContent className=''>
            <CardTitle className=''>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className='flex justify-between items-center lg:pt-5'>
            <div className='flex lg:max-w-72 flex-wrap gap-2'>
                {badge.map((key, badge) =>(
                    <Badge key={key} className='text-[0.3rem] lg:text-xs'>{badge}</Badge>
                ))}
            </div>
            <Button className='w-4 h-6 lg:w-10 lg:h-10'>
                <a href={href} target='_blank'>
                <ExternalLink className='w-4 h-4'/>
                </a>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CardProject