// ID, NAME, URL, PASSWORD

import { Password } from '../model/Password'

const dbName = 'Passwords'
// Database, transaction, store, index
let db, tx, store, index

if (!indexedDB) {
  alert('Browser not supporting IndexDB')
}

const request = indexedDB.open(dbName)

/**
 * It add an entry into the IndexedDB
 * @param entry the password to store
 */
function addEntry(entry: Password) {
  request.onupgradeneeded = () => {
    db = request.result
    store = db.createObjectStore('Password', {
      autoIncrement: true,
    })
    index = store.createIndex('NAME', 'NAME', { unique: true })

    store.put({ NAME: entry.name, PASSWORD: entry.password, URL: entry.url })
  }
}

/**
 * It fetches all the data from the database
 */
function requestAllData() {
  db = request.result
  // TODO: Fetching the data from the database
}

/**
 * It fetches a specific password based on the index - Name
 * @param entry The name of the password to fetch interrogating the index
 */
function requestOneElement(entry: string) {
  // TODO: Fetching one password using the index
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
