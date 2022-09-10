import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../imagens/coffee-beans.svg'

import { Colors } from '../variables'

const { lightBrown } = Colors

const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
}
body {
    background-color: ${lightBrown};
    background-image: url(${coffeeBean});
    background-size: 600px;
    height: 100vh;
}
`
export default GlobalStyle