
import Navbar from './Navbar';
import Home from './Home';

const App = () => {

  const title = 'Welcone to the new blog';
  const liked = 50;

  return (
    <div className="App">
      <div className="content">
      <Navbar />
        <h1>{title}</h1>
        <p>Liked {liked} times.</p>
        <Home />
      </div>
    </div>
  );
}

export default App;