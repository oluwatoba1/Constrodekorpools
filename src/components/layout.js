/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import loading from '../images/loading.gif'

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  

  componentDidMount() {
    setInterval(() => {
      this.setState({loading: false})
    }, 2000);
  }

  render() {
  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
    if(this.state.loading) {
      return (
        <div className="Loading">
          <img src={loading} />
        </div>
      )
    }
    else {
      return (
        <div className="Foundation">
          <Header
          logo={require('../images/gatsby-icon.png')} 
          image={require('../images/constrodekorpools2.jpg')}/>
          {this.props.children}
          <Footer />
        </div>
      )
    }
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
