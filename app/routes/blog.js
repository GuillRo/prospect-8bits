import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 1,
      title: "Post 1",
      body: "this is a post"
    },
    {
      id: 2,
      title: "Post 2",
      body: "this is a post"
    },
    ]
  }
});
