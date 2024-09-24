const express = require('express');
const userRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON
app.use('/api', userRoutes); // Use user routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
