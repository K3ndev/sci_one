"use client"

import React, { useState } from "react";
import {useProfileStore} from "@/app/_stores/use-profile"
import { uploadImage } from "./_hooks/upload-picture";

export default function Upload(){

    const [file, setFile] = useState<File | null>(null);
    const {currentUser} = useProfileStore()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
      
    };

    const uploadButton = async () => {
      if (file && currentUser.id) {
          uploadImage({ user_id: currentUser.id, file });
      }
    };

    return (
        <div>
            <p>Upload your profile picture: </p>
            <input id="file" type="file" onChange={handleFileChange} />
            <button onClick={uploadButton}>upload</button>
        </div>
    )
}