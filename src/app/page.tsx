import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-3xl font-bold underline">Food Review</h1>
      <p className="text-lg mt-4">
        Welcome to the Food Review app! Here you can find reviews of your favorite dishes.
      </p>
      <p className="mt-4 text-gray-600">
        Explore our collection of food reviews and share your own experiences!
      </p>
      <a href="/dashboard">
        <Button>blog</Button>
      </a>
    </div>
  );
}
