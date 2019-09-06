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
    deleteBlogpost() {
      console.log("gg")
    }
  }
});
