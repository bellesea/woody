import React from 'react'
import { RichText } from 'prismic-reactjs'

const Footer = ({ slice }) => (
  <section>
    <a className="footer">©2021 Woody Keppel. All rights reserved.</a>
    <style jsx>{`
    section {
      width: 100vw;
      text-align: center;
      margin-bottom: 10px;
    }
      .footer {
        text-align: center;
        width: 100vw;
    `}</style>
  </section>
)

export default Footer