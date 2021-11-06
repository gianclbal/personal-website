import React, {useState, useEffect} from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, StyledNav, StyledNavLinks } from "../elements";
import { MenuItem } from ".";

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
      id: "About",
    },
    {
      name: "Projects",
      url: "/#projects",
      id: "Projects",
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


  const activeStyles = {
    opacity: 1,
    color: 'blue',
  }


  return (
    <NavWrapper>
      <StyledNav>
        <Link to="/">
          <img src={data.logo.publicURL} alt="My Logo" />
        </Link>
        <StyledNavLinks>
        <ol>
           
           {navLinks.map(({ url, id }, i) => (
             <MenuItem itemName={id} active={false}/>
           ))}
           </ol>
         
        </StyledNavLinks>
      </StyledNav>
    </NavWrapper>
  )
}

// <ol>
           
// {navLinks.map(({ url, name }, i) => (
//   <li key={i}>
//     <Link
//       to={url}
     
//     >
//       {name}
//     </Link>
//   </li>
// ))}

// </ol>