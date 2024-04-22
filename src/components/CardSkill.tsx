import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Avatar, AvatarImage } from './ui/avatar'

interface HoverCardProps {
    src: string,
    alt: string,
    badge: string
}

const CardSkill:React.FC<HoverCardProps> = ({src, alt, badge}) => {
    return (
        <div className='bg-white border-4 border-tomato-900 h-24 w-24 rounded-full flex items-center justify-center cursor-pointer'>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Avatar className='w-20 h-20'>
                        <AvatarImage src={src} alt={alt} />
                    </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-20 h-10 flex justify-center items-center">
                    <h1 className='text-xs'>{badge}</h1>
                </HoverCardContent>
            </HoverCard>   
        </div>
    )
}

export default CardSkill