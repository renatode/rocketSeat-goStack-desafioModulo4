import React from "react";

import Comment from "./Comment";

class Post extends React.Component {
  render() {
    return (
      <div id="post">
        <img src={this.props.data.author.avatar} />
        <div>
          <h5>{this.props.data.author.name}</h5>
          <small>{this.props.data.date}</small>
        </div>

        <p>{this.props.data.content}</p>
        <hr />
        {this.props.data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    );
  }
}

export default Post;
