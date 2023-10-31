import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import Pricing from "./components/Pricing";
import Hospitals from "./components/Hospitals";
import Labs from "./components/Labs";
import UrgentCare from "./components/UrgentCare";
import Doctors from "./components/Doctors";
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function App() {

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path])

  return (
    <div className="font-montserrat relative">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutUs/>} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/terms" element={<TermsAndConditions />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/hospitals" element = {<Hospitals />} />
        <Route exact path="/labs" element = {<Labs />} />
        <Route exact path="/urgentcare" element = {<UrgentCare />} />
        <Route exact path="/specialities" element = {<Doctors />} />
        <Route exact path="/doctors" element = {<Doctors />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
