import Component from '@ember/component';

export default Component.extend({
  actions: {
    previousItem() {
      this.toggleProperty('isWide')
    },
    nextItem() {
      
    }
  }
});
