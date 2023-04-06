import './App.css';


const App = () => {
    
const getValue = () =>{

    let value = document.getElementById('name').value;
    document.getElementById('result').innerHTML = 'Bem vindo, ' + value + '!';
    let inp = document.getElementById('name');
    inp.style.display = 'none';

}

const removeValue = () => {
    document.getElementById('name').value = "";
    document.getElementById('result').innerHTML = "";
    let inp = document.getElementById('name');
    inp.style.display = 'block';
}

return(
<div>
    <section id="inicio"><img
      src="/img/livro.png"
      alt="imagem estudo" width="83%" height="250px" />
    <div className="content">
      <h1 className="title">Página de boas vindas</h1>
      <h2 className="subtitle" id="result"></h2>
      <input placeholder="seu nome" name="name" id="name" />
      <button onClick={getValue} className="primary">Entrar</button>
      <button onClick={removeValue} className="secondary">Sair</button>
    </div>
  </section>

</div>

)
}

export default App;