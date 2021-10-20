import styled from "styled-components";

export const HeroWrapper = styled.section`
    grid-column: 3 / span 10;
    grid-row: 2 / 3;
    padding: 2rem 0;
    position: relative;
    margin-top: 50px;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;   
    }

    h1 {
        padding: 2rem 0 2.25rem 0;
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

// export const HeroTitle = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     padding: 0.5rem 0;

//     h1 {
//     flex: 0 0 100%;
//   }
// `

// export const HeroParagraph = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     padding-right: 5rem;

//     & .row {
//         flex-direction: row;
//         width: 100%;
//     }

//     & .column {
//         flex-direction: column;
//         flex-basis: 100%;
//         flex: 1;
//     }

//     h1 {
//     flex: 0 0 100%;
//   }

//   @media ${props => props.theme.breakpoints.tablet}{
//         padding: 0;  
//     }
// `