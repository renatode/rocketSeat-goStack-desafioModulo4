import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div id="comment">
        <img src={this.props.data.author.avatar} />
        <p>
          <strong>{this.props.data.author.name} </strong>
          {this.props.data.content}
        </p>
      </div>
    );
  }
}

export default Comment;
