import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import MovieDetail from './components/MovieDetail.jsx'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path= '/'><Home /></Route>
          <Route path='/:id'><MovieDetail /></Route>
          {/* <Route exact path= '/home' component= {Home} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// const API_KEY = process.env.REACT_APP_API_KEY

// const App = () => {
  
//   const [items, setItems] = useState([]);
//   const [query, setQuery] = useState('');
//   const [filter, setFilter] = useState(10);
  
//   useEffect(() => {
//     fetchMovies()
//     .then(data => {
//       setItems(data);
//     })
//   }, [])
  
//   const movies = Object.values(items);
//   console.log(movies)

//   const search = movies => {
//     console.log(filter)
//     return movies.filter(m => 
//       m.vote_average <= Number(filter) && m.original_title.toLowerCase().includes(query))
//   }
  
//   const checked = () => {
//     if (document.getElementById('one').checked === true) {
//       setFilter(2)
//     }
//     if (document.getElementById('two').checked === true) {
//       setFilter(4)
//       document.getElementById('one').checked = true

//     }
//     if (document.getElementById('three').checked === true) {
//       setFilter(6)
//       document.getElementById('one').checked = true
//       document.getElementById('two').checked = true
//     }
//     if (document.getElementById('four').checked === true) {
//       setFilter(8)
//       document.getElementById('one').checked = true
//       document.getElementById('two').checked = true
//       document.getElementById('three').checked = true
//     }
//     if (document.getElementById('five').checked === true) {
//       setFilter(10)
//       allChecked();
//     }
//   }

//   // const allUnchecked = () => {
//   //   document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
//   // }
//   const allChecked = () => {
//     document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = true);
//   }

//   // const fetchMovies = async () => {
//   //   const api = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
//   //   const moviesApi = await api.json();
//   //   setItems(moviesApi.results)
//   // }
  
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Movie SPA</h1>
//         <input 
//           type='search' 
//           placeholder='Search Movie'
//           onChange={e => setQuery(e.target.value)}
//         />
//         <br/>
//         <label><input onChange={checked} type="checkbox" id='one'></input>*</label>
//         <label><input onChange={checked} type="checkbox" id='two'></input>**</label>
//         <label><input onChange={checked} type="checkbox" id="three"></input>***</label>
//         <label><input onChange={checked} type="checkbox" id="four"></input>****</label>
//         <label><input onChange={checked} type="checkbox" id="five"></input>*****</label>
//         <br/>
//         {
//           search(movies).map(movie => {
//             return(
//             <div>
//               <Link to={'/'+ movie.id}><img style={{width: '200px'}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='img not found'/></Link>
//             </div>
//             )
//           })
//         }
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
