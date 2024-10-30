const Orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85631",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "LARVENDER KF102 Drone",
    productNumber: "36378",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "96996",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "GPS 4K Drone",
    productNumber: "22821",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

function populateOrders() {
  const tbody = document.querySelector("tbody"); // Select the table body

  // Clear the existing rows
  tbody.innerHTML = "";

  // Iterate over the Orders array and create rows
  Orders.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.productName}</td>
      <td>${order.productNumber}</td>
      <td>${order.paymentStatus}</td>
      <td class="${
        order.shipping === "Pending"
          ? "warning"
          : order.shipping === "Delivered"
          ? "success"
          : "danger"
      }">${order.shipping}</td>
      <td class="primary"><button>Details</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Call the function to populate the table
document.addEventListener("DOMContentLoaded", populateOrders);
