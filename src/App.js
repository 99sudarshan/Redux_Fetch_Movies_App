import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="m-0 p-0 box-border h-full">
      <Header />
      <div className="bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
