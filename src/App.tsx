import Board from './components/Board';
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="app">
            <NavbarComponent />
            <main>
                <Board />
            </main>
            <FooterComponent />
        </div>
    );
}

export default App;
