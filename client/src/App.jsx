
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Marketplace from "./pages/Marketplace";
import LearningAndAwareness from "./pages/LearningAndAwareness";
import AboutUs from "./pages/AboutUs";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Community from "./pages/Community";
import Contact from "./pages/ContactAndSupport";
import Login from "./pages/Login";
import SchemesAndPolicies from "./pages/SchemesAndPolicies";
import SignUp from "./pages/SignUp";
import Topstories from "./pages/TopStories";
import Traceability from "./pages/Traceability";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AI from "./pages/AI";
import ChatbotIcon from "./pages/ChatbotUI";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/marketplace" element={<Marketplace/>}/>
      <Route path="/learning-awareness" element={<LearningAndAwareness/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/analytics-dashboard" element={<AnalyticsDashboard/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/contact-support" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/schemes-policies" element={<SchemesAndPolicies/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/top-stories" element={<Topstories/>}/>
      <Route path="/ai" element={<AI/>}/>
      <Route path="/traceability" element={<Traceability/>}/>
    </Routes>
    <ChatbotIcon/>
    <Footer/>
    </>
  );
}

export default App;
