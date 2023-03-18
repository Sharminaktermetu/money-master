const food = document.getElementById('food');
const rent =document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpnse =document.getElementById('total-expenses');
const income =document.getElementById('income');
const balance =document.getElementById('balance');
const percent = document.getElementById('percent');
const saveAmount = document.getElementById('saving-amount');
const remaining = document.getElementById('remaining');
document.getElementById('calc-btn').addEventListener('click',function(){
 const foodValue= parseFloat(food.value);
 const rentValue= parseFloat(rent.value);
 const clothValue= parseFloat(clothes.value);
 const incomeValue =parseFloat(income.value);
 const total=foodValue+rentValue+clothValue;
    totalExpnse.innerText=total;
    balance.innerText= incomeValue-total;



})

document.getElementById('save').addEventListener('click', function(){
    const percentValue =parseFloat(percent.value);
    const incomeValue =parseFloat(income.value);
    const save = (incomeValue*percentValue) / 100;
    saveAmount.innerText=save;
    remaining.innerText=parseFloat(balance.innerText)-save;
})