
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Information about me</h1>
      <p>FIO:Alkeyeva Nargiz Asylkhanovna</p>
      <p>My contact:8701-121-45-67</p>
      <p>My email:alkeeva.n@icloud.com</p>
    <h1>Information about my city</h1>
    <p>City name:Astana</p>
    <p>Country name:Kazakhstan</p>
    <p>Year of foundation:December 16, 1991</p>

    <h2>Достопримечательности города</h2>
    <div className="city-images">
      <img src="/city-images/firstimage.jpeg" alt="Достопримечательность " />
      <h1>Apple Pie Recipe</h1>
          <h2>Ingredients:</h2>
          <ul>
          <li>Apples - 4 pcs.</li>
            <li>Sugar - 1/2 cup</li>
            <li>Flour - 2 cups</li>
            <li>Oil - 100 g</li>
            <li>Soda - 1 teaspoon</li>
          </ul>
          <h2>Cooking sequence:</h2>
          <ol>
            <li>Prepare the apples, cut them into cubes.</li>
            <li>In a deep bowl, mix flour, sugar and soda.</li>
            <li>Add butter and knead the dough.</li>
            <li>Divide the dough into two parts, roll one of them into shape.</li>
            <li>Put chopped apples on the dough.</li>
            <li>Roll out the second part of the dough and cover the apples with it.</li>
            <li>Bake in the oven at 180 degrees Celsius for 40-45 minutes.</li>
          </ol>
    </div>
  </div>
  );
}

export default App;