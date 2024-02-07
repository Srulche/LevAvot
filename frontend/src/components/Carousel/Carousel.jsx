import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { CarouselStyle } from "./styles"

const Carousel = ({ views }) => {
    const [childIndex, setChildIndex] = useState(0)

    useEffect(() => {
        const CHANGE_DELAY = 8000
        const changeInterval = setInterval(() => {
            setChildIndex(index => (index + 1) % views.length)
        }, CHANGE_DELAY)

        return () => {
            clearInterval(changeInterval)
        }
    }, [views])

    return <CarouselStyle>
        {React.Children.toArray(views.map((childSrc, index) =>
            <img src={childSrc} className={
                index === childIndex ? "showing gallery-image" : "not-showing gallery-image"
            } />))}
    </CarouselStyle>
}


export default Carousel