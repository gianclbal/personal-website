import styled from "styled-components"

export const ContainerWrapper = styled.div`
`

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 34px;
  padding: 0 230px;
  justify-content: center;

  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 24px;
    padding: 0 90px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 6px;
    padding: 0 40px;
  }
`
