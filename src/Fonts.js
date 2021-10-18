import { Global } from '@emotion/react';
// import "./assets/fonts/Minnadrop-Regular.ttf"
const Fonts = () => (
  <Global
    styles={`
      @font-face {    
        font-family:'Minnadrop'; 
        src: url('./assets/fonts/Minnadrop-Regular.ttf') format('truetype'), url('./assets/fonts/Minnadrop-Regular.ttf') format('truetype')
      }
      `}
  />
);

export default Fonts;
