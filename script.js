// Set your backend URL
const BASE_URL = "https://vendora-backend-1.onrender.com"; // Update accordingly

// Example: Fetch products
axios.get(`${BASE_URL}/api/products`)
  .then(response => {
    console.log("Products:", response.data);
    // render products on UI
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });