import styled from "styled-components";

export const AboutWrapper = styled.section`
    padding: 0px 30px;
    position: relative;
    min-height: 80vh;
    max-width: 900px;
    align-self: center;

    /* @media ${props => props.theme.breakpoints.tablet}{
        display: block;  
    } */

    h2 {
        padding: 0.5rem 0;
    }
    p {
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.mobile}{
            display: block;
        }


    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 30px;
        
        @media ${props => props.theme.breakpoints.tablet}{
            display: block;
        }

        

        
    }
`
