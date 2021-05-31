// import './App.css';
import React from 'react';

/**
 * 评论列表demo
 */
class App extends React.Component {
  constructor() {
    super()

    // 创建ref
    this.state = {
      comments: [
        {id:1,name:'jeck',content: '大家撒法和'},
        {id:2,name:'zhanm',content: '大地方撒地方家撒法和'},
        {id:3,name:'boxfd',content: 'dsfasdf'},
      ],
      userName:'',
      userContent:''
    }
  }
  getTxt = ()=>{
    console.log(this.txtRef.current.value)
  }

  listObj = () =>{
    const {comments} = this.state;
    if(comments.length < 1){
      return <div>暂无评论</div>
    }else{
      return (<ul>
        {
          comments.map((item) =>(
            <li key={item.id}>
              <p>评论人: {item.name}</p>
              <p>评论内容: <br/> {item.content}</p>
            </li>
          ))
        }
        
      </ul>)
    }
  }

  onhandleinput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  submit = () =>{
    const {userName, userContent,comments} = this.state;

    // 校验
    if(userName.trim() === '' || userContent.trim() === ''){
      alert('输入框不能为空')
      return;
    }

    const newObj = {
      id:Math.ceil(Math.random() * Math.floor(Math.random() * 100)),
      name:userName,
      content:userContent
    }

    const newComponents = [newObj,...comments];
    this.setState({
      comments:newComponents,
      userName:'',
      userContent:''
    })



  }

  render() {
    return (
      <div style = {{border:'1px solid #666',width:'auto'}}>
        <div>
          评论人： <input type="text" value={this.state.userName} name ='userName' onChange={this.onhandleinput} />
        </div>
        <div>
          评论富文本框： <textarea type="textarea" value= {this.state.userContent} name ='userContent' onChange={this.onhandleinput}></textarea>
        </div>
        <div>
          <button onClick = {this.submit} >提交</button>
        </div>
        <div>{this.listObj()}</div>
      </div>
    )
  }
}

export default App;
