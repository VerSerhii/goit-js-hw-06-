'use strict';


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },

  getDiscount() {
    return this.discount;
  },

  setDiscount(value) {
    this.discount = value;
  },

  getOrders() {
    return this.orders;
  },

  addOrder(cost, order) {
    const discountedCost = cost - cost * this.discount;
    this.balance -= discountedCost;
    this.orders.push(order);
  },
};



  