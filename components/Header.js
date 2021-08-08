import React from "react";
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'
import MyModal from './Modal'
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
          z-index: -1;
          margin-left: 10vw;
          margin-right: 10vw;
          column-count: 3;
          column-gap: 27px;
        }

        @media (max-width: 767px) {
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
                <a className="word"><MyModal 
                title={RichText.asText(menuLink.title)} 
                description={RichText.asText(menuLink.description)}
                link={Link.url(menuLink.link)}
                label={RichText.asText(menuLink.label)}
                link2={Link.url(menuLink.link2)}
                label2={RichText.asText(menuLink.label2)}
                link3={Link.url(menuLink.link3)}
                label3={RichText.asText(menuLink.label3)}
                link4={Link.url(menuLink.link4)}
                label4={RichText.asText(menuLink.label4)}
                link5={Link.url(menuLink.link5)}
                label5={RichText.asText(menuLink.label5)}
                link6={Link.url(menuLink.link6)}
                label6={RichText.asText(menuLink.label6)}
                image2={menuLink.image2.url}
                image2Alt = {menuLink.image2.alt}
                image3={menuLink.image3.url}
                image3Alt = {menuLink.image3.alt}
                image4={menuLink.image4.url}
                image4Alt = {menuLink.image4.alt}
                /></a>
                <img src={menuLink.image.url} alt={menuLink.image.alt} />
                {/* <a className="word"><h5>{RichText.asText(menuLink.title)}</h5></a> */}
                {/* <div className="overlay-container">
                  <div className="content">
                    <h4>{RichText.asText(menuLink.title)}</h4>
                    <p>{RichText.asText(menuLink.description)}</p>
                    <a href={Link.url(menuLink.link)}>
                      {RichText.asText(menuLink.label)} +
                    </a>
                  </div>
                </div> */}
              </div>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .card {
            position: relative;
            text-align: centre;
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



          @media (max-width: 767px) {
            .word h5 {
              padding: 40px 0 10px 0px;
            }
          }
          
          // .card:hover .word {
          //   display: none;
          // }

          // .overlay-container {
          //   position: absolute;
          //   top: 0;
          //   bottom: 0;
          //   left: 0;
          //   right: 0;
          //   height: 100%;
          //   width: 100%;
          //   opacity: 0;
          //   transition: .6s ease;
          //   background-image: linear-gradient(180deg, rgb(207, 160, 127, 0.8), rgb(136, 83, 61, 1));
          //   z-index: 10;
          //   border-radius: 25px;
          // }

          // .card:hover .overlay-container {
          //   opacity: 1;
          // }

          // .content {
          //   margin: 6%;
          //   word-break: break-all;
          //   color: #E9E6DD;
          // }

          // .content h4 {
          //   font-family: Fraunces;
          //   font-size: 1.2rem;
          //   margin: 0;
          //   padding: 0;
          // }

          // .content p {
          //   margin: 3px 0 3px 0;
          // }

          // .content a {
          //   position: absolute;
          //   left: 15px;
          //   bottom: 15px;
          //   border: solid 1px #E9E6DD;
          //   color: #E9E6DD;
          //   font-weight: bold;
          //   margin: 0;
          //   padding: 3px 10px 3px 10px;
          //   border-radius: 50px;
          // }

          // .content a:hover {
          //   background-color: #fff;
          //   border: none; 
          //   color: #88533D;
          //   transition: .6s ease;
          // }

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