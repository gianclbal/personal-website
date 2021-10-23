import React from "react"
import { Scrollspy } from "@makotot/ghostui"
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
      id: "about",
    },
    {
      name: "Work",
      url: "/#projects",
      id: "projects",
    },
    {
      name: "Experience",
      url: "/#jobs",
      id: "jobs",

    },
    {
      name: "Contact",
      url: "/#contact",
      id: "contact",
    },
    {
      name: "Learn More",
      url: "/#learn",
      id: "learn",
    },
  ]

  // window.onscroll = () => {
  //   let currentSection = "";

  //   navLinks.map
  // }

  const activeStyles = {
    opacity: 1,
    color: 'blue',
  }

  // const isActive = ({ isCurrent }) => {
  //   return isCurrent ? { className: "active" } : {}
  // }





  return (
    <NavWrapper>
      <StyledNav>
        <Link to="/">
          <img src={data.logo.publicURL} alt="My Logo" />
        </Link>
        <StyledNavLinks>
          <ol>
            {/* <Scrollspy items={navLinks.map(link => link.id)} currentClassName="active"> */}
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link
                  to={url}
                  // getProps={isActive}
                  // activeClassName="active"
                  
                  // activeStyles={activeStyles}
                >
                  {name}
                </Link>
              </li>
            ))}
            {/* </Scrollspy> */}
          </ol>
        </StyledNavLinks>
      </StyledNav>
    </NavWrapper>
  )
}
