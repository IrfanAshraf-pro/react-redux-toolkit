import './App.css';
import CakeContainer from './features/cake/CakeContainer'
import IceCreamContainer from './features/icecream/IceCreamContainer'
import UserContainer from './features/user/UserContainer'



function App() {
  return (
    <div className="App">
      Redux toolkit
      <CakeContainer />
      <IceCreamContainer />
      <UserContainer/>
    </div>
  );
}

export default App;
