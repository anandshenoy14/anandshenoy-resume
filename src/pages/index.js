import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LineOfDots from "../components/lineofdots"
import AddressLine from "../components/addressline"
import PhoneNumberLine from "../components/phonenumberline"
import Icon from "../components/Icon"
import Data from "../components/data"


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
        {Data.icons.map((icon)=>(
            <Icon type={icon.type} link={icon.link}/>
        ))}
      </div>
        <LineOfDots></LineOfDots>
      </div>
    </div>
  </Layout>
)

export default IndexPage
