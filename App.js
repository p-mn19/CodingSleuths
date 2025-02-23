import Navbar from "./Navbar"
import CardA from "./Card1"
import CardB from "./Card2"
import CardC from "./Card3"
import CardD from "./Card4"
import CardE from "./Card5"
import CardF from "./Card6"
import CardG from "./Card7"
import CardH from "./Card8"
// import Order-Item from './card.jsx'

function App() {
  // return <h1>Web Dev Simplified</h1>   
  return (
    <div>
      <Navbar />
      <div className="frame">

      <div className="grid">
        <CardA />
        <CardB />
        <CardC />
        <CardD />
      </div>
      <div className="grid">
        <CardE />
        <CardF />
        <CardG />
        <CardH />
        </div>
      </div>
    </div>
  );
}

export default App;
