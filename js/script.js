let serialNumber=1;
const formSubmit=document.querySelector("#form");
formSubmit.addEventListener('submit',(e)=>{
     e.preventDefault();
    console.log("dkdk");
    const foodCount=document.querySelectorAll('input[type="radio"]');
let count=0;


foodCount.forEach((radio)=>{
    if(radio.checked){
        count++;
    }
})
if(count<3){
    alert("Choose minimum 2 foods");
    // e.preventDefault();
}
else{
     const userData=document.getElementById("myTable");
     const newRow=userData.insertRow();
    const Sno=newRow.insertCell(0)
    const firstname=newRow.insertCell(1);
    const lastname=newRow.insertCell(2);
    const email=newRow.insertCell(3);
    const address=newRow.insertCell(4);
    const pincode=newRow.insertCell(5);
    const gender=newRow.insertCell(6);
    const food=newRow.insertCell(7);
    const state=newRow.insertCell(8);
    const country=newRow.insertCell(9);

    const selectedFoodsArr=document.querySelectorAll("#foods");
   let selectedFoods=[],i=0;
    for(const index of selectedFoodsArr){
            if(index.checked){
                selectedFoods[i]=index.value;
                i++;
            }
    }
    console.log(selectedFoods)
     Sno.innerHTML=serialNumber;
     serialNumber++;
    firstname.innerHTML=document.getElementById("first-name").value;
     lastname.innerHTML=document.getElementById("last-name").value;
      email.innerHTML=document.getElementById("email").value;
      address.innerHTML=document.getElementById("address").value;
      pincode.innerHTML=document.getElementById("pincode").value;
      gender.innerHTML=document.querySelector('input[name="gender"]:checked').value;
     food.innerHTML=selectedFoods;
      state.innerHTML=document.getElementById("state").value;
      country.innerHTML=document.getElementById("country").value;
    formSubmit.reset();
     
}

})
