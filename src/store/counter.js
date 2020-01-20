import { observable } from 'mobx'

const counterStore = observable({
  historyId: 0,
  increment(id) {
    this.historyId = id
  },
  decrement() {
    this.historyId = 0
  },
})
export default counterStore