import React from 'react'
import { createRoot } from 'react-dom/client';
import 'twixt-ui-react/dist/tailwind.css';

import App from './App'

const container = document.getElementById('twixt');
const root = createRoot(container); // Create a root.
root.render(<App />); // Initial render