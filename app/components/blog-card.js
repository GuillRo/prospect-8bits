import Component from '@ember/component';

export default Component.extend({
  actions: {
    delete(id) {
      this.deleteAction(id);
    }
  }
});
