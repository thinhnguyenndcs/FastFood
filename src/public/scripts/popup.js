const number="modal-q-num";
const foodimg="modal-food-img";
const foodname1="modal-food-name";
const foodname2="modal-food-name-2";
const foodprice="modal-food-price";
function modalQadd(){
    var num=parseInt(document.getElementById(number).innerText);
    document.getElementById(number).innerText=num+1;
}
function modalQsub(){
    var num=parseInt(document.getElementById(number).innerText);
    if (num>0){
        document.getElementById(number).innerText=num-1;
    }   
    
}

function openModal(image,foodName,Price){
    $("#foodModal").modal("show");
    
    const foodImgElement=document.getElementById(foodimg);
    const foodName1Element=document.getElementById(foodname1);
    const foodName2Element=document.getElementById(foodname2);
    const foodPriceElement=document.getElementById(foodprice);
    foodImgElement.src=image;
    
    foodName1Element.innerText=foodName;
    foodName2Element.innerText=foodName;
    foodPriceElement.innerText=Price;
}


// ----------------------Khoi-----------------
