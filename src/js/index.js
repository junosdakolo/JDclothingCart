// Create an object class for the product to store the properties for id, name and price of the product.
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
// Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  // To the preceding object class, add the method to calculate the total price of the item.
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  // Add a method to calculate the total price of the shopping cart.
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
// Add a method to add an item to the shopping cart.
  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }
// Method to remove an item from the cart by product ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
      }
// Method to display cart items
  displayCart() {
    console.log("Cart Items:");
    this.items.forEach(item => {
      console.log(
        `Product: ${item.product.name}, Price: $${item.product.price}, Quantity: ${item.quantity}, Total: $${item.calculateTotalPrice()}`
      );
    });
    console.log(`Total Cart Price: $${this.getTotalPrice()}`);
  }


}
