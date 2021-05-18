import styled from '@emotion/styled'
import React from "react";
import {colors} from 'styles/colors'
import {media} from 'styles/media-queries'

const ProductsContainer = styled.div({
    display: "flex",
    padding: '2vw 5vw',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-10px',
    [media.small]: {
        justifyContent: 'center',
    }
})

const Product = styled.div({
    // width: '19vw',
    height: '150px',
    margin: '10px',
    flex: '0 0 30.3333%',
    background: colors.light,
    borderRadius: '10px',
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
    [media.small]: {
        flex: '0 0 45%',
    },
    [media.phone]: {
        flex: '0 0 90%',
    }
})

export const Products = () => {
    return (
        <ProductsContainer>
            <Product>Product 1</Product>
            <Product>Product 2</Product>
            <Product>Product 3</Product>
            <Product>Product 4</Product>
            <Product>Product 5</Product>
            <Product>Product 6</Product>
        </ProductsContainer>
    )
}