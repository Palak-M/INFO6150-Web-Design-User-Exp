let posts = [];
const list = document.querySelector(".posts");
let lastOpenComment = 1;
let postComments = "";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    posts = data;
    render();
  });
function render() {
  list.innerHTML = posts
    .map(
      (post) =>
        `<li>
            <a href ="#" id="${post.id}" class = "post-info" name= "post" onclick = "getpostcomments(${post.id})">${post.title}</a>
            <p class="post-body"}>${post.body}</p>
            <p data-comment="${post.id}" class="hideElement comments-container"></p>
        </li>`
    )
    .join("");
}
function getpostcomments(id) {
  if (id !== postComments) {
    postComments = id;
  } else {
    postComments = "";
  }
  fetchComments(id)
    .then((responseData) => {
      comments = responseData;
      renderComments(id, postComments);
      showComments(lastOpenComment, id);
      lastOpenComment = id;
    })
    .catch((err) => { });
}
function fetchComments(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    method: "GET",
  })
    .catch(() => {
      return promise.reject({
        code: "network-error",
      });
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => promise.reject(err));
    });
}

function renderComments(id, postComments) {
  const post = document.querySelector(`[data-comment="${id}"]`);
  const comment = comments.find((com) => com.id === id);
  if (postComments !== "") {
    post.innerHTML = comments
      .map(
        (comment) =>
          `<div>
       <p class="name">${comment.name}</p>
       <p class="email">${comment.email}</p>
       <p class="comments">${comment.body}</p>
   </div>`
      )
      .join(" ");
  } else if (postComments === "") {
    post.innerHTML = ("");
  }
}
function showComments(lastOpenComment, id) {
  const ulEle = document.querySelector(`[data-comment="${lastOpenComment}"]`);
  ulEle.classList.add("hideElement");
  document
    .querySelector(`[data-comment="${id}"]`)
    .classList.remove("hideElement");
}