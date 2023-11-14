import './App.css'

export default function App() {

  return (
    <div className='card-main'>
      <div className='card-imagem-main'>
        <img src='img/equilibrium.jpg' />
      </div>

      <h3>Equilibrium #3429</h3>

      <p>
        Our equilibrium collection promotes
        balance and calm.
      </p>

      <div className='card-dates'>
        <span><img src="img/icon-ethereum.svg" alt="" />0.041ETH</span>
        <p>3 days left</p>
      </div>

      <div className='line'></div>
      
      <div className='card-person'>
        <img src="img/avatar.png"/>
        <p><span>Creation of</span> Jules Wyvern</p>
      </div>
    </div>
  )
}


