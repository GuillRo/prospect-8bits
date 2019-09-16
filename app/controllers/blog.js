import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBlogpost() {
      let newBlogTitle = this.get('newBlogTitle')
      let newBlogBody = this.get('newBlogBody')
      let newRecord = this.store.createRecord('blogpost', {
        title: newBlogTitle,
        body: newBlogBody
      })
      newRecord.save()
    },
    deleteBlogpost(id) {
      // this.store.findRecord('blogpost', id).then(post => {
      //   post.deleteRecord();
      //   post.save();
      // })
      const post = this.store.peekRecord('blogpost', id)
      post.deleteRecord();
      post.save();
    }
  }
});
