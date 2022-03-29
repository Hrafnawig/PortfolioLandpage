import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Available from './pages/AvailablePage';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/available' element={<Available/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
