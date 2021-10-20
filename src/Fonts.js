import { Global } from '@emotion/react';
// import "./assets/fonts/Minnadrop-Regular.ttf"
const Fonts = () => (
  <Global
    styles={`
      @font-face {    
        font-family:'Minnadrop'; 
        src: url('./assets/fonts/Minnadrop-Regular.otf') format('OpenType'), url('./assets/fonts/Minnadrop-Regular.otf') format('OpenType')
      }
      `}
  />
);

export default Fonts;
