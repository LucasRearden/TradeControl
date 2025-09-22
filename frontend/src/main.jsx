import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {TradeApp} from './TradeApp.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <TradeApp />
    </StrictMode>,
  </BrowserRouter>
)
