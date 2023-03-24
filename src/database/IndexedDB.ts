// ID, NAME, URL, PASSWORD

const dbName = 'Passwords'
let db, tx, store, index

if (!indexedDB) {
  alert('Browser not supporting IndexDB')
}

const request = indexedDB.open(dbName)

request.onerror = function (event) {
  console.log('Error occurred' + event.target)
}

request.onsuccess = function (event) {
  db = request.result
  tx = db.transaction('PasswordStore', 'readwrite')
  store = tx.objectStore('PasswordStore')
  index = store.index('NAME')
}

request.onupgradeneeded = function (event) {
  db = request.result
  store = db.createObjectStore('PasswordStore', {
    autoIncrement: true,
  })
  index = store.createIndex('NAME', 'NAME', { unique: true })
}

export {}
