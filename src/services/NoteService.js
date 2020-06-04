import { LocalStorageService } from './LocalStorageService'

/**
 * @typedef Note
 * @property {string} noteId - id of note
 * @property {string} title - title of note
 * @property {array} todos - list of todos
 */

/**
 * The key under which we are saving Notes in LS
 * @type {string}
 */
export const STORAGE_KEY = 'notes'

export const NoteService = {
  /**
   * Stores all the provided notes items
   * @param {Note[]} items
   */
  storeAll (items) {
    LocalStorageService.setItem(STORAGE_KEY, items)
  },
  /**
   * Fetch all Notes
   * @return {notes[]}
   */
  fetchNotes () {
    return LocalStorageService.getItem(STORAGE_KEY, [])
  },
  /**
   * Fetch Note By Id
   * @return {note}
   */
  getItemById (noteId) {
    const items = LocalStorageService.getItem(STORAGE_KEY, [])
    const index = items.findIndex(i => i.noteId === noteId)
    if (index === -1) return
    return items[index]
  },
  /**
   * Updates a note item.
   * @param {String} noteId
   * @param {Note} payload
   */
  updateItem (noteId, payload) {
    const items = NoteService.fetchNotes()
    const index = items.findIndex(i => i.noteId === noteId)
    if (index === -1) {
      items.push(payload)
    } else {
      items.splice(index, 1, payload)
    }
    NoteService.storeAll(items)
  },
  /**
   * Remove a note item from the list
   * @param {string} noteId
   */
  removeItem (noteId) {
    const items = NoteService.fetchNotes()
    const index = items.findIndex(i => i.noteId === noteId)
    items.splice(index, 1)
    NoteService.storeAll(items)
  }
}
