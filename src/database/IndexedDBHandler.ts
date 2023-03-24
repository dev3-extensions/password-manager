// ID, NAME, URL, PASSWORD

import { Password } from '../model/Password'

const dbName = 'Passwords'
// Database, transaction, store, index
let db, tx, store, index

if (!indexedDB) {
  alert('Browser not supporting IndexDB')
}

const request = indexedDB.open(dbName)

function AddEntry(entry: Password) {
  request.onupgradeneeded = () => {
    db = request.result
    store = db.createObjectStore('Password', {
      autoIncrement: true,
    })
    index = store.createIndex('NAME', 'NAME', { unique: true })
  }
}

request.onerror = function (event) {
  console.log('Error occurred' + event.target)
}

request.onsuccess = () => {
  if (request.readyState == 'done') {
    console.log('Data added')
  }
}

export {}
