# useEffect注意事项

    -为react组件提供副作用，主要作用通过数据渲染ui,其他都为副作用
    - 默认状态 首次执行 + 每次组件更新执行
    - useEffect是在dom之后调用
    - 第二个参数为空，代表只是初始化调用，之后不再执行
    - 如果有值，会与上一次作比较，参数一样则不变化，否则继续回调
    - 和vue watch 比较像，但执行时机不一样

# react-router-dom

## useSearchParams

> 作用：用于读取和修改当前位置的 URL 中的查询字符串  
返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数

## useParams

> 声明式路由配置路由参数
