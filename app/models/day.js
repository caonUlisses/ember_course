import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  value: attr('boolean', { default: false }),
  calendar: DS.belongsTo('calendar')
});

