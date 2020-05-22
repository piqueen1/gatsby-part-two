import React from "react"
import Styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(Styles)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  )
}