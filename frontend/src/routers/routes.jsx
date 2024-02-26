import App from '../pages/App.jsx';
import Form from '../pages/Form.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/add',
    element: <Form />,
    // errorElement: <ErrorPage />,
  },
];

export default routes;
