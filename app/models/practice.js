var Practice = DS.Model.extend({
  title: DS.attr('string'),
  hours: DS.attr('number'),
  text: DS.attr('string')
});

export default Practice;
