export default function () {
  this.namespace = '/api';

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
      type: "blogposts",
      attributes: {
        title: 'Blog post 2',
        body: "Boost your sales tomorrow"
      }
    }]

  this.get('/blogposts', function () {
    return { data: data };
  })

  // this.get('/blogposts')
  this.post('/blogposts')
  // this.get('/blogposts/:id')
  this.delete('/blogposts/:id')


  // this.resource('blogposts')


  // this does not work and i don't get an id

  // this.post('/blogposts', function (db, request) {
  //   // console.log(JSON.parse(request.requestBody).data)

  //   const newRecord = JSON.parse(request.requestBody).data
  //   newRecord.id = data.length  + 1
  //   console.log(newRecord)
  //   data.push(newRecord)
  //   console.log(data)
  //   return { data: data }
  // })


}