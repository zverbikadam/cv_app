import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserInfo from './components/UserInfo/TheHeader';
import { useLanguage, LanguageProvider } from './Context/LanguageContext';
import User from './data/user-data.json';
import TheNavigation from './components/TheNavigation/TheNavigation';
import TheHome from './views/TheHome/TheHome';
import TheEducation from './views/TheEducation/TheEducation';
import TheProjects from './views/TheProjects/TheProjects';
import TheSkills from './views/TheSkills/TheSkills';


function App() {
  const enLanguage = useLanguage()

  let user_data = enLanguage ? User.en : User.sk;

  return (
    <div className="App">
      <LanguageProvider>
        <header className="App-header">
          <UserInfo user={user_data} />
          <TheNavigation />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <TheHome />
            </Route>
            <Route path="/education">
              <TheEducation />
            </Route>
            <Route path="/projects">
              <TheProjects />
            </Route>
            <Route path="/skills">
              <TheSkills />
            </Route>
          </Switch>
        </main>
      </LanguageProvider>
    </div >
  );
}

export default App;
