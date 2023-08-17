//step-01: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('deposit button clicked')
    // step-02: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //console.log(depositAmount);

    //step-7
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    //step-03: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //step-04: add numbers to set the total deposit
    currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step-05: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-06: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    //step-07: clear the deposit field
    //depositField.value = ''; 
})