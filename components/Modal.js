import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'

export default function Modal({image, imageAlt, title, description, link, label, link2, label2, link3, label3, link4, label4, link5, label5, link6, label6, link7, label7, link8, label8, image2, image2Alt, image3, image3Alt, image4, image4Alt}) {
  let [isOpen, setIsOpen] = useState(false)

  
  function closeModal() {
    setIsOpen(false)
    document.getElementById('__next').style.filter = 'blur(0px)';
  }

  function openModal() {
    setIsOpen(true)
    document.getElementById('__next').style.filter = 'blur(5px)';
  }

  return (
      <div>
          {/* <button
              type="button"
              class="open-button"
              // className="button"
              onClick={openModal}
              >
              <img src={image} alt={imageAlt} />
          </button> */}
          <input type="image" id="button" src={image} alt={title} onClick={openModal}/> 
          <button id="title" onClick={openModal}>{title} +</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          onClose={closeModal}
          as="div"
          className="dialog-container"
          data-backdrop="static"
        >
          <Dialog.Overlay />
          <div className="dialog-content">
            <Dialog.Title ><h3 className="title">{title}</h3></Dialog.Title>
            <div className="inner">
              <p>{description}</p>
              <a href={link}><h4>{label}</h4></a>
              <img src={image2} alt={image2Alt} />
              <a href={link2}><h4>{label2}</h4></a>
              <img src={image3} alt={image3Alt} />
              <a href={link3}><h4>{label3}</h4></a>
              <img src={image4} alt={image4Alt} />
              <a href={link4}><h4>{label4}</h4></a>
              <a href={link5}><h4>{label5}</h4></a>
              <a href={link6}><h4>{label6}</h4></a>
              <a href={link7}><h4>{label7}</h4></a>
              <a href={link8}><h4>{label8}</h4></a>
            </div>
          <button className="button" onClick={closeModal}>close</button>
          </div>
        </Dialog>
      </Transition>

          <style jsx>{`
          #button {
            width: 100% !important;
            border-radius: 25px;
            display: block;
            z-index: 4;
          }

          img {
            max-width: 100%;
            border-radius: 25px;
            display: block;
            z-index: 2;
          }
            .button {
              z-index: 4;
              margin: 0 0 13px 13px;
              padding: 5px 10px 5px 10px;
              background-color: transparent;
              border: solid 1px #88533D;
              border-radius: 25px;
              font-family: Inter;
              font-weight: 600;
              font-size: 1rem;
              color: #E9E6DD;
              cursor: pointer;
            }

            .button:hover {
              border: none;
              background: #88533D;
              color: #E9E6DD;
            }

            #title {
              position: absolute;
              bottom: 20px;
              left: 20px;
              justify-self: start;
              z-index: 1;
              border-radius: 25px;
              color: #E9E6DD;
              padding: 5px 10px 5px 10px;
              border: solid 1px #E9E6DD;
              margin: 0;
              background: transparent;
              font-size: 1rem;
              cursor: pointer;
              font-weight: 700;
            }

            #title:hover {
              border: none;
              background: #E9E6DD;
              color: #88533D;
            }

            .dialog-content {
              z-index: 5;
              text-align: justify;
              height: 60vh;
            }

            .inner {
              z-index: 5;
              text-align: left;
              max-height: 38vh !important;
              overflow-y: auto !important;
              overflow-x: hidden !important;
              font-size: 15px;
              line-height: 25px;
              margin: 5px 0 5px 0;
            }
            
            img {
              max-height: 30vh;
            }

            .button:hover {
              background-color: #E9E6DD;
              color: #88533D;
              pointer: cursor;
            }

            .title {
              font-family: Fraunces;
            }
            @media (max-width: 767px) {
              .button {
                margin: 0 0 13px 0;
              }
            }
          `}</style>
      </div>
  )
}
