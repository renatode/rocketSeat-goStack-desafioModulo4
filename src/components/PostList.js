import React from "react";

import Post from "./Post";

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars1.githubusercontent.com/u/40604081?s=400&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content:
              "Culpa consequat enim officia deserunt ipsum magna adipisicing laboris voluptate irure irure nulla nostrud do. Sit excepteur adipisicing magna ipsum ea aliqua nisi dolor enim ex culpa consectetur proident laborum. Eu occaecat do ullamco duis aliqua excepteur sunt. Dolor dolor quis irure qui enim quis proident elit ipsum. Sint incididunt dolor minim ea. Velit nulla ad adipisicing aliqua eu aute."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Jose Silva",
          avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
        },
        date: "11 Ago 2019",
        content:
          "Quis incididunt consequat dolor cupidatat quis ut nulla nisi consequat eiusmod. Veniam ea mollit velit qui eu anim quis do velit quis culpa voluptate anim ullamco. Amet dolor officia quis labore elit est adipisicing sit ipsum labore. Incididunt esse ex proident ad nostrud exercitation nostrud officia excepteur.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/40604081?s=400&v=4"
            },
            content: "Ullamco cupidatat anim aliqua voluptate eiusmod."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div id="postList">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
