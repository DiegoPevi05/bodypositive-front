import {Suspense} from 'react';
import Providers from './components/Providers';
import Home from './pages';
import  LoadingComponent from './components/ui/Loader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return(
    <Suspense fallback={<LoadingComponent isLoading={true}/>}>
      <Providers>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </Router>
      </Providers>
    </Suspense>
  ) 
}

export default App
