import React from 'react'
import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs } from './Pages/index';
import { useTranslation } from 'react-i18next';



function App() {

  const { t } = useTranslation()

  const navigation = [
    {
      name: t('header.navbar.about_us'),
      url: "About"
    },
    {
      name: t('header.navbar.services'),
      url: "Services"
    },
    {
      name: t('header.navbar.projects'),
      url: "PreviousProjects"
    },
    {
      name: t('header.navbar.contact_us'),
      url: "Contacts"
    }
  ]

  return (
    <Router>
      <div className="App">
        <Header arrNav={navigation} />
        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer arrNav={navigation} />
      </div>
    </ Router>
  );
}

export default App;
