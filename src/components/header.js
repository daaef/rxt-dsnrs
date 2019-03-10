import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../assets/css/Header.css'
class Header extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll',
      this.handleScroll)
  }
  
  handleScroll = (e) => {
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }
  
  render() {
    return (
      <header>
        <div className={`Header ${(this.state.hasScrolled) ? "scroll" : ""}`}>
          <div className="HeaderGroup">
            <Link to="/"><img src={require('../assets/img/logo-designcode.svg')}
                              width="30" alt=""/></Link>
            <Link to="/courses">Courses</Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/buy"><button>Buy</button></Link>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
