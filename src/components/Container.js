import React from 'react';
import { ContainerWrapper } from '../elements/';
import { Nav, Footer, Hero, About, Project } from '../components';

export const Container = ({children}) => {
   return <ContainerWrapper>
       <Nav />
        <Hero />
        <About />
        <Project />
        {children}
        <Footer/>
    </ContainerWrapper>
}

