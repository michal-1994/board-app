import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="app">
            <NavbarComponent />
            <main>Board</main>
            <FooterComponent />
        </div>
    );
}

export default App;
