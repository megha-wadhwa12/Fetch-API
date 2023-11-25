async function fetchData(cocktailName = "Margarita"){

    const url1 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

    try{
        const response = await axios.get(url1);
        const data = await response.data.drinks;
        console.log(data)
        document.querySelector("#grid").innerHTML="";
        data.forEach((i) => {
            let output= `<div id="section">
            <img src="${i.strDrinkThumb}" alt="image" id="drinksImage">
            <p id="name">${i.strGlass}</p>
            <p id="glass">${i.strDrink},${i.strIngredient2}</p>
            <p id="alcoholic">${i.strAlcoholic}</p>
            <button id="${i.idDrink}" class="details">Details</button>`;
            document.querySelector("#grid").innerHTML += output;
        });

        let detailsButton = document.getElementsByClassName("details");
        for(i of detailsButton){
            i.addEventListener("click", (e)=>{
                let id = e.target.id;
                console.log("id: ", id);
                
                window.location.href = `./details.html?id=${id}`

            })
        }

        }catch(err){
        console.log(err)
    }
}

fetchData()
// fetchData("Kiwi Martini")

document.querySelector('#searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let cocktailName = document.querySelector('#inputForm').value;
    console.log(cocktailName);
    if (cocktailName == '') {
      fetchData();
    } else {
      fetchData(cocktailName);
    }
  });


