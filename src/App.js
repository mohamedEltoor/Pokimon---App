import logo from './logo.svg';
import './App.css'; 
import {useState,useEffect} from 'react'
import axios from 'axios';
import PokemonList from './components/PokemonList.js'
import Pagination from './components/Pagination.js'
function App() {
  const [pokemon,setPokemon] = useState([]);
  const [loading,setLoading]  = useState(true);
  const [currentPageUrl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl,setNextPageUrl] = useState();
  const [prevPageUrl,setPrevPageUrl] = useState();
  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
    .get(currentPageUrl,{
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
    .then(
      (response) => {setPokemon(response.data.results.map((p)=> p.name))
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
      })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
    return () =>{
      cancel();
    }
  },[currentPageUrl]);
  if (loading) return <p>Loading...</p>
  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }
  return (
    <div className="App">
      <PokemonList pokemon={pokemon}/>
      <Pagination goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null}/>
    </div>
  );
}

export default App;

/*
rsync -av --progress --exclude=node_modules --delete ~/storage/shared/pokemon-app/ ~/pokemon-app/
cd ~/pokemon-app
npm install
npm start
*/
 