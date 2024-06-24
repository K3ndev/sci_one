import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

// Middleware to parse json bodies
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
