import DS from 'ember-data'

export default DS.Model.extend({
  date: DS.attr('string'),
  value: DS.attr('boolean', { default: false }),
  calendar: DS.belongsTo('calendar')
})
