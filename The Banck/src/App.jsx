import './App.css';
import Table from './components/Table';

function App() {
  return(
    <>
      <div className="header-container bg-purple text-white py-3">
        <div className="container">
          <h1 className="text-center">The Royal Bank Of Flatiron</h1>
        </div>
      </div>
      <div className='container'>
        <Table/>
      </div>
    </>
  )
}

export default App;
