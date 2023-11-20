// pinia cart store using composition api
import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", () => {
 const cart = ref([])

 function addToCart(item) {
  cart.value.push(item)
 }

 function removeFromCart(item) {
  cart.value.splice(cart.value.indexOf(item), 1)
 }

 return {
  cart,
  addToCart,
  removeFromCart,
 }
})
