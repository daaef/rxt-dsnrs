import React from "react"
import { Button, Copyright, FooterGroup, LinkGroup, Text } from "../Styled"

const Footer = ({data, children}) => (
    <FooterGroup>
      <Text>Tweet "Prototype and build apps with React and Swift. New Courses by @MengTo</Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  
)

export default Footer