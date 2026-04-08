import './App.css'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppProvider>
      <div className='flex flex-col items-center w-full overflow-x-hidden'>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
      <ToastContainer position="top-right" theme="colored" newestOnTop />
    </AppProvider>
  );
}

export default App;