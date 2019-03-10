import React from "react"
import { CellGroup, CellImage, CellTitle } from "../Styled"

const Cell = props => (
  <CellGroup>
    <CellImage image={props.image}/>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
)

export default Cell