import Home from './home'
import About from './about'
import Login from './login'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        // 声明当前要用一个非hash模式的路由
        <BrowserRouter>
            {/* 指定跳转的组件  */}
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
            {/* <Link to="/login">登录</Link> */}
            {/* 路由出口 */}
            <Routes>
                {/* 指定路径和组件的对应关系  path路径 element组件 成对出现 */}
                <Route path='/' element={<Home />}></Route>
                <Route path='/about/:id' element={<About />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
