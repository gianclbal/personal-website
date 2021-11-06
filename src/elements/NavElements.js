import styled from "styled-components"

export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 11;
  width: 100%;
  
  height: 75px;
  backdrop-filter: saturate(180%) blur(20px); 
  background-color: ${props => props.theme.colors.black};
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  
  @media ${props => props.theme.breakpoints.tablet} {
    /* margin: 0 24px; */
    padding: 0 90px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    /* margin: 0 6px; */
    padding: 0 40px;
  }

  .scrolling-active{
    background-color: ${props => props.theme.colors.primary};
    
  }
`

export const StyledNav = styled.nav`
  /* padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right))); */
  /* margin: 0 auto;
  /* max-width: 980px; */
  position: relative;
  z-index: 2;
  padding: 0 50px;
  margin: 22px auto;
  max-width: 1280px;
  align-self: center;
  /* margin: 0 34px; */
  /* padding: 0 230px; */
  /* margin: 0 200px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 12;
  width: 100%;
  color: ${props => props.theme.colors.primary};
  img {
    height: 30px;
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
        font-size: 1em;
        text-decoration: none;
        font-family: "Roboto Mono";
        color: ${props => props.theme.colors.white};
        opacity: 1;

        .active {
          color: blue;
          text-decoration: underline;
        }

        

        
      }
      

      

      
    }
  }
`
