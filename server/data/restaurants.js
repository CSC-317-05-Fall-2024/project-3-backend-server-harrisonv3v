let restaurantData = [
    {
        id: 0,
        name: "Scoma's Restaurant",
        phone: "(415) 771-4383",
        address: "1965 Al Scoma Way, San Francisco, CA 94133",
        photo: "/images/scoma.webp"
    },
    {
        id: 1,
        name: "Dalida",
        phone: "(415) 237-1999",
        address: "101 Montgomery St, San Francisco, CA 94129",
        photo: "/images/dalida.webp"
    },
    {
        id: 2,
        name: "Golden Boy Pizza",
        phone: "(415) 123-4567",
        address: "542 Green St, San Francisco, CA 94133",
        photo: "/images/goldenboypizza.webp"
    },
    {
        id: 3,
        name: "Maison Nico",
        phone: "(415) 359-1000",
        address: "710 Montgomery St, San Francisco, CA 94111",
        photo: "/images/maison.webp"
    },
    {
        id: 4,
        name: "Hog Island Oyster Co.",
        phone: "(415) 391-7117",
        address: "Ferry Building, #11, San Francisco, CA 94111",
        photo: "/images/hog.webp"
    },
    {
        id: 5,
        name: "City View Restaurant",
        phone: "(415) 398-2838",
        address: "33 Walter U Lum Pl, San Francisco, CA 94108",
        photo: "/images/cityview.webp"
    },
    {
        id: 6,
        name: "Sam Wo Restaurant",
        phone: "(415) 989-8898",
        address: "713 Clay St, San Francisco, CA 94108",
        photo: "/images/samwo.webp"
    },
    {
        id: 7,
        name: "Daeho Kalbijjim & Beef Soup",
        phone: "(415) 563-1388",
        address: "1620 Post St, San Francisco, CA 94115",
        photo: "/images/daeho.webp"
    },
    {
        id: 8,
        name: "Copra",
        phone: "(415) 873-0795",
        address: "1700 Fillmore St, San Francisco, CA 94115",
        photo: "/images/copra.webp"
    }
];


let currentId = restaurantData.length - 1;

const nextId = () => {
    currentId += 1;
    return currentId;
};

// Get all restaurants
const getRestaurants = () => {
    return restaurantData;
};

// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant
const createRestaurant = (data) => {
    const newRestaurant = {
        id: nextId(),
        ...data
    };
    restaurantData.push(newRestaurant);
    return newRestaurant;
};

// Update a restaurant by id
const updateRestaurant = (id, data) => {
    let restaurantToUpdate = restaurantData.find(restaurant => restaurant.id === id);
    
    if (!restaurantToUpdate) {
        throw new Error(`Restaurant with id ${id} not found`);
    }

    restaurantData = restaurantData.map(restaurant => {
        if (restaurant.id !== id) {
            return restaurant;
        }

        let updatedRestaurant = {
            ...restaurantToUpdate,
            ...data
        };
        return updatedRestaurant;
    });

    return restaurantData.find(restaurant => restaurant.id === id);
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if (!restaurantToDelete) {
        throw new Error(`Restaurant with id ${id} not found!`);
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantToDelete;
};

// Ensure all functions are exported
export { restaurantData };
export { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant };