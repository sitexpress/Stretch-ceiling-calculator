'use strict';

let selectMaterial = document.getElementById('material'),
    optionsSelector = document.getElementsByTagName('option'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    resultItem = document.getElementById('result-item'),
    expensesBtn = document.getElementsByTagName('button')[0]; 

let sum;


expensesBtn.addEventListener('click', function () {
    for (let i = 0; optionsSelector[i]; i++) {
    if (isNaN(expensesItem[0].value) || isNaN(expensesItem[1].value) || isNaN(expensesItem[2].value) || isNaN(expensesItem[3].value) || isNaN(expensesItem[4].value)) {

        resultItem.textContent = "Введите числовые данные ..."; 
        
        } else if (selectMaterial.value == "matt") {

            sum = +expensesItem[0].value*390 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;

        } else if (selectMaterial.value == "glossy") {
            
            sum = +expensesItem[0].value*400 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;
    
        } else if (selectMaterial.value == "satin" ) {
            
            sum = +expensesItem[0].value*400 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;

        } else if (selectMaterial.value == "cloth" ) {
            
            sum = +expensesItem[0].value*950 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;

        } else if (selectMaterial.value == "colorful" ) {
            
            sum = +expensesItem[0].value*450 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;

        } else if (selectMaterial.value == "photoprint" ) {
            
            sum = +expensesItem[0].value*1200 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;

        } else if (selectMaterial.value == "textured" ) {
            
            sum = +expensesItem[0].value*500 + +expensesItem[1].value*50 + +expensesItem[2].value*250 + +expensesItem[3].value*250 + +expensesItem[4].value*350;
            resultItem.textContent = sum + ' ₽';
            break;
        }

    }
});





