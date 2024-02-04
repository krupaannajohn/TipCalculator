function calculateTip() {
    let amount = parseFloat(document.querySelector('#amount').value);
    let noOfPeople = parseInt(document.querySelector('#noOfPeople').value);
    let service = document.querySelector('#options').value;

    console.log(service);

    if (isNaN(amount) || isNaN(noOfPeople) || service === 'Select Option' || service === '0'|| amount <= 0 || noOfPeople <= 0) {
        alert("Please enter valid values");
        return;
    }

    let formElements = document.querySelectorAll('.container label, .container input, .container select, .container button, .container h2, .container h1, .container h3');
    formElements.forEach(element => {
        element.style.display = 'none';
    });

    // Display only the tip amount
    document.querySelector('.tip').style.display = 'block';

    if (noOfPeople === 1) {
        document.querySelector('#each').style.display = 'none';
        col.className = "column result";
    }
    else {
        document.querySelector('#each').style.display = 'block';
        col.className = "column result";
    }

    let total = (amount * service) / noOfPeople;
    total = total.toFixed(2);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
  
    let existingImage = document.getElementById('img1');
    let newImage = document.getElementById('img2');

    if (total > 0) {
        existingImage.style.display = 'none';
        newImage.style.display = 'block';
    }
}
  
  
