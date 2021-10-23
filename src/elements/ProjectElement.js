import styled from "styled-components"

export const ProjectWrapper = styled.section`
   padding-left: calc(max(0px, env(safe-area-inset-left)));
  padding-right: calc(max(0px, env(safe-area-inset-right)));
  margin: 22px auto;
  max-width: 980px;
  border-top: 2px solid #e8e8ed;
  position: relative;
  /* min-width: 980px; */
  align-self: center;
  

  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
   
  }

  /* @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    min-width: 300px;
  } */

  

  h2 {
    padding: 0.5rem 0;
  }
  p {
    max-width: 540px;
    margin-bottom: 20px;
  }

  .projects-grid {
    display: grid;
   
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 20px;
    list-style: none;

    @media ${props => props.theme.breakpoints.tablet} {
      display: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`
