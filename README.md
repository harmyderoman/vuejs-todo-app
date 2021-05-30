# vuejs-todo-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Technical task

Use Vue.js to implement a small SPA note-taking application.

Each note has a title and a todo list of Todo items. Each Todo item consists of a checkbox and associated text of todo task.

The application consists of only 2 pages.

The main page displays a list of all notes. For each note, a title and todos are displayed, without the ability to edit them.

## Actions on the main page:

- go to create a new note
- go to edit existed note
- delete note (confirmation required)
  The note edit page allows you to edit a specific note, mark Todo items, and then save the changes. Actions with a note:

- save changes
- undo editing (confirmation required)
- delete (confirmation required)
- undo the change made
- redo undo

## Actions with Todo items:

- to add
- delete
- edit text
- mark as done

## Functional requirements:

- All actions on the site should take place without reloading the page.
- Confirmation of actions (delete a note) is performed using a dialog box.
- The interface must meet the usability requirements.
- After reloading the page, the state of the note list should be preserved.
- You can neglect text editing inconsistencies with undo/redo buttons and similar actions with keyboard shortcuts (Ctrl + Z, Command + Z, etc.).

## Technical requirements:

- Dialog boxes should be implemented without using "alert", "prompt" and "confirm".
- JavaScript or TypeScript can be used as the development language.
- Use Webpack as a bundler if needed.
- Layout should be done without using UI libraries (for example Vuetify).
  Responsiveness is optional, but encouraged.
- The application logic should be broken down into a reasonable number of self-contained Vue components.

## Particular attention should be paid to the following points:

- The code should be written clearly and accurately, with the observance of tabulation and other writing elements, without unnecessary elements and functions that are not related to the functionality of the test task, provided with understandable comments.
- Readability and basic architecture.
- Cleanliness and cleanliness of the code is an equally important factor. The code should be written in a uniform style (preferably in the one recommended for a particular language). Also, cleanliness includes the absence of copy-paste and duplication of logic.

The test task should be provided in the following form:

- Link to public repository (GitHub, BitBucket, GitLab) with source code.
- Link to the site for testing the functionality. Or Dockerfile and docker-compose.yaml, which allow you to deploy locally using docker-compose up a working copy of your site.
