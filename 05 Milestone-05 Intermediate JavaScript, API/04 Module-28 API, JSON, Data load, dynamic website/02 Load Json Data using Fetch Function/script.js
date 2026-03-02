// const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(result);

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1") //Promise of response
    .then(
      (response) =>
        //console.log(response.json()),
        response.json(), // Promise of json data
    )
    .then((data) => console.log(data));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      displayPost(json);
    });
};

const displayPost = (posts) => {
  // console.log(posts);
  posts.forEach((post) => {
    console.log(post);
  });
};
