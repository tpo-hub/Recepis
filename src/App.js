import React,{useEffect, useState} from "react";
import "./App.css"
import Recipes from "./Recipes";

function App() {

  const App_Id = "f3fa8860";
  const Api_key = "aaa22c29f15208a3a6e020bbffed64eb	";
  
          const GetRecipes = async ()=>{
          const Response = await fetch(`https://api.edamam.com/search?q=${Submmit}&app_id=${App_Id}&app_key=${Api_key}`)
          const data = await Response.json();
          setRecepes(data.hits)
        }
    
        const UpdateSearch = e=> {
            setSearch(e.target.value)
          }
          
          const GetSearch = e=> {
            e.preventDefault();
            setSubmmit(Search);
            setSearch(" ")
        }

  const [recipes, setRecepes] = useState([]);

  const [counter, setCounter] = useState(0);

  const [Search, setSearch] = useState(" ");

  const [Submmit, setSubmmit] = useState(' ');

  useEffect(async ()=>{
    GetRecipes();
    
  },[Submmit])   

  return (
    <div className="App">
     <form className="search-form" onSubmit={GetSearch }>
       <input className="search-bar" type="text" value={Search} onChange={UpdateSearch} />
       <button className="search-button" type="submit">Search</button>
     </form>
      {recipes.map( r => (<Recipes Ingredients={r.recipe.ingredients} Title={r.recipe.label} Calories={r.recipe.calories} img={r.recipe.image} Key={r.recipe.label} />))}
    </div>
  );
}

export default App;
