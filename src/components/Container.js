import React from "react"
import { ContainerWrapper, MainWrapper } from "../elements/"
import { Nav, Footer, Hero, About, Project, Jobs } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <Hero />
      <MainWrapper>
        <About />
        <Jobs />
        <Project />
      </MainWrapper>

      {children}
      <Footer />
    </ContainerWrapper>
  )
}
