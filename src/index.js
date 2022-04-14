import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

import { BodyProvider } from './bodyContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <BodyProvider>
    <App />
  </BodyProvider>
)
