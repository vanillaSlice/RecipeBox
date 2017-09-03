// import React from 'react';
// import PropTypes from 'prop-types';

// import RecipeCard from '../RecipeCard/RecipeCard';

// import './RecipeList.css';

// const getRows = (recipes) => {
//   const rows = [];
//   recipes.forEach((recipe, index) => {
//     let row;
//     if (index % 3 === 0) {
//       row = [];
//       rows.push(row);
//     } else {
//       row = rows[Math.floor(index / 3)];
//     }
//     row.push( (<RecipeCard key={index}
//       name={recipes[index].name}
//       image={recipes[index].image}
//       onClick={() => {this.setState({selectedRecipe: this.state.recipes[index]}); this.handleCardClick();}} />)
//         );
//   });
//   return rows;
// };

// const RecipeList = (props) => {
//   return (
//     <div className="RecipeList">
//                 {this.getRows().map((row, index) => 
//             (<div className="row" key={index}>{row}</div>)
//           )}
//     </div>
//   );
// };

// RecipeList.propTypes = {
//   recipes: PropTypes.array
// };

// export default RecipeList;
