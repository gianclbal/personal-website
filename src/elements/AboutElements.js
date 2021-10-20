import styled from "styled-components";

export const AboutWrapper = styled.section`
    grid-column: 3 / span 10;
    grid-row: 3 / 4;
    padding: 2rem 0;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet}{
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

    /* @media ${props => props.theme.breakpoints.mobile}{
            display: block;
        } */


    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 30px;
        
        @media ${props => props.theme.breakpoints.mobile}{
            display: block;
        }

        

        
    }
`
