import {createGlobalStyle} from 'styled-components'
import coffeBean from '../imagens/coffee-beans.svg'
import { device } from '../../config/device'


import { Colors, sizes } from '../variables'

const { brown } = Colors
const { size100Percent } = sizes

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  html {
    scroll-behavior: smooth;
    font-size: 10px !important;
    height: ${size100Percent};
    @media ${device.xxs} {
      font-size: 8.5px !important;
    }
  }
  body {
    background-color: ${brown};
    background-image: url(${coffeBean});
    background-size: 600px;
    height: 100vh;
  }
`

export default GlobalStyle
