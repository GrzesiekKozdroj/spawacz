import './App.css';
const infos = [
  {txt:"Mateusz Kozdrój", ico:"perm_identity"},
  {txt:"609081641", ico:"call", kalbak:(num)=>window.open(`tel:${num}`, '_self')},
  {txt:"kozdrojmateusz86@gmail.com", ico:"mail", linker:`"mailto: kozdrojmateusz86@gmail.com"`},
  {txt:"ul. ks. Fr. Koleboka", ico:"location_on"},
  {txt:"Usługi ślusarsko-spawalnicze", ico:"arrow_forward"},
  {txt:"spawanie MIG, MAT, TIG", ico:"arrow_forward"},
  {txt:"cięcie rur", ico:"arrow_forward"},
  {txt:"szlifowanie", ico:"arrow_forward"},
  {txt:"wiercenie", ico:"arrow_forward"},
]
const Smasher = ({ food }) => {
  return (
    <div className="wide-box" onClick={ food.kalbak ? ()=>food.kalbak(food.txt) : () => null }>
      <i className="large material-icons oranger">{food.ico}</i>
      {
        food.linker ? 
          <a href={food.linker} >
            <p>{food.txt}</p>
          </a> : <p>{food.txt}</p>
      }
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-center-box">
          <div className="header-dummy">
            MK
            <div className="white-line">KOZDRÓJ</div>
          </div>
        </div>
      </div>
      {    infos.map(el=><Smasher food={el} /> )    }
    </div>
  );
}

export default App;
