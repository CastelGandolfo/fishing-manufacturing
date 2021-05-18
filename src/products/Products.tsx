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
    [media.small]: {
        flex: '0 0 45%',
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