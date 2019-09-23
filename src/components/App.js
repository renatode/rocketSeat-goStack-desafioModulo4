import React from "react";

import Header from "./Header";
import PostList from "./PostList";

class App extends React.Component {
  render() {
    return (
      <>
        <Header name={this.props.name} />
        <PostList />
      </>
    );
  }
}

export default App;
