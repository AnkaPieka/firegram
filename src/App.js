import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import Title from "./components/Title.jsx";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgDesc, setImgDesc] = useState(null);


  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setImgDesc={setImgDesc} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imgDesc={imgDesc} setImgDesc={setImgDesc} />}
    </div>
  );
}

export default App;
