import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('STRING'),
  company: DS.attr('STRING'),
  comment: DS.attr('STRING'),
  img: DS.attr('STRING')
});
