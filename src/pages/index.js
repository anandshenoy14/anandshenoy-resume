import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LineOfDots from "../components/lineofdots"
import AddressLine from "../components/addressline"
import PhoneNumberLine from "../components/phonenumberline"
import Icon from "../components/Icon"


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
        <Icon type="twitter" link="https://twitter.com/anandshenoy14"/>
        <Icon type="facebook" link="https://www.facebook.com/anand.shenoy14"/>
        <Icon type="github" link="https://github.com/anandshenoy14"/>
        <Icon type="download" link="../docs/Resume-AnandShenoyEbay_Word_v20190217.pdf"/>
        <Icon type="mail" link="mailto:anand.shenoy14@gmail.com"/>
      </div>
        <LineOfDots></LineOfDots>
      </div>
    </div>
  </Layout>
)

export default IndexPage
