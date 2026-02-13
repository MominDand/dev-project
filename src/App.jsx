import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
// import ServicePage from "./pages/ServicePage";
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:slug" element={<CategoryPage />} />
                        {/* <Route path="/service/:id" element={<ServicePage />} /> */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
