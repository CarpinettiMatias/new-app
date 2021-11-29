import React from 'react';
import { Navigate,useRoutes } from 'react-router';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Contact from '../../Pages/Contact';
import CartView from '../CartView/CartView';

export const Router = () => {
    

    const routes = useRoutes([
        {path:'/', element: <ItemListContainer/> },
        {path:'/Products/:catId', element:<ItemListContainer />},
        {path:'/detail/:detailId', element:<ItemDetailContainer />},
        {path:'/Contact', element:<Contact />},
        {path:'/Cart', element:<CartView />},
        {path:'*', element: <Navigate to='/' />}
    ])
    return routes
};


