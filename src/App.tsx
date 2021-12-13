import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container/Container";
import { Navbar } from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";
import { useMyContext } from "./context/Context";

export const dark = {
  "main-bg": "hsl(235, 21%, 11%)",
  "box-bg": "hsl(234, 24%, 19%)",
  text: "hsl(234, 39%, 85%)",
  logo: "hsl(236, 33%, 92%)",
  foot: "hsl(234, 11%, 52%)",
  circle: "hsl(233, 14%, 35%)",
  drag2: "hsl(237, 14%, 26%)",
  "bright-blue": "hsl(220, 98%, 61%)",
  fr: "hsl(192, 100%, 67%)",
  to: "hsl(280, 87%, 65%)",
};

export const light = {
  "box-bg": "hsl(0, 0%, 98%)",
  "main-bg": "hsl(236, 33%, 92%)",
  logo: "hsl(233, 11%, 84%)",
  circle: "hsl(236, 9%, 61%)",
  foot: "hsl(236, 9%, 61%)",
  text: "hsl(235, 19%, 35%)",
  "bright-blue": "hsl(220, 98%, 61%)",
  fr: "hsl(192, 100%, 67%)",
  to: "hsl(280, 87%, 65%)",
};

function App() {
  const { state } = useMyContext();
  const switchTheme = state.theme === "dark" ? dark : light;
  return (
    <ThemeProvider theme={switchTheme}>
      <AppStyles data-testid="background">
        <Banner />
        <Container>
          <Navbar />
          <Todo />
        </Container>
      </AppStyles>
    </ThemeProvider>
  );
}

const AppStyles = styled.div`
  background-color: ${(props) => props.theme["main-bg"]};
  min-height: 100vh;
  transition: all 0.5s;
`;

export default App;
