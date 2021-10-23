import styled from "styled-components"

export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 11;
  width: 100%;
  height: 66px;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255,255,255,0.72);
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);

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
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));
  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  position: relative;
  z-index: 2;

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
        color: ${props => props.theme.colors.black};
        opacity: 1;

        .active {
          color: blue;
          text-decoration: underline;
        }

        

        
      }
      

      

      
    }
  }
`
