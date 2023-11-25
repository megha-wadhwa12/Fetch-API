let params = new URLSearchParams(window.location.search)
let id = params.get("id");
console.log(id);

async function getDetails(){
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try{
        const response = await axios.get(url2);
        const data = await response.data.drinks[0];
        console.log(data)

        let ingredients = [
            data.strIngredient1,
            data.strIngredient2,
            data.strIngredient3,
            data.strIngredient4,
            data.strIngredient5,
            data.strIngredient6,
            data.strIngredient7,
            data.strIngredient8,
            data.strIngredient9,
            data.strIngredient10,
            data.strIngredient11,
            data.strIngredient12,
            data.strIngredient13,
            data.strIngredient14,
            data.strIngredient15
        ]
        console.log(ingredients)

        const arr = ingredients.filter((e)=> e != null)
            
            let output=`<img src="${data.strDrinkThumb}" alt="" id="drinksImage"> 
            <div id="details">
            <p id="namesection">NAME:  <span id="names">${data.strDrink}</span></p>
            <p id="infosection">INFO:  <span id="info">${data.strAlcoholic}</span></p>
            <p id="categorysection">CATEGORY:  <span id="category">${data.strCategory}</span></p>
            <p id="glasssection">GLASS:  <span id="glass">${data.strGlass}</span></p>
            <p id="instructionsection">INSTRUCTION:  <span id="instructions">${data.strInstructions}</span></p>
            <p id="ingredientssection">INGREDIENTS:  <span id="ingredients">${arr}</span></p>`
            document.querySelector("#card").innerHTML = output;


    } catch(err){
        console.log(err)
    }
  }

  getDetails()

  document.querySelector("#goback").onclick = ()=>{
    window.location.href = "./index.html";
  }

