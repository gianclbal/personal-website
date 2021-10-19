import React from 'react';
import { useStaticQuery, Link, graphql} from 'gatsby';
import { NavWrapper } from '../elements';
import IconLogo from './icons/logo';

// export const NavHeader = ({children}) => {
//     return <HeaderNavWrapper>{children}</HeaderNavWrapper>
// }

export const Nav = () => {

    const Logo = (
        <div className="logo">
            <Link to="/" aria-label="home">
                <IconLogo/>
            </Link>
        </div>
    )

    // const data = useStaticQuery(graphql`
    //     query{
    //         logo: file(relativePath: {eq: "logo.svg"}){
    //             publicURL
    //         }
    //     }
    // `)


    return (<NavWrapper>
                {Logo}
            </NavWrapper>
    )
}

