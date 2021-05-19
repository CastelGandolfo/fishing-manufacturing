import styled from '@emotion/styled'
import {colors} from 'styles/colors'
import {media} from "../styles/media-queries";

export const Logo = styled.div({
    background: colors.nav,
    fontWeight: 'bold',
    height: '150px',
    fontSize: '36px',
    textAlign: 'center',
    borderRadius: '10px',
    display: 'flex',
    width: '50vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 15px',
    // width: '96%',
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
    [media.small]: {
        margin: '10px 0',
        width: '100%',
    },
    [media.phone]: {
        margin: '10px 0',
        width: '100%',
        fontSize: '32px',
        height: '175px',
    },
    [media.mini]: {
        margin: '10px 0',
        width: '100%',
        fontSize: '32px',
        height: '175px',
    },

})
