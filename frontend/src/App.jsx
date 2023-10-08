import { useState  , useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [jokes, setstateJokes] = useState([]);

  useEffect(() => {
        axios.get('/api/jokes')
        .then((response) => {
          setstateJokes(response.data)
        })
        .catch((e) => {
          console.log(e)
          // Error showing cross origin : Cross Origin (CORS) url and part should same
        })
  })

  return (
    <>
      <h1>Hello Saquib Abbas on Frontend</h1>
      <p>JOKES : {jokes.length}</p>
      {jokes.map((joke) => 
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
    )}
    </>
  );
}

export default App;
