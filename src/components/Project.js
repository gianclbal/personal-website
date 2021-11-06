import { useStaticQuery, grahpql, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { ProjectWrapper, H1, H2, P, LI } from "../elements"
import externalicon from "../images/external.svg"
import filesicon from "../images/files.svg"
import githubicon from "../images/github.svg"

const StyledProject = styled.li`
  position: relative;
  cursor: default;

  @media (hover: hover) {
    &:hover,
    &:focus-within {
      .project-inner {
        transition: transform 0.3s;
        transform: translateY(-7px);
      }

      .project-header {
        a :hover {
          color: ${props => props.theme.colors.black};
        }
      }
    }
  }

  a {
    position: relative;
    z-index: 1;

    .link {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  .project-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    background-color: ${props => props.theme.colors.primary};
    /* border-radius: ${props => props.theme.borderradius.pic}; */

    .project-top {
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;

      .project-icon {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .project-links {
        display: flex;
        align-items: center;
        margin-right: -10px;

        a {
          padding: 5px 7px;

          .github-icon {
            filter: saturate(100%) brightness(0);
          }

          img {
            width: 25px;
            height: 25px;
            margin-top: -4px;
          }
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;

    a {
      position: static;
      text-decoration: none;

      :visited {
        text-decoration: none;
        color: ${props => props.theme.colors.blue};
      }

      :hover {
        color: ${props => props.theme.colors.black};
      }
    }
  }

  .project-desc {
    p {
      color: ${props => props.theme.colors.black};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      list-style: none;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }

  footer {
    margin-top: --50px;
  }
`
export const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              github
              external
              desc
            }
          }
        }
      }
    }
  `)

  const projects = data.allMdx.edges.filter(({ node }) => node)

  const projectInner = node => {
    const { frontmatter } = node
    const { title, tech, github, external, desc } = frontmatter

    return (
      <div className="project-inner">
        <header className="project-header">
          <div className="project-top">
            <div className="project-icon">
              <H2
                fonts="secondary"
                className="project-title"
                weight="bold"
                color="white"
              >
                <a
                  href={external ? external : github}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </H2>
            </div>
            <div className="project-links">
              {github && (
                <a
                  href={github}
                  aria-label="Github link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="github-icon"
                    src={githubicon}
                    alt="github icon"
                  />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="external link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={externalicon}
                    alt="external icon"
                    className="external-icon"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="project-desc">
            <P size="small" fonts="secondary">
              {desc}
            </P>
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <LI
                  textTransform="lowercase"
                  fonts="secondary"
                  size="xSmall"
                  weight="bold"
                  color="black"
                  key={i}
                >
                  /{tech}
                </LI>
              ))}
            </ul>
          )}
        </footer>
      </div>
    )
  }

  return (
    <ProjectWrapper id="Projects">
      <div className="inner">
        <div className="header">
          <H2 weight="bold" fonts="secondary" color="primary">
            Projects
          </H2>
        </div>
        <div>
          <ul className="projects-grid">
            {projects &&
              projects.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </ul>
        </div>
      </div>
    </ProjectWrapper>
  )
}
