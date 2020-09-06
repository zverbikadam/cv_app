import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserInfo from './components/UserInfo/UserInfo';
import { useLanguageUpdate, useLanguage } from './Context/LanguageContext';
import User from './data/user-data.json';


function App() {
  const enLanguage = useLanguage()
  const toggleLanguage = useLanguageUpdate();

  let user_data = enLanguage ? User.en : User.sk;

  return (
    <div className="App">
      <header className="App-header">
        <UserInfo user={user_data}/>
        <button onClick={toggleLanguage}>{enLanguage ? "English" : "Slovenský"}</button>
      </header>
      <main>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </main>
    </div >
  );
}

export default App;
