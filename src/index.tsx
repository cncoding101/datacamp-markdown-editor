import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownProvider from 'providers/markdown-provider';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import '@styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MarkdownProvider>
      <RouterProvider router={router} />
    </MarkdownProvider>
  </React.StrictMode>,
);
