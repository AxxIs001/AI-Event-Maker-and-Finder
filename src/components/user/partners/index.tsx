import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SVG1 from "../../../../public/image/coursera.png";
import SVG2 from "../../../../public/image/ibm.png";
import SVG3 from "../../../../public/image/netflix.png";
import SVG4 from "../../../../public/image/stripe.png";
import SVG5 from "../../../../public/image/tumblr.png";

interface IImages {
  id: number;
  image: StaticImageData;
}

export const images: IImages[] = [
  {
    id: 1,
    image: SVG1,
  },
  {
    id: 2,
    image: SVG2,
  },
  {
    id: 3,
    image: SVG3,
  },
  {
    id: 4,
    image: SVG4,
  },
  {
    id: 5,
    image: SVG5,
  },
  {
    id: 6,
    image: SVG1,
  },
  {
    id: 7,
    image: SVG2,
  },
  {
    id: 8,
    image: SVG4,
  },
];

const Partners: React.FC = () => {
  return (
    <section>
      <div className="w-[1240px] mx-auto py-[40px]">
        <Carousel>
          <CarouselContent>
            {images.map((num) => (
              <CarouselItem
                key={num.id}
                className="md:basis-1/3 lg:basis-1/5 flex items-center justify-center"
              >
                <Image
                  src={num.image.src}
                  width={num.image.width || 200}
                  height={num.image.height || 40}
                  sizes="(max-width: 200px) 100vw,"
                  alt="partner images"
                  className=" object-contain"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
