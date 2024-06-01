function handleProductChange(product ,isIncrease){
    // const productInput = document.getElementById(product + '-count');
    // const productCount = parseInt(productInput.value);
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if(isIncrease == true  ){
        productNewCount = productCount + 1;
    }
    else if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    // productInput.value = productNewCount;
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    else if(product == 'case'){
        productTotal = productNewCount * 50;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}



function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    // const caseCount = parseInt(phoneInput.value);
    
    const totalPrice = phoneCount * 1219 + caseCount * 50
    document.getElementById('total-price').innerHTML = '$' + totalPrice ;
     
    const tex =Math.round(totalPrice * 0.1);
    document.getElementById('tex-amount').innerHTML = '$' + tex;

    const grandTotalPrice = totalPrice + tex;
    document.getElementById('grand-total').innerHTML = '$' + grandTotalPrice;

}
 
function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}



















//iphone proudct through

// function phoneProductChange(isIncrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true  ){
//         phoneNewCount = phoneCount + 1;
//     }
//     else if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }
// phoneProductChange(true);
// phoneProductChange(false);







// document.getElementById('caseIncrige').addEventListener('click',function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount  = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 50;
//     document.getElementById('case-total').innerText='$' + caseTotal;
// })
// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount  = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 50;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })



// dui vab a kora jay 
//phone case 

// function handleProductChange(isIncrease){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrease == true  ){
//         caseNewCount = caseCount + 1;
//     }
//     else if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 50;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// }
// handleProductChange(true);
// handleProductChange(false);