import styled from '@emotion/styled'
import { colors } from 'styles/colors'
import {media} from 'styles/media-queries'

export const Navbar = styled.div({
  height: '150px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '25px',
  [media.small]: {
    flexDirection: 'column',
    height: '150px',
  }
})
