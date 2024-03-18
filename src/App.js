import logo from './logo.svg';
import './App.css';
import SingleLine from './components/charts/singleLine/SingleLine';
import SubCat from './components/SubCat';
import FundDestribution from './components/FundDestribution';
import Card from './components/ui/Card';
import TopSectors from './components/TopSectors';

function App() {

  return (
    <div className="App pt-20 pb-10 pl-10 pr-10">
      <div className='flex'>
        <div className='pl-4 pr-4'>
          <Card>
            <SubCat />
          </Card>
        </div>
        <div className='pl-4 pr-4'>
          <Card>
            <FundDestribution />
          </Card>
        </div>
        <div className='pt-4 pl-4 pr-4'>
          <Card>
            <TopSectors />
          </Card>
        </div>
      </div>
    </div>

  );
}

export default App;
