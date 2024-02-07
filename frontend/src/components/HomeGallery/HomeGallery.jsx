

import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import Carousel from '../Carousel/Carousel'
//import { Card, CardContent } from "@/components/ui/card"


const GalleryStyle = styled.div`
    max-width:min(100%, 700px);
    max-height: 700px;
    display: grid;
    
    margin-inline:auto;
    gap:1rem;
    
`


const useHomeImages = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const loadImages = async () => {
            const images = []
            for (let i = 1; i <= 6; i++) {
                if (i == 3) continue;
                /* @vite-ignore */
                images.push(await import(`../../assets/image${i}.jpg`))
            }
            setImages(images)
        }
        loadImages()
    }, [])
    return images
}



const HomeGallery = () => {

    const images = useHomeImages()



    return (
        <GalleryStyle>
            <p className='text-[24px]'>מפגשים</p>
            <Carousel views={images.map(image => image.default)} />
        </GalleryStyle>
    )
}

export default HomeGallery