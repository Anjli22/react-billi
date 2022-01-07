
import './App.css';
import Body from './compontents/Body';
import Navbar from './compontents/Navbar';
import footer from './images/footer.jpg';

function App() {
  return (
    <>
     <Navbar/>
     <Body/>
     <div><img style={{width:'100%'}}src={footer} alt="footer"/></div>
     
    </>
  );
}

export default App;
