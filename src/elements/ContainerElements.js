import styled from "styled-components"

export const ContainerWrapper = styled.div`
`

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 90px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 40px;
  }
`
