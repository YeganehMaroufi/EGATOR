const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(".menu-btn"); // Correct selector
const closeBtn = document.querySelector(".closeBtn"); // Correct selector
const themeToggler = document.querySelector(".theme-toggler");

// Show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Toggle dark theme and active class on spans
closeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Fill orders in the table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Declined"
        ? "danger"
        : order.shipping === "pending"
        ? "warning"
        : "primary"
    }">${order.shipping}</td>
    <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
