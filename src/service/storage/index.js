import Lockr from 'lockr'

export const storage = {
  get (key) {
    return Lockr.get(key)
  },
  set (key, val) {
    Lockr.set(key, val)
  },
  delete (key) {
    Lockr.rm(key)
  },
  empty () {
    Lockr.flush()
  }
}
