import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBlogpost() {
      let newBlogTitle = this.get('newBlogTitle')
      let newBlogBody = this.get('newBlogBody')
      // create a record in Ember Data (locally, would not survive page refresh)
      let newRecord = this.store.createRecord('blogpost', {
        title: newBlogTitle,
        body: newBlogBody
      })
      // Save the record to the API endpoint specified in adapters/application.js
      newRecord.save()
    },
    deleteBlogpost() {
      console.log("gg")
    }
  }
});
