import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './login'
import Board from './Board'
import Article from './Article'
import NotFound from './NotFound'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* 默认路由  添加index属性 去掉path*/}
                    <Route index element={<Article />}></Route>
                    <Route path='article' element={<Board />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}