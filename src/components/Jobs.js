import { useStaticQuery, graphql } from "gatsby";
import React, {useState, useRef} from "react"
import styled from "styled-components";
// import { CSSTransition } from 'react-transition-group';
import { SectionWrapper, H2, H1, P, LI, H3 } from "../elements"

const ExperienceWrapper = styled(SectionWrapper)`
  min-height: 0vh;
  max-width: 700px;
  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`

const TabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media ${props => props.theme.breakpoints.tablet} {
        margin-left: 50px;
      }
      @media ${props => props.theme.breakpoints.mobile} {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media ${props => props.theme.breakpoints.tablet} {
        padding-right: 50px;
      }
      @media ${props => props.theme.breakpoints.mobile} {
        padding-right: 25px;
      }
    }
  }
`

const TabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid blue;
  background-color: transparent;
  color: black;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    /* ${({ theme }) => theme.mixins.flexCenter}; */
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid blue;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: light blue;
  }
`;

const Highlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 120px;
  height: 42px;
  /* border-radius: var(--border-radius); */
  /* background: ${props => props.theme.colors.primary}; */
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media ${props => props.theme.breakpoints.tablet} {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * var(120px))
    );
  }
  @media ${props => props.theme.breakpoints.mobile} {
    margin-left: 25px;
  }
`;

const TabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  @media ${props => props.theme.breakpoints.tablet} {
    margin-left: 0;
  }
`

const TabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  ul {
    /* ${({ theme }) => theme.mixins.fancyList}; */
  }
  h3 {
    margin-bottom: 2px;
    line-height: 1.3;
    .company {
      color: black;
    }
  }
  .range {
    margin-bottom: 25px;
    color: black;
  }
`

export const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([]);
  const revealContainer = useRef(null);


  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              company
              date
              range
              location
              url
              description
            }
          }
        }
      }
    }
  `)

const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

//   // Focus on tabs when using up & down arrow keys
//   const onKeyDown = e => {
//     switch (e.key) {
//       case KEY_CODES.ARROW_UP: {
//         e.preventDefault();
//         setTabFocus(tabFocus - 1);
//         break;
//       }

//       case KEY_CODES.ARROW_DOWN: {
//         e.preventDefault();
//         setTabFocus(tabFocus + 1);
//         break;
//       }

//       default: {
//         break;
//       }
//     }
//   };

  const jobsData = data.allMdx.edges;

//   const jobInner = node => {
//     const { frontmatter } = node
//     const { title, company, location, range, url } = frontmatter
//   }
  return (
    <ExperienceWrapper id="education" ref={revealContainer}>
        
      <div className="inner">
      <TabList role="tablist" aria-label="Job tabs" > 
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <TabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </TabButton>
              );
            })}
          <Highlight activeTabId={activeTabId} />
        </TabList>

        <TabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, url, company, range, description} = frontmatter;

              return (
                // <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <TabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{range}</p>
                    <p className="desc">{description}</p>

                   
                  </TabPanel>
                // </CSSTransition>
              );
            })}
        </TabPanels>
        </div>
    </ExperienceWrapper>
  )
}
