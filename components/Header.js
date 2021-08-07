import React from "react";
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const Header = ({ menu = [] }) => (
    <header className="site-header">
      {/* <a href="/" className="logo">
        {RichText.asText(menu.data.title)}
      </a> */}
      <div className="container">
        <Links menuLinks={menu.data.menu_links} />
      </div>
      <style jsx>{`
        .container {
          margin-left: 10vw;
          margin-right: 10vw;
          column-count: 3;
          column-gap: 27px;
        }
        @media (max-width: 768px) {
          .container {
            margin-left: 5vw;
            margin-right: 5vw;
            column-count: 1;
            column-gap: 27px;
          }
        }
        `}</style>
    </header>
);

const Links = ({menuLinks}) => {

  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <div className="card">
                <img src={menuLink.image.url} alt={menuLink.image.alt} />
                <a className="word"><h5>{RichText.asText(menuLink.title)}</h5></a>
                <div className="overlay-container">
                  <div className="content">
                    <h4>{RichText.asText(menuLink.title)}</h4>
                    <p>{RichText.asText(menuLink.description)}</p>
                    <a href={Link.url(menuLink.link)}>
                      {RichText.asText(menuLink.label)} &#10140;
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .card {
            position: relative;
            border-radius: 37px;
            margin-bottom: 27px;
            display: grid;
            grid-template-rows: 1fr auto;
            z-index: 1;
          }

          .card > img {
            grid-row: 1 / -1;
            grid-column: 1;
          }

          img {
            max-width: 100%;
            border-radius: 25px;
            display: block;
            z-index: 2;
          }

          .word {
            grid-row: 2;
            grid-column: 1;
            justify-self: start;
            z-index: 3;
            background-image: linear-gradient(180deg, rgb(196, 196, 196, 0), rgb(43, 43, 43, 0.7));
            width: 100%;
            border-radius: 0 0 25px 25px;
          }

          .word h5 {
            positon: absolute;
            margin: 0;
            padding: 40px 0 10px 20px;
            font-family: Fraunces;
            font-size: 1.1rem;
            color: #E9E6DD;
          }

          @media (max-width: 768px) {
            .word h5 {
              padding: 40px 0 10px 0px;
            }
          }
          @media(hover: hover) and (pointer: fine) {
            
          }
          .card:hover .word {
            display: none;
          }

          .overlay-container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .9s ease;
            background-image: linear-gradient(180deg, rgb(207, 160, 127, 0.7), rgb(136, 83, 61, 0.9));
            z-index: 10;
            border-radius: 25px;
          }

          .card:hover.overlay-container {
            opacity: 1;
          }

          .content {
            margin: 6%;
            word-break: break-all;
            color: #E9E6DD;
          }

          .content h4 {
            font-family: Fraunces;
            font-size: 1.2rem;
            margin: 0;
            padding: 0;
          }

          .content p {
            margin: 3px 0 3px 0;
          }

          .content a {
            position: absolute;
            left: 15px;
            bottom: 15px;
            border: solid 1px #E9E6DD;
            color: #E9E6DD;
            font-weight: bold;
            margin: 0;
            padding: 3px 10px 3px 10px;
            border-radius: 50px;
          }

          nav ul {
            margin: 0;
            padding-left: 0;
          }
          nav li {
            display: inline-block;
          }

          @media (max-width: 767px) {
            nav {
              float: none;
              text-align: center;
            }
            nav li {
              display: inline-block;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
          `}</style>
      </nav>
    )
  }
  return null
}

export default Header;