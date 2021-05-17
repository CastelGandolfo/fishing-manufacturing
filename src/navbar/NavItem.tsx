import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import {colors} from 'styles/colors'
import {media} from "../styles/media-queries";

export const NavContainer = styled.div({
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [media.small]: {
        flexDirection: 'row',
    }
})

const colorHover = keyframes({
    '100%': {
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        background: colors.silver,
    }
})

interface navProps {
    active: boolean
}


export const NavItem = styled.div((props:navProps) => ({
    background: props.active ? colors.silver : colors.nav,
    width: '25vw',
    height: '40px',
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
    "&:hover": {
        animation: `${colorHover} 0.3s normal forwards`
    },
    "&:active": {
        height: '42px',
        width: '26vw',
        fontSize: '26px'
    }
}))
