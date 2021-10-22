import styled from "styled-components"

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;

  margin: 0 34px;
  padding: 0 230px;

  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 24px;
    padding: 0 90px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 6px;
    padding: 0 40px;
  }

  h1 {
    margin: 0 0 25px;
    padding: 3rem 0 1rem 0;
    font-size: 75px;
  }

  h2 {
    font-size: 30px;
  }
  p {
    max-width: 560px;
    margin-bottom: 50px;
  }
`

