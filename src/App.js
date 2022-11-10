import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import theme from "./theme";
import Fonts from "./Fonts";
import { useState } from "react";
import useObserver from "./hooks/useObserver";

function App() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));
  const heroTwoRef = useObserver(handleVisible(1));
  const featuresRef = useObserver(handleVisible(2));
  const statisticsRef = useObserver(handleVisible(3));

  const handleClickNavLink = (index) => {
    const refs = [heroRef, heroTwoRef, featuresRef, statisticsRef];
    console.log(index);
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar
        currentVisibleIndex={currentVisibleIndex}
        onClickNavLink={handleClickNavLink}
      />
      <Hero ref={heroRef} />
      <HeroTwo ref={heroTwoRef} />
      <Features ref={featuresRef} />
      <Statistics ref={statisticsRef} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
