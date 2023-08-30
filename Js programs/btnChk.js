document.getElementById("submitbtn").onclick = function () {
    const myCheckbox = document.getElementById("mycheckbox");
    const myVisaBtn = document.getElementById("visabtn");
    const myMasterCardBtn = document.getElementById("mastercardbtn");
    const myPayPalBtn = document.getElementById("paypalcardbtn");
  
    if (myCheckbox.checked) {
      console.log("You are subscribed!");
    } else {
      console.log("You are not subscribed!");
    }
  
    if (myVisaBtn.checked) {
      console.log("You are paying with a Visa!");
    } else if (myPayPalBtn.checked) {
      console.log("You are paying with PayPal!");
    } else if (myMasterCardBtn.checked) {
      console.log("You are paying with MasterCard!");
    } else {
      console.log("Please select a payment method!");
    }
  };
  