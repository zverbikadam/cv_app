import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TheHeader from './components/TheHeader/TheHeader';
import { LanguageProvider } from './Context/LanguageContext';
import User from './data/user-data.json';
import TheNavigation from './components/TheNavigation/TheNavigation';
import TheHome from './views/TheHome/TheHome';
import TheEducation from './views/TheEducation/TheEducation';
import TheProjects from './views/TheProjects/TheProjects';
import ContactInfo from './views/ContactInfo/ContactInfo';


function App() {
  const user_name = { firstname: User.firstname, surname: User.surname };


  return (
    <div className="App">
      <LanguageProvider>
        <header className="App-header">
          <TheHeader user={user_name} />
          <TheNavigation />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <TheHome />
            </Route>
            <Route path="/cv/education">
              <TheEducation />
            </Route>
            <Route path="/projects">
              <TheProjects />
            </Route>
            <Route path="/contact">
              <ContactInfo />
            </Route>
          </Switch>
        </main>
      </LanguageProvider>
    </div >
  );
}

export default App;
