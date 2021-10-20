import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  img {
    height: 22px;
    padding: 0 1rem;
    transition: transform 0.3s;
    transition-delay: filter 5s;
  }

  img:hover,
  img:focus {
   
    filter: invert(92%) sepia(52%) saturate(6139%) hue-rotate(149deg) brightness(79%) contrast(85%);
    transform: translateY(-3px);
  }

  

`
