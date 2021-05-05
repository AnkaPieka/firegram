import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg, imgDesc, setImgDesc }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const prevButtonClick = (e) => {
    docs.map((doc) => {
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg && docs.indexOf(doc) !== 0) {
          const prevIndex = docs.indexOf(doc) - 1;
          setSelectedImg(docs[prevIndex].url);
          setImgDesc(docs[prevIndex].desc);
        }
      }
    });
  };

  const nextButtonClick = (e) => {
    docs.map((doc) => {
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg && docs.indexOf(doc) !== docs.length - 1) {
          const nextIndex = docs.indexOf(doc) + 1;
          setSelectedImg(docs[nextIndex].url);
          setImgDesc(docs[nextIndex].desc);
        }
      }
    });
  };

  const description = () => {
    docs.map((doc) => {
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg) {
          console.log(doc.desc);
          return doc.desc;
        }
      }
    });
  };

  return (
    <div>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button className="modal-btn prev-btn" onClick={prevButtonClick}>
          Previous
        </button>
        <div className="img-lgd-container">
          <motion.img
            src={selectedImg}
            alt="one pic"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          />
          <div className="pic-lgd">
            {imgDesc ? <p>{imgDesc}</p> : <p>No description</p>}
          </div>
        </div>
        <button className="modal-btn next-btn" onClick={nextButtonClick}>
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
