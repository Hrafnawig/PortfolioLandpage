import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Available from './pages/AvailablePage';
import Explore from './pages/ExplorePage';
import Rates from './pages/Rates';
import Book from './pages/Book';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/available' element={<Available/>}/>
                    <Route path='/explore' element={<Explore/>}/>
                    <Route path='/rates' element={<Rates/>}/>
                    <Route path='/book' element={<Book/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
