import React from 'react';
import { ContainerWrapper } from '../elements/';
import { Nav, Footer, Hero, About } from '../components';

export const Container = ({children}) => {
   return <ContainerWrapper>
       <Nav />
        <Hero />
        <About />
        {children}
        <Footer/>
    </ContainerWrapper>
}

