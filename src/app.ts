import { Component } from "react";
import "./app.scss";

class App extends Component {
  componentDidMount() {
     console.log('第一次渲染之后执行，只执行一次')
  }

  componentDidShow() {
    console.log('第一次卸载执行，只执行一次')
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
