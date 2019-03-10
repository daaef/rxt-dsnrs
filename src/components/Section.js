import React from "react";
import {
  SectionGroup,
  WaveTop,
  WaveBottom,
  SectionLogo,
  SectionTitleGroup,
  SectionTitle,
  SectionText} from "../Styled";
import Wave from "./Wave"


const Section = props => (
  // noinspection BadExpressionStatementJS
  // noinspection JSUnresolvedVariable
  // noinspection BadExpressionStatementJS
  <SectionGroup image={props.image}>
    <WaveTop><Wave/></WaveTop>
    <WaveBottom><Wave/></WaveBottom>
    <SectionLogo src={props.logo}/>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section