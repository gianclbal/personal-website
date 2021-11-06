import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 1rem 1.25rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderradius.button};
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`

