import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const prevButtonClick = (e) => {
    console.log("si", selectedImg);
    docs.map((doc) => {
      for (let i = 0; i < docs.length; i++) {
        if (doc.url === selectedImg) {
          const prevIndex = docs.indexOf(doc)-1;
          setSelectedImg(docs[prevIndex].url);
        }
      }
    });
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button onClick={prevButtonClick}>Previous</button>
      <motion.img
        src={selectedImg}
        alt="one pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <button onClick="nextButtonClick">Next</button>
    </motion.div>
  );
};

export default Modal;
