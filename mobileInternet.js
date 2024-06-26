// mobileInternet.js 


// Mobile Internet Cost JS function code 
function calculateInternet() {
    var amountInput = document.getElementById("internetAmount");
    var unitSelect = document.querySelector('input[name="unit"]:checked').id;
    var amount = parseInt(amountInput.value);
    var taka = parseInt(document.getElementById("internetTaka").value);

    // Check if any input field is empty or contains NaN
    if (isNaN(amount) || isNaN(taka)) {
        alert("Please enter valid values for all input fields.");
        return;
    }

    // Convert amount to MB if GB is selected
    if (unitSelect === "GB_button") {
        amount *= 1024; // 1 GB = 1024 MB
    }

    var result = taka / amount;

    // Convert result to a string and manipulate it to limit the number of digits after the decimal point
    var formattedResult = result.toString().replace(/(\.\d{0,3})\d*/, function (match, p1) {
        // Limit the number of digits after the decimal point to 3
        return match.slice(0, p1.length + 4);
    });

    // Create a list item to display the result
    var listItem = document.createElement("li");
    listItem.textContent = "(" + taka + ") টাকায় (" + amount + ") MB কিনলে, প্রতি MB এর দাম = " + formattedResult + " টাকা হবে";
    // listItem.textContent = "Result: " + formattedResult + "/= taka";
    listItem.classList.add("list-inside", "list-decimal"); // Add CSS class
    document.getElementById("internetResults").appendChild(listItem);

    // Update maximum and minimum results
    var maxResult = parseFloat(document.getElementById("maxInternetResult").textContent || 0);
    var minResult = parseFloat(document.getElementById("minInternetResult").textContent || Number.MAX_VALUE);

    if (parseFloat(result) > maxResult) {
        document.getElementById("maxInternetResult").textContent = formattedResult;
        document.getElementById("maxInternetResultBox").style.display = "block";
    }

    if (parseFloat(result) < minResult) {
        document.getElementById("minInternetResult").textContent = formattedResult;
        document.getElementById("minInternetResultBox").style.display = "block";
    }
}

// Mobile Internet Cost DOM Related  
function resetInternet() {
    document.getElementById("internetAmount").value = "";
    document.getElementById("internetTaka").value = "";
    document.getElementById("maxInternetResult").textContent = "";
    document.getElementById("minInternetResult").textContent = "";
    document.getElementById("maxInternetResultBox").style.display = "none";
    document.getElementById("minInternetResultBox").style.display = "none";
    document.getElementById("internetResults").innerHTML = "";
}


// Toggle function for Mobile Internet Cost button
/*function toggleCalculatorForInternetCost() {
    var internetCalculator = document.getElementById("internetCostCalculator");
    if (internetCalculator.style.display === "none" || internetCalculator.style.display === "") {
        internetCalculator.style.display = "block";
    } else {
        internetCalculator.style.display = "none";
    }
}*/

// Toggle function for Mobile Internet Cost button Update code
function toggleCalculatorForInternetCost() {
    var internetCalculator = document.getElementById("internetCostCalculator");
    var button = document.querySelector('.internet-cost-toggle-button');

    if (internetCalculator.style.display === "none" || internetCalculator.style.display === "") {
        internetCalculator.style.display = "block";
        button.textContent = "Mobile Internet Cost close";
    } else {
        internetCalculator.style.display = "none";
        button.textContent = "Mobile Internet Cost open";
    }
}

// Mobile Internet Cost GB or MB Select toggle option
function toggleUnit() {
    var unitSelect = document.getElementById("internetUnit");
    var amountInput = document.getElementById("internetAmount");

    if (unitSelect.value === "GB") {
        amountInput.removeAttribute("disabled");
    } else if (unitSelect.value === "MB") {
        amountInput.setAttribute("disabled", "true");
    }
}
