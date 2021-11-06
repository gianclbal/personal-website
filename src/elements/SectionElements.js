import styled from "styled-components"

export const SectionWrapper = styled.section`
  /* padding-left: calc(max(0px, env(safe-area-inset-left)));
  padding-right: calc(max(0px, env(safe-area-inset-right))); */
  display: flex; 
  padding: 0 50px;
  margin: 22px auto;
  max-width: 1280px;
  border-top: 2px solid #e8e8ed;
  position: relative;
  min-height: 80vh;
  flex-direction: column;
  justify-content: center;
  

  @media ${props => props.theme.breakpoints.tablet} {
   
    padding: 0px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    padding: 0px;
  }

  .inner {
    display: grid;
   
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;

    .header {
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      display: block;
    }
  }
`
