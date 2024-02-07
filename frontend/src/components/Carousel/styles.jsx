import styled from "@emotion/styled"

const CarouselStyle = styled.div`
    position:relative;
    padding-inline:48px;
    box-sizing: border-box;
    width:100%;
    min-height:300px;
    overflow:hidden;
    display:grid;
    place-items:center;
    @keyframes slideInAnimation {
        from {
            transform: translateX(-500px);
            opacity: 0;
        }

        to {
            transform: translateX(0px);
            opacity: 1;
        }
    }
    @keyframes slideOutAnimation {
        from {
            transform: translateX(0px);
            opacity:1;
        }

        to {
            opacity:0;
            transform: translateX(500px);
        }
    }

    .gallery-image {
        position:relative;
        max-width: 100%;
        width:100%;
        max-height:100%;
        height:100%;
        object-fit:cover;
        border-radius:24px !important;

        &:before {
            content:"";
            position:absolute;
            width:100%;
            left:0;
            right:0;
            top:0;
            bottom:0;
            height:100%;
            display: block;
            background: black;
        }
    }



    .showing {
        position:absolute;
        left:0;
        right:0;
        animation: slideInAnimation .6s ease-in forwards;
    }
    .not-showing {
        position:absolute;
        left:0;
        right:0;
        animation: slideOutAnimation .3s ease-in forwards;
    }
`
export { CarouselStyle }