import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr(),
  company: DS.attr(),
  comment: DS.attr(),
  img: DS.attr()
});
