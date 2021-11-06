import React from "react"
import { HeroWrapper, H1, H2, P, H3 } from "../elements"
import { Button } from "../components"
import { useStaticQuery, graphql } from "gatsby"
import { MenuItem } from "./MenuItem"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      arrowdown: file(relativePath: { eq: "arrow-down.svg" }) {
        publicURL
      }
    }
  `)



  const handleClick = event => {
    event.preventDefault()
    document.getElementById('About').scrollIntoView({ behavior: "smooth", block: "center" })
   
  }

  return (
    <HeroWrapper>
      <H1>Hello, I'm</H1>
      <H1 className="bottomHeader">Gian Carlo Baldonado.</H1>
      <H2 fonts="secondary">
        A software engineer with a tyrst for data and human-centered solutions.
      </H2>
      {/* <ul>
        <MenuItem itemName={"about"} active={false} />
      </ul> */}

      <img
        onClick={handleClick}
        src={data.arrowdown.publicURL}
        alt="arrow down logo"
      />
    </HeroWrapper>
  )
}
