import Header from './components/Header';
import Entry from './components/Entry';
import './App.css';
import data from './data';
function App() {
  return (
     <div className='container'>
      <Header />
      {data.map((d)=>(
      <Entry key={d.id} 
      d={d}/>
      ))}
      </div>
  );
};
export default App;
