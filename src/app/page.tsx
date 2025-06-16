import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex rounded-lg m-2 w-full overflox  p-4 bg-muted">
      <div>
        <h1 className="text-2xl font-bold mb-4">Food Review LSM</h1>
        <p className=" mb-6">
          Este es un blog de reseñas de restaurantes de Libertador San Martin, Entre Rios, Argentina.
        </p>
        <p className=" mb-6">
           La razon de existir de este blog es la necesidad de universitarios de la Universidad Adventista del Plata (UAP) de encontrar un lugar donde puedan comer rico, barato y sano.
        </p>
        <p className=" mb-6">
          La idea es que cada Lunes de la semana, un grupo de estudiantes visite un restaurante diferente y escriba una reseña sobre su experiencia.
        </p>
        <p className=" mb-6">
          Si quieres colaborar con el blog, puedes escribir una reseña y enviarla a nuestro correo electrónico. También puedes seguirnos en nuestras redes sociales para estar al tanto de las últimas reseñas y novedades.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Este Blog fue creado por Dylan Roth y Tomas Weigenast, puedes encontrarnos como {<a href="https://www.instagram.com/dylan_roth5" className="text-cyan-500">@dylan_roth5</a>} y {<a href="https://www.instagram.com/tomas.weigenast" className="text-cyan-500">@tomas.weigenast</a>} en Instagram.
        </p>
      </div>
    </div>
  );
}
