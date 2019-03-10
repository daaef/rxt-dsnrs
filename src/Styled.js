import styled from "styled-components"

const SectionGroup = styled.div`
position: relative;
  background: url(${props => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  
  @media(max-width: 640px){
    height: 820px;
  }
`
const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
display:grid;
grid-template-columns: 300px auto;
margin: 0 40px;
grid-gap: 20px;
grid-template-rows: auto  100%;

@media (max-width: 720px){
  grid-template-columns: 1fr;
}
`
const SectionTitle = styled.h3`
color: #ffffff;
font-size: 60px;
margin: 0;
line-height: 1.2;

@media (max-width: 720px){
  font-size: 40px;
}
`
const SectionText = styled.p`
color: rgba(255,255,255,.8);
`
const WaveBottom = styled.div`
 position:absolute;
 bottom: -6px;
 width: 100%;
`
const WaveTop = styled.div`
 position:absolute;
 top: -6px;
 width: 100%;
 transform: rotate(180deg);
`
const CellGroup = styled.div`
display:grid;
grid-template-columns: 60px auto;
grid-gap: 25px;
align-items: center;
`
const CellImage = styled.div`
width: 60px;
height: 60px;
border-radius: 10px;
background: #000 url(${props => props.image});
`
const CellTitle = styled.div`
font-size: 24px;
border-bottom: 1px solid rgba(0,0,0,.1);
padding: 30px 0;
`
const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const FooterGroup = styled.div`
  background: #F1F3F5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  max-width: 600px;
  margin: 0 auto;
  color: #486791;
`
const Button = styled.button`
  color: #ffffff;
  background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  justify-self: center;
  font-size: 24px;
  transition: .8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  &:hover {
    box-shadow: 0px 20px 40px rgba(0,0,0,0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  width: 600px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  a{
    transition: .8s;
  }
  
  a:hover {
    color: #000;
  }
`
const Copyright = styled.div`
  color: #486791;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  
  @media (max-width: 800px){
    grid-template-columns: repeat(1 , 1fr);
    padding: 0 20px;
  }
`

export {
  SectionGroup,
  WaveTop,
  WaveBottom,
  SectionLogo,
  SectionTitleGroup,
  SectionTitle,
  SectionText,
  CellGroup,
  CellImage,
  CellTitle,
  SectionCaption,
  SectionCellGroup,
  FooterGroup,
  Text,
  Button,
  LinkGroup,
  Copyright
}