import { Password, PasswordInfo } from '../model/Password'

// Constants to be used
const DB_NAME = 'passwords-list'
const DB_STORE = 'passwords'

/**
 * It initialise the connection to the database and on first connection it creates the schema
 */
function initDatabase() {
  const openRequest = globalThis.indexedDB.open(DB_NAME)
  let db: IDBDatabase | null = null

  openRequest.onerror = (e) => {
    console.error('Error opening DB', e)
  }

  openRequest.onsuccess = (e) => {
    db = openRequest.result
  }

  openRequest.onupgradeneeded = (e) => {
    db = openRequest.result
    const store = db.createObjectStore(DB_STORE, { keyPath: 'name', autoIncrement: true })

    store.createIndex('name', ['name'], { unique: true })
    store.createIndex('password', ['password'], { unique: true })
    store.createIndex('url', ['url'], { unique: false })
  }

  console.log('Database initialised')
} // End of method

/**
 * It adds a password to the database
 * @param entry the password to add into the database
 */
function addEntry(entry: PasswordInfo) {
  // Opening the database
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    console.log('onupgradedneeded accessed')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readwrite')

    // Initialising the store
    const store = transaction.objectStore(DB_STORE)
    // Inserting the password details on the tables according to schema
    store.put({ name: entry.name, password: entry.password, url: entry.url })
    console.log('entry added')

    if (request.readyState == 'done') {
      console.log('Data added')
      db.close()
    }
  }
} // End of method

/**
 * It gets the password from the database using the index specified
 * @param element the indexed element to fetch from the database
 * @returns the password to string
 */
function getPassword(element: string) {
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readonly')

    // Store
    const store = transaction.objectStore(DB_STORE)
    const nameIndex = store.index('name')
    // Index
    const nameQuery = nameIndex.get([element])

    nameQuery.onsuccess = () => {
      console.log('nameQuery', nameQuery.result.password)
      return nameQuery.result.password.toString()
    }
  }
} // End of method

/**
 * It deletes an element from the database specifying the element to delete
 * @param element The element to delete
 */
function deletePassword(element: string) {
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readwrite')
    // Store
    const store = transaction.objectStore(DB_STORE)
    // Index
    const nameIndex = store.index('name')
    const nameKeyRequest = nameIndex.getKey([element])

    nameKeyRequest.onsuccess = () => {
      // Setting the key
      const nameKey = nameKeyRequest.result as IDBValidKey
      // Delete the entry
      store.delete(nameKey)
      console.log('Password Deleted from Database')
    }
  }
}

export { initDatabase, addEntry, getPassword, deletePassword }
