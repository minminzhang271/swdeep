export default class Events {
  constructor () {
    this._queue = []
  }

  on (key, callback) {
    this._queue[key] = this._queue[key] || []
    this._queue[key].push(callback)
    return this
  }

  off (key, callback) {
    if (this._queue[key]) {
      const index = typeof callback === 'undefined' ? -2 : (typeof callback === 'number' ? callback : this._queue[key].indexOf(callback))
      if (index === -2) {
        delete this._queue[key]
      } else if (index !== -1) {
        this._queue[key].splice(index, 1)
      }
      if (this._queue[key] && this._queue[key].length === 0) delete this._queue[key]
    }
    return this
  }

  has (key) {
    return !!this._queue[key]
  }

  trigger (...args) {
    args = [].slice.call(args)
    let key = args[0]
    if (this._queue[key]) {
      this._queue[key].forEach((callback, index) => {
        args.push(index)
        callback.apply(this, args)
      })
    }
    return this
  }
}