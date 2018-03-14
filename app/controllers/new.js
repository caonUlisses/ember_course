import Controller from '@ember/controller'

export default Controller.extend({
  actions: {
    async save () {
      try {
        await this.get('model').save()
        this.transitionToRoute('calendars')
      } catch (error) { throw new Error(error) }
    },
    cancel () {
      this.get('model').deleteRecord()
      return true
    }
  }
})
