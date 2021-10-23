import React from 'react';
import styled from "styled-components";
import { SectionWrapper, H2, H1, P, LI } from "../elements";


const EducationWrapper = styled(SectionWrapper)`
    min-height: 0vh;
`
export const Jobs = () => {
    return (
        <EducationWrapper id="education">
            <div className="inner">
                <div className="header">
                    <H2 weight="bold">Where I've Worked</H2>
                    </div>
                <div className="content">
                    
                    </div>
            </div>
        </EducationWrapper>
    )
}