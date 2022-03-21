
const btnSwitch = document.querySelector("#customSwitch1");

const priceBasic = document.querySelector("#price-basic");
const priceProfessional = document.querySelector("#price-professional");
const priceMaster = document.querySelector("#price-master");

btnSwitch.addEventListener("click", changePrice);

function changePrice(){
    if(btnSwitch.checked == true){
        priceBasic.innerHTML = `${199.99}`;
    } else {
        priceBasic.innerHTML = `${19.99}`;
    }

    if(btnSwitch.checked == true){
        priceProfessional.innerHTML = `${249.99}`;
    } else {
        priceProfessional.innerHTML = `${24.99}`;
    }

    if(btnSwitch.checked == true){
        priceMaster.innerHTML = `${399.99}`;
    } else {
        priceMaster.innerHTML = `${39.99}`;
    }
}