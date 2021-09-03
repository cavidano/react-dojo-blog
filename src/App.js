
import Navbar from './Navbar';
import Home from './Home';

const App = () => {

  const title = 'Welcome to the new blog';
  const liked = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;