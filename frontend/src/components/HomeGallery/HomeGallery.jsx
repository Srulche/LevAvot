

import styled from '@emotion/styled'
import React, { useEffect, useMemo, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const GalleryStyle = styled.div`
    max-width:700px;
    max-height: 700px;
    display: grid;
    margin-inline:auto;
    gap:1rem;
    img {
        position: relative;
        max-width: 100%;
        height:100%;
        object-fit:cover;
        border-radius: 4px;
    }

`


const useHomeImages = () => {
    const [images,setImages] = useState([])
    useEffect(() => {
        const loadImages = async () => {
            const images = []
            for(let i = 1; i <= 6; i++) {
                if(i==3) continue;
                /* @vite-ignore */
                images.push(await import(`../../assets/image${i}.jpg`))
            }
            setImages(images)
        }
        loadImages()
    },[])
    return images
}


const HomeGallery = () => {

  const images = useHomeImages()
    


  return (
    <GalleryStyle>
        <img src={images[0]?.default}/>
        <Carousel  
        className=" w-[300px]"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
            <CarouselContent className="mx-auto bg-[red]">
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem >...</CarouselItem>
            </CarouselContent>
    </Carousel>

        
    </GalleryStyle>
  )
}

export default HomeGallery