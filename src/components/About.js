import React, { useState } from "react"
import styled from "styled-components"
import { AboutWrapper } from "../elements"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const StyledPicture = styled.div`
  position: relative;
  max-width: 300px;

  /* @media ${props => props.theme.breakpoints.tablet} {
      width: 70%;
    } */

  /* .wrapper {
    display: block;
    position: relative;
    border-radius: ${props => props.theme.borderradius.pic};
    width: 100%;
  } */

  .portrait {
    position: relative;
    width: 300px;
    border-radius: ${props => props.theme.borderradius.pic};

    @media ${props => props.theme.breakpoints.tablet} {
      width: 70%;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      width: 100%;
    }
  }
`

const StyledText = styled.div`
  .tech-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    margin: 20px;
    list-style: square;

    li {
      position: relative;
      margin-bottom: 10px;
      /* padding-left: 20px; */
    }
  }

  .p {
    @media ${props => props.theme.breakpoints.tablet} {
      width: 40%;
    }
  }
`

export const About = () => {
  const recenttech = [
    "React/Redux",
    "Express",
    "MongoDB",
    "Java",
    "Spring",
    "Docker",
  ]

  // const data = useStaticQuery(graphql`
  //   query {
  //     portrait: file(relativePath: { eq: "gian-portrait.jpg" }) {
  //       publicURL
  //     }
  //   }
  // `)

  return (
    <AboutWrapper>
      <h2>About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
            <p>
              Here are a few tech I've been working with recently:
            </p>
          </div>
          <ul className="tech-list">
            {recenttech.map((tech, i) => 
                <li key={i}>
                  {tech}
                </li>
              )}
          </ul>
        </StyledText>
        <StyledPicture>
          <StaticImage
            className="portrait"
            src="../images/gian-portrait.jpg"
            alt="Gian's portrait"
          />
        </StyledPicture>
      </div>
    </AboutWrapper>
  )
}
