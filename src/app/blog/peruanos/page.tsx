import { Button } from "@/components/ui/button";
import { Divide, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex rounded-lg m-2 w-full overflox  p-4 bg-muted">
      <div className="flex flex-col w-full gap-2">
        <h1 className="text-2xl font-bold mb-4">Review del restaurante Peruanos</h1>

        <p className="flex rounded px-2">Fecha de visita: 26/05/2025</p>
        <p className="flex rounded px-2">Tipo de comida: Convencional</p>
        <p className="flex rounded px-2">Plato Principal: Combo sanguiche milanesa (pollo) + papas fritas + coca cola (vidrio)</p>
        <p className="flex rounded px-2">Total gastado: $20.000 (2 personas)</p>
        <p className="flex bg-cyan-500/50 rounded px-2">Tamaño de porcion: Generosa</p>
        <p className="flex bg-cyan-500/50 rounded px-2">Calidad de comida: {<div className="flex align-middle items-center"> <Star size={16} fill="white"/><Star size={16} fill="white"/><Star size={16} fill="white"/><Star size={16} fill="white"/><Star size={16} fill="black"/></div>}</p>
        <p className="flex rounded px-2">Precio aprox. por persona: $15.000 </p>
        <p className="flex bg-yellow-500/50 rounded px-2 ">Amabilidad personal: ni fu ni fa</p>
        <p className="flex bg-amber-500/50 rounded px-2">Limpieza e higiene: podria estar mejor</p>
        <p className="flex bg-amber-500/50 rounded px-2">Baños: vieja Shell</p>
        <p className="flex bg-red-500/50 rounded px-2">Volveria? No</p>
        <p className="flex rounded px-2">Comentario: El baño parece el de una Vieja estacion de servicio Shell </p>
        <p className="flex bg-yellow-500/50 rounded px-2">Valoracion Final: {<div className="flex align-middle items-center"> <Star size={16} fill="white"/><Star size={16} fill="white"/><Star size={16} fill="white"/><Star size={16} fill="black"/><Star size={16} fill="black"/></div>}</p>
      </div>
    </div>
  );
}
