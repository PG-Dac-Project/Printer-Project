import ReactDOM from 'react-dom/client';

import { BrowserRouter  } from 'react-router-dom';

import Landing from './Landing';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
         <Landing></Landing>
</BrowserRouter>);
