import styled from "styled-components"

export const HeroWrapper = styled.section`
  display: flex;
  padding: 0 50px;
  margin: 200px auto;
  max-width: 1280px;
  position: relative;
  flex-direction: column;
  justify-content: center;


  .bottomHeader {
    margin: 0 0 25px;

  }
  h1 {
    font-size: 3.5rem;
    line-height: 5rem;
  }

  h2 {
    font-size: 30px;
    /* max-width: 800px; */
    margin-bottom: 50px;
  }

  img {
    height: 44px;

    padding: 0 1rem;
    transition-delay: filter 5s;
    transition: transform 0.3s;
    transition-delay: filter 5s;
    align-self: flex-start;

  }

  img:hover,
  img:focus {
   
    transform: translateY(3px);
  }



  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
    padding: 0px;
    h1 {
    font-size: 3rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 1.25rem;
    /* max-width: 800px; */
    margin-bottom: 2rem;
  }
  }
  
`

  /* align-self: flex-start; */

  /* padding: 0 230px; */

  /* @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 24px;
    /* padding: 0 90px;
  }  */

  
