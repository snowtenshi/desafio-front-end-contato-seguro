import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BooksListPage from './pages/BooksListPage';
import AuthorsListPage from './pages/AuthorsListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="books" element={<BooksListPage />}></Route>
        <Route path="authors" element={<AuthorsListPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
