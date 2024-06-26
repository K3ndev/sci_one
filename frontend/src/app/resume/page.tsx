"use client";
// temp use client
import React, { ChangeEvent, useState } from "react";

export default function Resume() {
  const [file, setFile] = useState<File | null>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const onClickHandler = () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    fetch("http://localhost:4000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Upload successful");
          alert("File uploaded successfully");
        } else {
          console.error("Upload failed");
          alert("Failed to upload file");
        }
      })
      .catch((error) => {
        console.error("Error during upload", error);
        alert("Error uploading file");
      });
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Upload
      </button>
    </div>
  );
}
