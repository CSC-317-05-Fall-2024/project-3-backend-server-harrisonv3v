import express from 'express';
import { createRestaurant, updateRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

// POST route to create a new restaurant
router.post('/restaurants', (req, res) => {
    const restaurantData = req.body;
    try {
        const restaurant = createRestaurant(restaurantData);
        res.status(200).json(restaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": `${error}` });
    }
});

// PATCH route to update a restaurant by id
router.patch('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const restaurantData = req.body;
    try {
        const updatedRestaurant = updateRestaurant(id, restaurantData);
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": `${error}` });
    }
});

// DELETE route to delete a restaurant by id
router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const deletedRestaurant = deleteRestaurant(id);  // Call the delete function in restaurants.js
        if (deletedRestaurant) {
            res.status(200).json({ message: 'Restaurant deleted successfully' });
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting restaurant' });
    }
});

// Export the router as backendRouter
export { router as backendRouter };
