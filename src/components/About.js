import React from "react"
import styled from "styled-components"
import { AboutWrapper, H2, H1, P, LI } from "../elements"
import { StaticImage } from "gatsby-plugin-image"

const StyledPicture = styled.div`
  grid-column: 2 / span -1;
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
      <H2 weight="bold">About Me</H2>
      <div className="inner">
        <StyledText>
          <div>
            <P size="small">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </P>

            <P size="small">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </P>
            <P size="small">
              Here are a few tech I've been working with recently:
            </P>
          </div>
          <ul className="tech-list">
            {recenttech.map((tech, i) => (
              <LI key={i} size="small">
                {tech}
              </LI>
            ))}
          </ul>
        </StyledText>
        <StyledPicture>
          <div className="background">
            <StaticImage
              className="portrait"
              src="../images/gian-portrait.jpg"
              alt="Gian's portrait"
            />
          </div>
        </StyledPicture>
      </div>
    </AboutWrapper>
  )
}
