document.addEventListener("DOMContentLoaded", function () {
   const cartItems = document.getElementById("cart-items");
   const cartTotal = document.getElementById("cart-total");

   const addToCartButtons = document.querySelectorAll(".add-to-cart");

   addToCartButtons.forEach(button => {
       button.addEventListener("click", function () {
           const item = button.parentElement;
           const itemName = item.querySelector("h3").textContent;
           const itemPrice = parseFloat(item.querySelector("p").textContent.replace("Цена: $", ""));
           
           const cartItem = document.createElement("li");
           cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
           cartItems.appendChild(cartItem);

           updateCartTotal(itemPrice);
       });
   });

   function updateCartTotal(itemPrice) {
       const currentTotal = parseFloat(cartTotal.textContent.replace("Итого: $", ""));
       const newTotal = currentTotal + itemPrice;
       cartTotal.textContent = `Итого: $${newTotal.toFixed(2)}`;
   }

   const checkoutButton = document.getElementById("checkout");
   checkoutButton.addEventListener("click", function () {
       alert("Заказ оформлен! Спасибо за покупку.");
       // Очистить корзину и обновить общую сумму
       cartItems.innerHTML = "";
       cartTotal.textContent = "Итого: $0.00";
   });
});
