import React from 'react';

class demo2 extends React.Component {
    render(){
        return (
            <div>{this.props.num}</div>
        )
    }
  
  
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('--getSnapshotBeforeUpdate--',prevProps, prevState);
  //   if (prevProps.num === this.props.num) {
  //     console.log('--0000--');
  //   }
  //   return null;
  // }
    
  componentDidUpdate(prevProps){
    console.log('--componentDidUpdate--');
    //如果调用setState()需要放在if()语句中，否则直接运行会造成递归报错
    if(prevProps.num !== this.props.num){
      this.setState({})
    }
  }
  // componentDidMount(){
  //   this.timeid = setInterval(() => {
  //     console.log(new Date().getHours())
  //   }, 1000);
  // }
  componentWillUnmount(){
    clearInterval(this.timeid);
    console.warn('--componentWillUnmount 卸载--');
  }
}
export default demo2