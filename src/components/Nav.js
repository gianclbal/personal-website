import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, StyledNav } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gc-logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <StyledNav>
        <Link to="/">
          <img src={data.logo.publicURL} alt="My Logo" />
        </Link>
      </StyledNav>
    </NavWrapper>
  )
}
