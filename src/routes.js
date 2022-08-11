const { Router } = require('express')

const routes = Router()

const posts = [];

function getPostById(id){
  return posts.findIndex(post => post.id ===  id )
}

routes.get('/posts', (request, response) => {
  response.json(posts)
});

routes.post('/posts', (request, response) => {
  const newPost = request.body;

  console.log(newPost)
  posts.push(newPost);

  return response.json(newPost)
});

routes.get('/posts/:id', (request, response)=>{
  const {id} = request.params;

  const postIndex = getPostById(id)
  const post = posts[postIndex]
  response.json(id)
})



module.exports = routes;