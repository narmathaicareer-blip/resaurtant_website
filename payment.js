
const totalElement = document.getElementById("paymentTotal");
const paymentForm = document.getElementById("paymentForm");
const demoNotice = document.getElementById("demoNotice");
const paymentSuccess = document.getElementById("paymentSuccess");

function readOrderTotal() {
  // Use the total saved by your delivery page.
  // Update this key to match your existing code.
  const savedTotal = localStorage.getItem("laMaisonOrderTotal");

  if (savedTotal !== null && Number.isFinite(Number(savedTotal))) {
    return Math.max(0, Number(savedTotal));
  }

  return null;
}

const checkoutOrder = JSON.parse(
  localStorage.getItem("laMaisonCheckoutOrder") || "null"
);

const orderTotal =
  checkoutOrder && Number.isFinite(Number(checkoutOrder.total))
    ? Number(checkoutOrder.total)
    : null;

totalElement.textContent =
  orderTotal !== null
    ? orderTotal.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
      })
    : "Order total unavailable";
function updatePaymentNotice() {
  const selected = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );

  if (!selected) return;

  if (selected.value === "COD") {
    demoNotice.textContent =
      "Cash on Delivery selected. No online payment is required.";
  } else {
    demoNotice.textContent =
      selected.value +
      " selected. Demo mode only — no real payment will be taken.";
  }
}

document.querySelectorAll('input[name="paymentMethod"]')
  .forEach(input => {
    input.addEventListener("change", updatePaymentNotice);
  });

updatePaymentNotice();

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (orderTotal === null || orderTotal <= 0) {
    alert(
      "Order total is missing. Please connect the total from delivery.html first."
    );
    return;
  }

  const selected = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );

  if (!selected) {
    alert("Please select a payment method.");
    return;
  }

  const demoOrder = {
    orderId: "LM-DEMO-" + Date.now(),
    total: orderTotal,
    paymentMethod: selected.value,
    status: selected.value === "COD"
      ? "Demo order placed — pay on delivery"
      : "Demo order confirmed — payment not processed",
    createdAt: new Date().toISOString()
  };

  // Build the completed demo order with delivery information
const completedOrder = {
  ...checkoutOrder,
  id: Date.now(),
  paymentMethod: demoOrder.paymentMethod,
  paymentStatus: demoOrder.paymentMethod === "COD"
    ? "Pay on delivery"
    : "Demo only - not paid",
  status: "Pending",
  created: new Date().toLocaleString()
};

// Keep the existing Admin Dashboard order list
const savedOrders = JSON.parse(
  localStorage.getItem("laMaisonOrders") || "[]"
);

savedOrders.unshift(completedOrder);

localStorage.setItem(
  "laMaisonOrders",
  JSON.stringify(savedOrders)
);

localStorage.setItem(
  "laMaisonLastDemoOrder",
  JSON.stringify(demoOrder)
);

// Remove only the temporary checkout copy
localStorage.removeItem("laMaisonCheckoutOrder");

  paymentForm.hidden = true;
  paymentSuccess.hidden = false;

  document.getElementById("confirmationMessage").textContent =
    "Order " + demoOrder.orderId +
    " | Total: " +
    demoOrder.total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR"
    }) +
    " | Method: " + demoOrder.paymentMethod + ".";
});

document.addEventListener("DOMContentLoaded", function () {
  const methods = document.querySelectorAll(
    'input[name="paymentMethod"]'
  );

  const upi = document.getElementById("upiForm");
  const card = document.getElementById("cardForm");
  const netbanking = document.getElementById("netbankingForm");
  const notice = document.getElementById("demoNotice");

  function showPaymentForm() {
    const selected = document.querySelector(
      'input[name="paymentMethod"]:checked'
    );

    const method = selected ? selected.value : "COD";

    if (upi) upi.hidden = method !== "UPI";
    if (card) card.hidden = method !== "Card";
    if (netbanking) {
      netbanking.hidden = method !== "Net Banking";
    }

    if (notice) {
      notice.textContent =
        method === "COD"
          ? "Cash on Delivery selected."
          : method + " selected. Demo only — no real payment.";
    }
  }

  methods.forEach(function (input) {
    input.addEventListener("change", showPaymentForm);
  });

  showPaymentForm();
});
