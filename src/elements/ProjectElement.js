import styled from "styled-components"

export const ProjectWrapper = styled.section`
  display: flex;
  padding: 0 50px;
  flex-direction: column;
  margin: 22px;
  /* border-top: 2px solid #e8e8ed; */
  position: relative;
  /* padding-top: 50px; */
  justify-content: center;
  align-content: center;
 
  

  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
    padding: 0px;
    margin: 0px;

    .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-gap: 10px; */

    .header {
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      display: block;
    }
  }
   
  }
 
 

  

  h2 {
    padding: 0.5rem 0;
  }
  p {
    max-width: 540px;
    margin-bottom: 20px;
  }

  .projects-grid {
    display: grid;
   
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 20px;
    list-style: none;

    @media ${props => props.theme.breakpoints.tablet} {
      display: repeat(auto-fill, minmax(250px, 1fr));
    }

  }
`
