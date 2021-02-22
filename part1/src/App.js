import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}


const App = ()  => {
  const mensaje = 'Hola'
  return (
    <div className="App">
      <Mensaje msj='Estamos trabajando' />
      <Mensaje msj='En un curso'/>
      <Mensaje msj='de react' />
      <Description />
    </div>
  );
}

export default App;
