  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import './App.css';
  
  function App() {
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then(response => {
          if (!response.data) {
            throw new Error('No data received');
          }
          setPokemonList(response.data.results);
        })
        .catch(error => {
          console.error('Axios error:', error);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Pokémon List</h1>
        <ol>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default App;
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setPokemonList(data.results);
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setPokemonList(data.results);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//       });
//   }, []);
  

//   return (
//     <div className="App">
//       <h1>Pokémon List</h1>
//       <ol>
//         {pokemonList.map((pokemon, index) => (
//           <li key={index}>{pokemon.name}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default App;
