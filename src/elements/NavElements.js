import styled from "styled-components"

export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  /* margin: 0 34px; */
  z-index: 11;
  padding: 0 50px;
  width: 100%;
  height: 100px;
  backdrop-filter: blur(10px);

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 40px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 25px;
  }

  .scrolling-active{
    background-color: ${props => props.theme.colors.primary};
    
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 12;
  width: 100%;
  color: ${props => props.theme.colors.primary};
  img {
    height: 45px;
    transition: filter 0.3s ease;
  }

  & img:hover,
  img:focus {
    filter: invert(30%) sepia(9%) saturate(2620%) hue-rotate(166deg)
      brightness(93%) contrast(86%);
  }
`

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;

      a {
        padding: 10px;
      }
    }
  }
`
