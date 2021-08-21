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

  if ( link.length === 0 && label.length === 0 ) {
    link = ''
    label = ''
  }

  const img2 = image2 === "" ?  null : <img src={image2} alt={image2Alt} />;

  const desc = description === "" ?  null : <p>{description}</p>;

  const lbl = label === "" ?  null : <a href={link}><h4>{label}</h4></a>;

  const lbl2 = label2 === "" ?  null : <a href={link2}><h4>{label2}</h4></a>;

  const lbl3 = label3 === "" ?  null : <a href={link3}><h4>{label3}</h4></a>;

  const lbl4 = label4 === "" ?  null : <a href={link4}><h4>{label4}</h4></a>;

  const lbl5 = label5 === "" ?  null : <a href={link5}><h4>{label5}</h4></a>;

  const lbl6 = label6 === "" ?  null : <a href={link6}><h4>{label6}</h4></a>;

  const lbl7 = label7 === "" ?  null : <a href={link7}><h4>{label7}</h4></a>;

  const lbl8 = label8 === "" ?  null : <a href={link8}><h4>{label8}</h4></a>;

  const img3 = image3Alt === "" ?  null : <img src={image3} alt={image3Alt} />;

  const img4 = image4Alt === "" ?  null : <img src={image4} alt={image4Alt} />; 


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
            <Dialog.Title ><h2 className="title">{title}</h2></Dialog.Title>
            <div className="inner">
              {desc}
              {lbl}
              {img2}
              {lbl4}
              {lbl5}
              {lbl6}
              {lbl7}
              {lbl8}
              {lbl2}
              {img3}
              {lbl3}
              {img4}
            </div>
          <button className="button" onClick={closeModal}>close</button>
          </div>
        </Dialog>
      </Transition>

          <style jsx>{`
          #button {
            width: 100% !important;
            border-radius: 10px;
            display: block;
            z-index: 4;
          }

          img {
            max-width: 100%;
            border-radius: 10px;
            display: block;
            z-index: 2;
          }
            .button {
              z-index: 4;
              margin: 0 2vw 0px 0px;
              padding: 5px 10px 5px 10px;
              background-color: transparent;
              border: solid 1px #E59500;
              border-radius: 10px;
              font-family: "Inter", sans-serif;
              font-weight: 600;
              font-size: 1rem;
              color: #840032;
              cursor: pointer;
            }

            .button:hover {
              border: none;
              background: #840032;
              color: #840032;
            }

            #title {
              position: absolute;
              bottom: 20px;
              left: 20px;
              justify-self: start;
              z-index: 1;
              border-radius: 10px;
              color: #002642;
              padding: 5px 10px 5px 10px;
              // border: solid 1px #E9E6DD;
              border: none;
              background-color: rgb(255, 255, 255, 0.4); 
              backdrop-filter: blur(100px);
              margin: 0;
              // background: transparent;
              font-size: 1rem;
              cursor: pointer;
              font-weight: 700;
            }

            #title:hover {
              border: none;
              background: #840032;
              color: #E59500;
            }

            .dialog-content {
              z-index: 5;
              text-align: justify;
              height: 670vh;
            }

            .inner {
              z-index: 5;
              text-align: left;
              max-height: 70vh !important;
              overflow-y: auto !important;
              overflow-x: hidden !important;
              font-size: 15px;
              line-height: 10px;
              border-radius: 10px;
              margin: 3px 0 3px 0;
            }

            .inner img {
              min-width: 50vw;
            }
            
            img {
              max-height: 30vh;
            }

            .button:hover {
              background-color: #840032;
              color: #E59500;
              pointer: cursor;
            }

            .title {
              font-family: "Fraunces", serif;
              color: #E59500;
              margin-left: 7px;
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
