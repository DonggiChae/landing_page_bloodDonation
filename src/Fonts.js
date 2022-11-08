import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`
  @font-face {
    font-family: 'Nanum Gothic', sans-serif;
    src: url('https://fonts.googleapis.com/earlyaccess/nanumgothic.css) ;
    font-weight: normal;
    font-style: normal;
  }
`}
  />;
};

export default Fonts;
