import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-8">
          <a href="#inicio" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Inicio
          </a>
          <a href="#servicios" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Servicios
          </a>
          <a href="#como-funciona" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Cómo Funciona
          </a>
          <a href="#descargar" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Descargar
          </a>
          <Button className="mt-4">Descargar en Google Play</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

