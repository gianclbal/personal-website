import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, StyledNav, StyledNavLinks } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gc-logo.svg" }) {
        publicURL
      }
    }
  `)

  const navLinks = [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
    {
      name: "Learn More",
      url: "/#learn",
    },
  ]

  return (
    <NavWrapper>
      <StyledNav>
        <Link to="/">
          <img src={data.logo.publicURL} alt="My Logo" />
        </Link>
        <StyledNavLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ol>
        </StyledNavLinks>
      </StyledNav>
    </NavWrapper>
  )
}
