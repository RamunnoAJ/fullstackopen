import './App.css'
import Mensaje from './Mensaje'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje message='Estamos trabajando' color='red' />
      <Mensaje message='En un curso' color='blue' />
      <Mensaje message='De React' color='green' />
      <Description />
    </div>
  )
}

export default App
