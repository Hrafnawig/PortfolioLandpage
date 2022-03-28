import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {useEffect} from "react";

function Router() {
    // function scrollTo(hash) {
    //     location.hash = "#" + hash;
    // }
    useEffect(() => {
        window.location.hash = "#title";
        window.history.replaceState(null, "", "/")
    }, []);
    return (
    <div>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<HomePage/>}  />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Router;
