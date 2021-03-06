import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./profile.css"
import ProfileImage from "./profileImage"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `midnightblue`
    }}
  >
    <div
      style={{
        margin: `0 0`,
        maxWidth: 960,
        paddingLeft: 25
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <ProfileImage fileName="profile1-a.jpg" />
        </Link>
      </h1>
    </div>
    
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
