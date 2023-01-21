"use strict";
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
async function fetchPosts(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id);
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
    console.log('Title: ' + post.title);
    console.log('Body: ' + post.body);
}
showPost();
