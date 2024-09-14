<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test</title>
  <style>
    body {
      font-family: "Courier New", Courier, monospace;
      background-color: #f4f4f9;
      color: #333;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    label {
      font-size: 18px;
      color: #555;
    }

    input[type="number"] {
      padding: 8px;
      margin-top: 5px;
      margin-bottom: 15px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
    }

    button:hover {
      background-color: #45a049;
    }

    #output {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: #333;
    }

    /* For better spacing on mobile devices */
    @media (max-width: 600px) {
      input[type="number"], button {
        width: 100%;
      }
    }
  </style>
</head>
<body>

  <h1>Order Your Items</h1>

  <label for="cinnabun">Cinnabuns ($3 each):</label>
  <input type="number" id="cinnabun" value="0" min="0"><br>

  <label for="lemonade">Lemonades ($2 each):</label>
  <input type="number" id="lemonade" value="0" min="0"><br>

  <label for="pretzelBites">Pretzel Bites ($3 each):</label>
  <input type="number" id="pretzelBites" value="0" min="0"><br>

  <button onclick="calculateTotal()">Calculate Total</button>

  <div id="output"></div>

  <script>
    // Prices of the products
    const prices = {
      cinnabun: 3,
      lemonade: 2,
      pretzelBites: 3
    };

    // Function to calculate the total cost based on quantities
    function calculateTotal() {
      const cinnabunQty = Number(document.getElementById("cinnabun").value);
      const lemonadeQty = Number(document.getElementById("lemonade").value);
      const pretzelBitesQty = Number(document.getElementById("pretzelBites").value);

      const total = (prices.cinnabun * cinnabunQty) + 
                    (prices.lemonade * lemonadeQty) + 
                    (prices.pretzelBites * pretzelBitesQty);
      
      // Display the total in the output div
      document.getElementById("output").textContent = `The total cost is $${total}`;
    }
  </script>

</body>
</html>

