import './App.css';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const name = "Cristiano Idelfonso da Silva";
  const newName = name.toUpperCase();

  const url300x300 = "https://via.placeholder.com/300";
  const url150x150 = "https://via.placeholder.com/150";
  const url75x75 = "https://via.placeholder.com/75";
  
  return (
    <div className="App">
      <HelloWorld />
      
      <SayMyName nome={name} />

      <Pessoa nome={name} idade="36" profissao="Estudante" foto={`${url150x150}.png/bcbcbc/FFFFFF/?text=Foto Perfil`} />

      <List />

      <h2>{name}</h2>
      <h2>{newName}</h2>
      <h3>Estou aprendendo React</h3>
      <img src={url300x300} alt="Imagem"/><br />
      <img src={url150x150} alt="Imagem"/><br />
      <img src={url75x75} alt="Imagem"/><br />
    </div>
  );
}

export default App;
