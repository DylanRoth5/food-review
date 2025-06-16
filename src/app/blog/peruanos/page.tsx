import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex rounded-lg m-2 w-full overflox  p-4 bg-muted">
      <div>
        <h1 className="text-2xl font-bold mb-4">Review del restaurante Peruanos</h1>
        <p className="mb-6">
          En este artículo, exploraremos la experiencia culinaria en el restaurante Peruanos, un lugar que destaca por su auténtica cocina peruana y su ambiente acogedor. Desde la atención al cliente hasta la presentación de los platos, cada detalle contribuye a una experiencia gastronómica memorable.  
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          El restaurante Peruanos ofrece una variedad de platos tradicionales peruanos, como ceviche, lomo saltado y ají de gallina. Cada plato está preparado con ingredientes frescos y auténticos, lo que garantiza una explosión de sabores en cada bocado. Además, el ambiente del restaurante es cálido y acogedor, ideal para disfrutar de una comida en familia o con amigos.
        </p>
      </div>
    </div>
  );
}
