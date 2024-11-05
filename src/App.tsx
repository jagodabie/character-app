import './App.css';
import { CharacterForm } from './components/CharacterForm/CharacterForm';
import { CharacterProvider } from './providers/CharacterProvider';
import { Map } from './components/Map/Map';
export const App = () => {
  return (
    <CharacterProvider>
      <div className="app">
        <CharacterForm />
        <Map />
      </div>
    </CharacterProvider>
  );
};
