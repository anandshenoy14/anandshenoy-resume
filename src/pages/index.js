import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LineOfDots from "../components/lineofdots"
import AddressLine from "../components/addressline"
import PhoneNumberLine from "../components/phonenumberline"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="header-panel">
      <div className="left-section">
        <div className="phone-address-wrapper">
            <AddressLine></AddressLine><PhoneNumberLine></PhoneNumberLine>
        </div>
        <LineOfDots></LineOfDots>
      </div>
      <div className="right-section">
      <div className="social-wrapper">
        <div className="icon"><a href="https://twitter.com/anandshenoy14"><i data-feather="twitter"></i></a></div>
        <div className="icon"><a href="https://www.facebook.com/anand.shenoy14"><i data-feather="facebook"></i></a></div>
        <div className="icon"><a href="https://github.com/anandshenoy14"><i data-feather="github"></i></a></div>
        <div className="icon"><a href=""><i data-feather="download"></i></a></div>
        <div className="icon"><a href="mailto:anand.shenoy14@gmail.com"><i data-feather="mail"></i></a></div>
      </div>
        <LineOfDots></LineOfDots>
      </div>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
