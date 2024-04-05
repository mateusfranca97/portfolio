import { Button } from "./ui/button"
import DialogMobile from "./DialogMobile"

const Header = () => {
    return (
        <header className="md:h-16 flex justify-between items-center text-white">
            <h1 className="font-medium w-80 pointer-events-none select-none">Mateus <span className="text-gray-400">, FullStack</span></h1>
            <div className="hidden lg:flex">
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full">Baixar Curriculo</Button>
                </div>
            </div>
        </header>
    )
}

export default Header