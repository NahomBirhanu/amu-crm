// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { App } from './App';
// import { BrowserRouter } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter >
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import { render } from "react-dom";
import "./index.css";
import {App} from "./App";
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById("root");
render(<BrowserRouter>
  <App />
</BrowserRouter>, root);