   // app.js
   const express = require('express');
   const cars = require('./cars'); // Import the cars module
   const app = express();
   const port = 3000; // You can choose any available port

      // GET endpoint to retrieve a list of cars
      app.get('/cars', (req, res) => {
        res.json(cars); // Return the array of cars from the cars module
      });
   
      // GET endpoint to retrieve details of a specific car by ID
      app.get('/cars/:id', (req, res) => {
        const carId = req.params.id;
        const car = cars.find((c) => c.id === parseInt(carId));
        if (!car) {
          res.status(404).json({ error: 'Car not found' });
          return;
        }
        res.json(car);
      });
   
      // GET endpoint to retrieve details of a specific car by make and model
      app.get('/cars/:make/:model', (req, res) => {
        const make = req.params.make;
        const model = req.params.model;
        const car = cars.find(
          (c) => c.make.toLowerCase() === make.toLowerCase() && c.model.toLowerCase() === model.toLowerCase()
        );
        if (!car) {
          res.status(404).json({ error: 'Car not found' });
          return;
        }
        res.json(car);
      });

      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });