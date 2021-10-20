import React from "react"
import { HeroWrapper } from "../elements";
import { Button } from "../components";

export const Hero = () => {
  return (
    <HeroWrapper>
      <h2>Hello. My name is</h2>
        <h1>Gian Carlo</h1>
            <p>
              I’m a software engineer with an interest in human-computer
              interaction. Currently, I’m focused on building an accessible
              research platform at SF BUILD and an intern at
              Pay Your Tuition.
            </p>
          <Button href={"https://google.com"}>See Resume</Button>
    </HeroWrapper>
  )
}
