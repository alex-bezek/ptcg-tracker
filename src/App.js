import './App.css';
import data from './data/data.json'

const totalValue = data.reduce((accum, card) => accum + card.price, 0).toFixed(2)
const sortedData = data.sort((x, y) => x.price > y.price ? -1 : 1 )

const App = () => (
  <main>
    <div>
      <h1> Total Value: ${totalValue} </h1>
    </div>
    <div className="cards">
      {
        sortedData.map(card => {
          return (
            <div className='card'>
              <h1>{card.name}</h1>
              <img src={card.image}></img>
              <p>Price: $
                <a href={`https://mavin.io/search?q=${card.query}`} target='_blank'>
                  { card.price }
                </a>
              </p>
              <p>Series: {card.series}</p>
              <p>Set: {card.set}</p>
              <p>Number: {card.number}</p>
            </div>
          )
        })
      }
    </div>
  </main>
);



export default App;
