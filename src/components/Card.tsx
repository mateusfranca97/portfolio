import { Glow } from '@codaworks/react-glow'

interface CardProps {
    children?: string;
    height?: 'small' | 'medium' | 'large';
    width?: 'small' | 'medium' | 'large';
  }

const Card: React.FC<CardProps> = ({ children, height = "medium", width = "medium" }) => {

    const getHeight = () => {
        switch (height) {
          case 'small':
            return 'h-24'; 
          case 'medium':
            return 'h-36';
          case 'large':
            return 'h-52';
          default:
            return 'h-auto';
        }
        
    };

    const getWidth = () => {
        switch (width) {
          case 'small':
            return 'w-24'; 
          case 'medium':
            return 'w-48';
          case 'large':
            return 'w-auto';
          default:
            return 'w-auto';
        }
        }

  return (
    <Glow className={`cursor-pointer w-full ${getHeight()} ${getWidth()} bg-white/5 p-3 rounded-[calc(1rem-1px)] select-none border border-white/10`}>
        <h1 className="font-bold text-white">{children}</h1>
    </Glow>
  )
}

export default Card