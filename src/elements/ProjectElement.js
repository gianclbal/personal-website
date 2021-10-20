import styled from "styled-components"

export const ProjectWrapper = styled.section`
  grid-column: 3 / span 10;
  grid-row: 4 / 5;
  padding: 2rem 0;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
    grid-column: 2 / span 6;
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
