import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant } from './data/restaurants.js';  // Import the functions for restaurant data
import { backendRouter } from "./routes/api.js";  // Import the API routes

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the backend API router
app.use("/api", backendRouter);

// Route to serve the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for index page (home.html)
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Make sure 'index.html' exists in the 'public' folder
});

// Route for attractions page (attractions.html)
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));  // Ensure 'attractions.html' exists in the 'public' folder
});

// Route for restaurants page (rendering dynamic data using EJS)
app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();  // Get the restaurant data from the function
    res.render('restaurants', { restaurantData: restaurants });  // Render the 'restaurants.ejs' template and pass the data
});

// Route for new restaurant form (newrestaurant.html)
app.get('/newrestaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newrestaurant.html'));  // Ensure 'newrestaurant.html' exists in the 'public' folder
});


// Route to render the details of a specific restaurant by id
app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);  // Parse the restaurant ID from the URL
    const restaurant = getRestaurant(id);  // Get the restaurant data by ID
    if (restaurant) {
        res.render('restaurant_detail', { restaurant });  // Render the 'restaurant_detail.ejs' template
    } else {
        res.status(404).send('Restaurant not found');
    }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
