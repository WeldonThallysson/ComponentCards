
import './App.css'
import Card from './Component/Card'
import Title from './Component/Title'
import Button from './Component/Button'
function App() {


  return (
    <>
      <div className='Container__Main'>
        <section>
          <Title />
        </section>
        <section className='container__Cards'>
          <Card />
        </section>
        <Button />
      </div>
    </>
  )
}

export default App
