import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loadmore, setLoadMore] = useState(3);
  const getRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    setRecipes(data.recipes);
  }
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div>
      <div className="app">
        {recipes.slice(0, loadmore).map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <button
        onClick={() => setLoadMore(loadmore + 3)}
        style={{ display: 'flex', justifySelf: 'center', margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Load More
      </button>
    </div>

  );
}

export default App;