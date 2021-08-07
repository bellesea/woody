import React from 'react'
import { RichText } from 'prismic-reactjs'

const Header = ({ slice }) => (
  <section>
    <div className="header-container">
      <h1 className="title">{RichText.asText(slice.primary.title)}</h1>
      <h4 className="description">{RichText.asText(slice.primary.description)}</h4>
    </div>
    <style jsx>{`
        .header-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 10vh;
        }

        .title {
          font-size: 3.5em;
          color: #88533D;
          margin: 0;
          padding: 0;
          line-height: 0;
        }

        .description {
          margin: 40px;
          font-size: 1.3em;
          padding: 0;
          color: #CFA07F;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 3em;
          }

          .description {
            font-size: 1em;
          }
        }
    `}</style>
  </section>
)

export default Header