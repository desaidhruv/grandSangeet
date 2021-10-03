import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Minnadrop-Regular';

        src: url('./assets/fonts/Minnadrop-Regular.otf') format('otf'), 
 
     }
      @font-face {
        font-family: 'Body Minnadrop-Regular';

        src: url('./assets/fonts/Minnadrop-Regular.otf') format('otf'), 
     
    }

      `}
  />
);

export default Fonts;
