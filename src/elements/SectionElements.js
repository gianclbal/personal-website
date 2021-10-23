import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding-left: calc(max(0px, env(safe-area-inset-left)));
  padding-right: calc(max(0px, env(safe-area-inset-right)));
  margin: 22px auto;
  max-width: 980px;
  border-top: 2px solid #e8e8ed;
  position: relative;
  padding-top: 50px;
  min-height: 80vh;
  align-self: center;

  

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 30px;

    .header {
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      display: block;
    }
  }
`
