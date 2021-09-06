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
          margin-top: 5vh;
          margin-bottom: 5vh;
        }

        .title {
          font-size: 3.5em;
          color: #E59500;
          margin: 0;
          padding: 0;
          overflow: none;
        }

        .description {
          margin: 10px;
          font-size: 1.3em;
          padding: 0;
          color: #E5DADA;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5em;
          }

          .description {
            font-size: 1em;
            margin: 10px;
          }
        }
    `}</style>
  </section>
)

export default Header