import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Board />
            </main>
            <Footer />
        </div>
    );
}

export default App;
