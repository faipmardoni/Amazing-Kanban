import firebase from 'firebase'

const config = {
  databaseURL: 'https://kanban-faipmardoni.firebaseio.com/',
  projectId: 'kanban-faipmardoni'
}

const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.database()