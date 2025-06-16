import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex rounded-lg m-2 w-full overflox  p-4 bg-muted">
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to Next.js!</h1>
        <p className=" mb-6">
          This is a simple starter page for your Next.js application.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          This is a basic example of a Next.js page with a button and an image.
        </p>
      </div>
    </div>
  );
}
