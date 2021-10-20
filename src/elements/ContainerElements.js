import styled from "styled-components"

export const ContainerWrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 25rem 30rem 55rem;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-template-rows: 7.8rem 25rem 35rem 65rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-template-rows: 7.8rem 25rem 55rem 90rem;
  }
`