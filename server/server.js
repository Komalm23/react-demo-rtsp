// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parsing middleware
app.use(express.json());

// Routes for saving data
app.post('/api/saveData', async (req, res) => {
  try {
    // Save data to MongoDB
    const newData = req.body; // Assuming your data is sent in the request body
    const savedData = await Model.create(newData);

    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
