import logo from './logo.svg';
import './App.css';
const infos = [
  {txt: "MK", ico:"perm_identity"},
  {txt:"609081641", ico:"call"},
  {txt:"kozdrojmateusz86@gmail.com", ico:"mail"},
  {txt:"ul. ks. Fr. Koleboka", ico:"location_on"},
  {txt:"Usługi ślusarsko-spawalnicze", ico:"arrow_forward"},
  {txt:"spawanie MIG, MAT, TIG", ico:"arrow_forward"},
  {txt:"cięcie rur", ico:"arrow_forward"},
  {txt:"szlifowanie", ico:"arrow_forward"},
  {txt:"wiercenie", ico:"arrow_forward"},
]
const Smasher = ({ food }) => {
  return (
    <div className="wide-box">
      <i className="large material-icons oranger">{food.ico}</i>
      <p>{food.txt}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      {    infos.map(el=><Smasher food={el} /> )    }
    </div>
  );
}

export default App;
