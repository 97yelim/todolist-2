import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from '../pages/TodoList';
import Detail from '../pages/Detail';

const Router = () => {
    
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<TodoList/>}></Route>
                <Route path='/detail' element={<Detail/>}>
                    <Route path=':id' element={<Detail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
