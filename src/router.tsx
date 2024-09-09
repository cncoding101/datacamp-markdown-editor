import { createBrowserRouter } from 'react-router-dom';

import Editor from '@pages/editor';
import Preview from '@pages/preview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Editor />,
  },
  {
    path: '/preview',
    element: <Preview />,
  },
]);

export default router;
