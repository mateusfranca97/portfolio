import { Download } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="md:h-16 flex justify-between items-center text-white">
            <h1 className="font-medium w-80 pointer-events-none select-none">Mateus <span className="text-gray-400">, FullStack</span></h1>
            <div className="hidden lg:flex">
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full gap-2 select-none">Baixar Curriculo <Download width={15}/></Button>
                </div>
            </div>
        </header>
    )
}

export default Header