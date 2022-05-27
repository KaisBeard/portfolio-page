import './App.css';
import Collapsible from 'react-collapsible';
import About from "./src/About"
import Skills from "./src/Skills"
import Projects from "./src/Projects"
import Footer from "./src/Footer"
import Overview from "./src/Overview"
import Header from "./src/Header"

function App() {
  return (
      <div>
        <Header />
        {/*<Overview />
        <hr/>*/}
        <main>
          <About />
          <hr/>
          <Skills />
          <hr/>
          <Projects />
        </main>
        <Footer />
      </div>
  );

}

export default App;
