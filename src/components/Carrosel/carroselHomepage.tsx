import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { mocked } from "../mocked";
import Image from "next/image";

export default function CarroselHomepage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 gap-6 py-8">
      <span className="font-semibold font-serif text-xl items-center">
        Veja Nosso Carroseu de Fotos:
      </span>
      <Carousel opts={{ align: "center" }} className="w-full overflow-hidden">
        <CarouselContent>
          {mocked.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={item.foto}
                      alt={item.title}
                      width={600}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
