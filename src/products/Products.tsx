import styled from '@emotion/styled'
import React from "react";
import {colors} from 'styles/colors'
import {media} from 'styles/media-queries'
import Img1 from 'photo/IMG_20200623_090815_1.jpg'
import Img2 from 'photo/IMG_20200626_130218.jpg'
import Img3 from 'photo/IMG_20201209_101517.jpg'

const ProductsContainer = styled.div({
    display: "flex",
    padding: '2vw 5vw',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '-10px',
    [media.small]: {
        justifyContent: 'center',
    }
})

const Product = styled.div({
    height: '300px',
    margin: '10px',
    flex: '0 0 30.3333%',
    flexDirection: 'column',
    background: colors.light,
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
    [media.small]: {
        flex: '0 0 45%',
        height: '200px',
    },
    [media.phone]: {
        flex: '0 0 90%',
        height: '250px',
    },
    [media.mini]: {
        flex: '0 0 90%',
        height: '200px',
    },
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    position: 'relative',
    objectFit: 'cover'

})

interface img {
    path: string
}

const imgStyles: React.CSSProperties | undefined = {
    width:'100%',
    height: '80%'
}

const Description = styled.div({
    height: '20%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px'
})

export const Products = () => {
    return (
        <ProductsContainer>
            <Product><img src={Img1} style={imgStyles} /><Description>Guma nr 1</Description></Product>
            <Product><img src={Img2} style={imgStyles} /><Description>Guma nr 2</Description></Product>
            <Product><img src={Img3} style={imgStyles} /><Description>Guma nr 3</Description></Product>
        </ProductsContainer>
    )
}