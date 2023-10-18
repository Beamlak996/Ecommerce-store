"use client"

import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"
import GalleryTab from "./gallery-tab"
import Image from "next/image"

type GalleryProps = {
    images: ImageType[]
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => {
          return (
            <Tab.Panel key={image.id}>
              <div className="aspect-square relative h-full w-full">
                <Image
                  className="object-cover object-center"
                  fill
                  src={image.url}
                  alt="image"
                />
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Gallery