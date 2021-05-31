import './App.css';
import React from 'react';
class App extends React.Component {
  state = {
    txt:'',
    content:'',
    city:'sz',
    isChecked:false
  }

  handleChange = (e) => {
    const val = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      [name]:val
    })
  }
  render() {
    return (
      <div>
        <label>文本框：<input name="txt" type="text" value={this.state.txt} onChange={this.handleChange}/></label>
        <label>富文本框：<textarea  name="content" value={this.state.content} onChange = {this.handleChange}></textarea></label>
        <label>
          下拉框
          <select name="city" value = {this.state.city} onChange = { this.handleChange}>
            <option value="sh">上海</option>
            <option value="sz">苏州</option>
            <option value="nj">南京</option>
          </select>
        </label>
        <label>复选框 <input name="isChecked" type="checkbox" checked={this.state.isChecked}  onChange = { this.handleChange}/></label>
      </div>
    )
  }
}

export default App;
