import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, payload) {
      state.notes.push(payload)
    },
    deleteNote(state, noteId) {
      let arrayId = state.notes.findIndex((note) => note.noteId == noteId)

      if (arrayId >= 0) {
        state.notes.splice(arrayId, 1)
      }
    },
    updateNote(state, payload) {
      let index = state.notes.findIndex((note) => note.noteId == payload.noteId)
      state.notes[index] = payload
    }
  },
  actions: {
    saveNote({ commit, getters }, payload) {
      const oldNote = getters.getNoteById(payload.noteId)
      if (oldNote) {
        commit("updateNote", payload)
      } else {
        commit("addNote", payload)
      }
    }
  },
  getters: {
    getNoteById: (state) => (id) => {
      return state.notes.find((note) => note.noteId == id)
    }
  }
})
