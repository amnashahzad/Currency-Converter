function convert() {
    // Get the user input
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
  
    // Make the API request
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var conversionRate = data.rates[toCurrency];
        var result = amount * conversionRate;
  
        // Display the result
        document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
      }
    };
    xhr.open('GET', 'https://api.exchangerate-api.com/v4/latest/' + fromCurrency, true);
    xhr.send();
  }
  