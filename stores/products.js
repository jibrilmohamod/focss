// products.js (Pinia store)
import { defineStore } from "pinia"
import { useCartStore } from "./cart"
import { ref } from "vue" // Import ref from vue

export const useProductsStore = defineStore("products", () => {
 const cartStore = useCartStore()

 // Assuming you are fetching products asynchronously
 const products = ref([]) // Use ref to create a reactive variable
 const fetchProducts = async () => {
  try {
   const response = await fetch("/api/products")
   products.value = await response.json() // Set the value of products
   return products.value
  } catch (error) {
   console.error("Error fetching products:", error)
   return []
  }
 }

 function addToCart(product) {
  cartStore.addToCart(product)
 }

 return {
  products,
  addToCart,
  fetchProducts,
 }
})
