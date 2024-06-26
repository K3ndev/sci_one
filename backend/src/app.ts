import express from 'express';
import multer from "multer"
import cors from 'cors'
import pdf from 'pdf-parse'
import fs from 'fs'

const app = express();

const port = 4000;

app.use(cors());

// Middleware to parse json bodies
app.use(express.json());

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resume/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })
app.post('/api/upload', upload.single('resume'), (req, res) => {
  res.send('Upload successful');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
