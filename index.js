const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send(`
    <div style="background: linear-gradient(135deg, #2a2d3e, #2a2d3e); height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Segoe UI', sans-serif; color:rgb(255, 255, 255); text-align: center;">
      <h1 style="font-size: 40px; margin-bottom: 30px;">Infrastructure as Code Demo</h1>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        <div style="width: 80px; height: 80px; background-color: #256b6b; border-radius: 50%;"></div>
        <div style="width: 80px; height: 80px; background-color: #ff914d;"></div>
        <div style="width: 0; height: 0; border-left: 40px solid transparent; border-right: 40px solid transparent; border-bottom: 80px solid #713efd;"></div>
        <div style="width: 80px; height: 80px; background-color: #ffde59; transform: rotate(45deg);"></div>
      </div>
    </div>
  `);
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});