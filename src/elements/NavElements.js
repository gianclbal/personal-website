import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  img {
    height: 45px;
    transition: filter 0.3s ease;
    
  }

  & img:hover, 
        img:focus {
        filter: brightness(110%);
    }


  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    
  }
`

// import styled from 'styled-components';

// export const NavWrapper = styled.nav`
//     grid-column: 2 / span 12;   //how much space col should take up, starts at 2 spans 12 col.
//     grid-row: 1 / 2; //starts at 1 spans to 2.
//     display: flex;
//     align-items: center;


//     @media ${props => props.theme.breakpoints.tablet} {
//         grid-column: 2 / span 6;
//     }

//     /* .svg {
//         width: 45px;
//         height: 45px;
//     } */



// `


// /* display: flex;
//     align-items: center;
//     color: ${props => props.theme.colors.white};
//     font-family: ${props => props.theme.fonts.main};
//     padding: 0px 50px;
//     width: 100%;
//     height: 100px;
//     /* background-color: ${props => props.theme.colors.primary}; */
//     /* backdrop-filter: blur(10px); */
// // export const NavWrapper = styled.nav`
// //     position: relative;
// //     width: 100%;
// //     color: ${props => props.theme.colors.white};
// //     font-family: ${props => props.theme.fonts.main};
// //     z-index: 1;
// // ` */