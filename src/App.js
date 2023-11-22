import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Header from "./components/Header"
import ContactMeSection from "./components/ContactMeSection"
import LandingSection from './components/LandingSection';
import { AlertProvider } from './context/alertContext';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import Alert from './components/Alert';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
      <main>
    <Header />
    <LandingSection />
    <ProjectsSection />
    <ContactMeSection />
    <Footer />
    <Alert />
    </main>
    </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
