import React from "react"
import { HeroWrapper, H1, H2, P } from "../elements"
import { Button } from "../components"

export const Hero = () => {
  return (
    <HeroWrapper>
      <H2 weight="light">Hello. My name is</H2>
      <H1>Gian Carlo</H1>
      <P size="medium">
        I’m a software engineer with an interest in human-computer interaction.
        Currently, I’m focused on building an accessible research platform at SF
        BUILD and an intern at Pay Your Tuition.
      </P>
      <Button href={"https://google.com"}>See Resume</Button>
    </HeroWrapper>
  )
}
