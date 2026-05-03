import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import About from "./pages/About/About.jsx";
import Main from "./pages/Main/Main.jsx";

export default function App() {
  return (
      <div>
          <Header />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="/main" element={<Main />} />
          </Routes>
      </div>
  )
}