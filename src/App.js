import "./App.css";
import Card from "./Components/Card/Card";
import fetchItems from "./services/fetchItems"



function App() {
  
  const item=fetchItems();
  
  return (
    <div className="container">
      <div className="row">
        {
          item.map(({titulo,img,text,price,url,oferta})=>
              <Card
                titulo={titulo}
                img={img}
                text={text}
                price={price}
                linkBtn={url}
                oferta={oferta}
                />
          )
        }
      </div>      
    </div>
  );
}

export default App;
