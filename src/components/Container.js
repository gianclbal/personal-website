import React from "react"
import { ContainerWrapper, MainWrapper } from "../elements/"
import { Nav, Footer, Hero, About, Project } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <Hero />
      <MainWrapper>
        <About />
        <Project />
      </MainWrapper>

      {children}
      <Footer />
    </ContainerWrapper>
  )
}
