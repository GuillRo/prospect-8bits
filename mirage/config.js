export default function () {
  this.namespace = '/api';

  // let postCounter = 2;
  let data = [
    {
      id: 1,
      type: "blogpost",
      attributes: {
        title: 'Blog post 1',
        body: "Boost your sales today"
      }
    }, {
      id: 2,
      type: "blogpost",
      attributes: {
        title: 'Blog post 2',
        body: "Boost your sales tomorrow"
      }
    }]

  this.get('/blogposts', function () {
    return { data: data };
  })

  this.post('/blogposts', function () {
    // postCounter += 1;
    // console.log("post")
    // const newRecord = {}
    // data.push()
    // console.log(request.requestBody)
  })
}