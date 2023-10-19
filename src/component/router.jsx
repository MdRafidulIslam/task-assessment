import { createBrowserRouter } from 'react-router-dom';
import Users from './Users';
import UserDetails from './UserDetails';
import AddUser from './AddUser';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Users></Users>,
    },
    {
        path: "/userDetails/:id",
        element: <UserDetails></UserDetails>,
    },
    {
        path: "/addUser",
        element: <AddUser></AddUser>,
    },
]);