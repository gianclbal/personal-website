import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-family: ${props => {
    switch (props.fonts) {
      case "main":
        return "Inter, sans-serif"
      case "secondary":
        return "Roboto Mono, monospace"
      default: 
        return "Inter, sans-serif"
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.25rem"
    }
  }};
  line-height: ${props => {
    switch (props.height) {
      case "comfy":
        return "1.75rem"
      case "regular":
        return "1.50rem"
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.75rem"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "normal":
        return 400
      case "semi-bold":
        return 600
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary
      case "accent":
        return props.theme.colors.accent
      case "white":
        return props.theme.colors.white
      case "black":
        return props.theme.colors.black
      default:
        return props.theme.colors.white
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`

export const H1 = styled.h1`
font-family: ${props => {
    switch (props.fonts) {
      case "main":
        return "Inter, sans-serif"
      case "secondary":
        return "Roboto Mono, monospace"
      default: 
        return "Inter, sans-serif"
    }
  }};
  font-size: 2.25rem;
  line-height: 3rem;
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary
      case "accent":
        return props.theme.colors.accent
      case "white":
        return props.theme.colors.white
      case "black":
        return props.theme.colors.black
      default: 
        return props.theme.colors.white
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "normal":
        return 400
      case "semi-bold":
        return 600
      case "bold":
        return 700
      default:
        return 700
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const H2 = styled.h2`
font-family: ${props => {
    switch (props.fonts) {
      case "main":
        return "Inter, sans-serif"
      case "secondary":
        return "Roboto Mono, monospace"
      default: 
        return "Inter, sans-serif"
    }
  }};
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary
      case "accent":
        return props.theme.colors.accent
      case "white":
        return props.theme.colors.white
      case "black":
        return props.theme.colors.black
      default:
        return props.theme.colors.white
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "normal":
        return 400
      case "semi-bold":
        return 600
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H3 = styled.h3`
  font-family: ${props => {
    switch (props.fonts) {
      case "main":
        return "Inter, sans-serif"
      case "secondary":
        return "Roboto Mono, monospace"
      default: 
        return "Inter, sans-serif"
    }
  }};
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary
      case "accent":
        return props.theme.colors.accent
      case "white":
        return props.theme.colors.white
      case "black":
        return props.theme.colors.black
      default:
        return props.theme.colors.white
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "normal":
        return 400
      case "semi-bold":
        return 600
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`

export const LI = styled.li`
  text-transform: ${props => {
    switch (props.textTransform){
      case "lowercase":
        return "lowercase"
      default:
        return "none"
    }
  }};
  margin: ${props => (props.margin ? props.margin : 0)};
  font-family: ${props => {
    switch (props.fonts) {
      case "main":
        return "Inter, sans-serif"
      case "secondary":
        return "Roboto Mono, monospace"
      default: 
        return "Inter, sans-serif"
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.25rem"
    }
  }};
  line-height: ${props => {
    switch (props.height) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.25rem"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "primary":
        return props.theme.colors.primary
      case "accent":
        return props.theme.colors.accent
      case "white":
        return props.theme.colors.white
      case "black":
        return props.theme.colors.black
      default:
        return props.theme.colors.white
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
