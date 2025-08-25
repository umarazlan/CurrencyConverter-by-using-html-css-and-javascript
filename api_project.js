    const URL='';//use your own api

    const dropdowns=document.querySelectorAll(".dropdown select");
    const btn=document.querySelector("form button");
    const fromCurr=document.querySelector(".from select");
    const toCurr=document.querySelector(".to select");
    const msg=document.querySelector(".msg");

    for(let select of dropdowns ){
        for(currCode in countryList){
            let newOption=document.createElement("option");
            newOption.innerText=currCode;
            newOption.value=currCode;
            select.append(newOption);
            if(select.name === "from" && currCode === "USD"){
                newOption.selected="selected";
            }else if(select.name === "to" && currCode === "PKR"){
                newOption.selected="selected";
            }
            select.append(newOption);
            }
            select.addEventListener("change",(event) => {
                updateFlag(event.target);
            });
        }  
    const updateFlag=(element)=>{
    let currCode=element.value;
    let countrycode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;

    }

    btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === 0 || amtVal < 1){
    amtVal = 1;
    amount.value = "1";

    }
    //console.log(fromCurr.value.toUpperCase(), toCurr.value.toUpperCase());
    //  const newUrl = `${URL}/${fromCurr}/${toCurr}.json`;
    const newUrl = ``;//use your own api

    let response = await fetch(newUrl);
    let data=await response.json();
    let rate = data.conversion_rate;

    
    let finalAmount=amtVal*rate;  
    msg.innerText=`${amtVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;



    });
