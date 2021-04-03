import Dashbord from './views/Dashbord';
import NewBook from './views/NewBook';
import WelcomePage from './views/WelcomePage';
import AddPerson from './views/AddPerson'
import NewAssign from './views/NewAssign'
import PersonsPage from './views/PersonsPage'
import BooksPage from './views/BooksPage'
import { Router } from '@reach/router';


function App() {

  return (
    <div>
      <Router>
        <WelcomePage path="/"/>
        <Dashbord path="/Dashboard"/>
        <NewBook path="/book/new"/>
        <AddPerson path="/person/new"/>
        <NewAssign path="/assign/new"/>
        <PersonsPage path='/person'/>
        <BooksPage path='/book'/>
      </Router>
    </div>
  );
}

export default App;
