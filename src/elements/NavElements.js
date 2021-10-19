import styled from 'styled-components';

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
    padding: 0px 50px;
    width: 100%;
    height: 100px;
    /* background-color: ${props => props.theme.colors.primary}; */
    /* backdrop-filter: blur(10px); */

    @media ${props => props.theme.breakpoints.tablet} {
        padding: 0px 40px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 0px 25px;
    }

    /* .svg {
        height: 100%;
    } */
`

// export const NavWrapper = styled.nav`
//     position: relative;
//     width: 100%;
//     color: ${props => props.theme.colors.white};
//     font-family: ${props => props.theme.fonts.main};
//     z-index: 1;
// `