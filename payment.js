document.getElementById("payment-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const status = document.getElementById("status");

  try {
    const res = await fetch("https://vendora-backend-1.onrender.com/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, amount })
    });

    const data = await res.json();

    if (res.ok) {
      status.textContent = "Payment successful!";
      status.style.color = "green";
    } else {
      status.textContent = "Payment failed: " + (data.message || "Unknown error");
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "Error connecting to server";
    status.style.color = "red";
  }
});