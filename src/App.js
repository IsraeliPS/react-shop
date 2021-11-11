import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          titulo="Michi Aplicación"
          img="https://cdn7.kiwilimon.com/recetaimagen/24601/1900x1080/19545.jpg.webp"
          text="Lleve sus tamales calientitos"
          linkBtn="https://kodemia.mx"
        />
      </div>
    </div>
  );
}

export default App;
