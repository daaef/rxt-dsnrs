import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticData from "../../staticData"
import Cell from "../components/Cell"
import { SectionCaption, SectionCellGroup } from "../Styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../assets/img/logo-sketch.png')} width="50" alt=""/>
          <img src={require('../assets/img/logo-figma.png')} width="50" alt=""/>
          <img src={require('../assets/img/logo-invision.png')} width="50" alt=""/>
          <img src={require('../assets/img/logo-framer.png')} width="50" alt=""/>
          <img src={require('../assets/img/logo-react.png')} width="50" alt=""/>
          <img src={require('../assets/img/logo-swift.png')} width="50" alt=""/>
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System with Figma"
          text="10 Sections"
          image={require('../assets/img/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 Sections"
          image={require('../assets/img/wallpaper2.jpg')}
        />
        <Card
          title="Video Editing with Screenflow"
          text="6 Sections"
          image={require('../assets/img/wallpaper3.jpg')}
        />
        <Card
          title="Sound Design with Cubase"
          text="6 Sections"
          image={require('../assets/img/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../assets/img/wallpaper2.jpg')}
      logo={require('../assets/img/logo-react.png')}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 Sections - 6 Hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
