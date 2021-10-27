import styled from "styled-components"

export const ProjectWrapper = styled.section`
  max-width: 980px;
  margin: 22px auto;
  border-top: 2px solid #e8e8ed;
  position: relative;
  padding-top: 50px;
  align-self: center;
  

  @media ${props => props.theme.breakpoints.tablet} {
    .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 30px;

    .header {
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      display: block;
    }
  }
   
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
