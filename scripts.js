class Cat{
    constructor(catName,humanName,phone,email,catType,catFood,catSex){
        this.catName = catName;
        this.humanName = humanName;
        this.phone = phone;
        this.email = email;
        this.catType = catType;
        this.catFood = catFood;
        this.catSex = catSex;
    }
}

const catNameID = document.getElementById('catNameID');
const humanNameID = document.getElementById('humanNameID');
const phoneID = document.getElementById('phoneID');
const emailID = document.getElementById('emailID');
const catTypeID = document.querySelectorAll('option');
const catFoodID = document.querySelectorAll('input[type=checkbox]');
const catSexID = document.querySelectorAll('input[type=radio]');

const buttonID = document.getElementById('buttonID');

buttonID.addEventListener('click', function(){
    alert('hi');

    let type = 'Unknown';
    for (let i = 0; i < catTypeID.length; i++){
        if(catTypeID[i].selected){
            type = catTypeID[i].textContent;
        }
    }

    let sex = 'Не указан';
    if (catSexID[0].checked){
        sex = 'Мальчик'
    }
    if (catSexID[1].checked){
        sex = 'Девочка'
    }

    let food = [];
    if (catFoodID[0].checked){
        food.push('Сухой корм')
    }
    if (catFoodID[1].checked){
        food.push('Влажный корм')
    }
    if (catFoodID[2].checked){
        food.push('Натуральный корм')
    }

    let cat = new Cat(catNameID.value, humanNameID.value,phoneID.value,emailID.value,type,food,sex);

    console.log(cat.catName);
    console.log(cat.humanName);
    console.log(cat.phone);
    console.log(cat.email);
    console.log(cat.catType);
    console.log(cat.catFood);
    console.log(cat.catSex);
});