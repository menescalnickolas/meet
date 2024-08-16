
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { mockData } from './mock-data';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList events={mockData}/>
      <NumberOfEvents />
    </div>
  );
}

export default App;
