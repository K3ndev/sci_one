"use client";
// temp use client
import React, { ChangeEvent, useState, useRef } from "react";
import { createClient } from "@/utils/supabase/cleint";

export default function Resume() {
  const [file, setFile] = useState<File | null>(null);
  const keywordsRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState([])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const onClickHandler = async() => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const supabase = createClient();
    const currentSession = (await supabase.auth.getSession()).data.session

    const formData = new FormData();
    formData.append("resume", file);

    fetch("http://localhost:4000/api/upload", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${currentSession?.access_token}`,
      },
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

  const handleSearch = async () => {
    const keywords = keywordsRef.current?.value;

    if (!keywords) {
      return;
    }

    const supabase = createClient();
    const currentSession = (await supabase.auth.getSession()).data.session

    try {
      const response = await fetch(`http://localhost:4000/search?keywords=${keywords}`, {
        headers: {
          Authorization: `Bearer ${currentSession?.access_token}`,
        },
      });
      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      setResult(data)
      
    } catch (error) {
      console.error('error', error);
    }
  };
    

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Upload
      </button>

      <div>
        <input type="text" ref={keywordsRef}/>
        <button onClick={handleSearch}>search keywords</button>
      </div>

      <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}
