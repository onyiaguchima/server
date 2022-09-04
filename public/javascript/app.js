fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((result)=>{
    result.json().then((data)=>{
        console.log(data);
    })
});

const weatherform = document.querySelector("form");
weatherform.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e, "errorogram")
});