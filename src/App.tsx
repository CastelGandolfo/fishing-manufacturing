import styled from '@emotion/styled'

import React, {useState} from 'react'
import {colors} from './styles/colors'
import {media} from './styles/media-queries'

import {Logo} from './navbar/Logo'
import {NavContainer, NavItem} from 'navbar/NavItem'
import {Navbar} from 'navbar/Navbar'
import {Footer} from "./footer/Footer";
import {Home} from "./home/Home";
import {About} from "./about/About";
import {Products} from 'products/Products'

function App() {

    const [active, setActive] = useState('home')

    return (
        <>
            <Navbar>
                <Logo>Fishing Manufacturing Gear</Logo>
                <NavContainer>
                    <NavItem active={active === 'home'} onClick={() => setActive('home')}>Home</NavItem>
                    <NavItem active={active === 'products'} onClick={() => setActive('products')}>Products</NavItem>
                    <NavItem active={active === 'about'} onClick={() => setActive('about')}>About</NavItem>
                </NavContainer>
            </Navbar>

            {active === 'home' ? <Home /> : null}
            {active === 'about' ? <About /> : null}
            {active === 'products' ? <Products /> : null}
            <Footer>&#169; 2021 Fishing Manufacturing Gear sp. z.o.o</Footer>
        </>
    )
}

export default App
