import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Posts />
        </>
      ),
    },
    {
      path: '/new',
      element: (
        <>
          <NavBar />
          <NewPostForm />
        </>
      ),
    },
    {
      path: '/posts/:id',
      element: (
        <>
          <NavBar />
          <PostDetails />
        </>
      ),
    },
    {
      path: '/posts/:id/edit',
      element: (
        <>
          <NavBar />
          <EditPostForm />
        </>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
