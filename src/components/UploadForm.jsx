import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);

  const types = ['image/jpg', 'image/png'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
        setFile(selected);
    } else {
        setFile(null);
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} />
      </form>
    </div>
  );
}

export default UploadForm;
