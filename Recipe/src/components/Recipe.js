import React from 'react';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h2 className="recipe-title">{recipe.name}</h2>
        <div className="recipe-meta">
          <span className="recipe-rating">
            ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
          </span>
          <span className="recipe-difficulty">{recipe.difficulty}</span>
        </div>
      </div>

      <div className="recipe-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="recipe-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/400x300?text=Recipe+Image';
          }}
        />
      </div>

      <div className="recipe-details">
        <div className="recipe-times">
          <div className="time-item">
            <span className="time-label">Prep</span>
            <span className="time-value">{recipe.prepTimeMinutes} min</span>
          </div>
          <div className="time-item">
            <span className="time-label">Cook</span>
            <span className="time-value">{recipe.cookTimeMinutes} min</span>
          </div>
          <div className="time-item">
            <span className="time-label">Servings</span>
            <span className="time-value">{recipe.servings}</span>
          </div>
          <div className="time-item">
            <span className="time-label">Calories</span>
            <span className="time-value">{recipe.caloriesPerServing}/serving</span>
          </div>
        </div>

        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
          <span className="cuisine-tag">{recipe.cuisine}</span>
        </div>

        <div className="recipe-section">
          <h3 className="section-title">Ingredients</h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3 className="section-title">Instructions</h3>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="instruction-item">
                {instruction}
              </li>
            ))}
          </ol>
        </div>

        <div className="recipe-meal-types">
          {recipe.mealType.map((type, index) => (
            <span key={index} className="meal-type">{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;