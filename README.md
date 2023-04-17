# Vuetify command palette
![vuetify-command-palette package version](https://img.shields.io/npm/v/vuetify-command-palette.svg?colorB=green) \
The `vuetify-command-palette` is a custom design component for vuetify adding a command palette to your application. To use this component vuetify is required

## Installation
```bash
npm install vuetify-command-palette
# or
yarn add vuetify-command-palette
```

## Usage

### Importing CommandPalette as global component
```js
// main.js

import { createApp } from 'vue'

import CommandPalette from 'vuetify-command-palette'

const app = createApp(App)
app.use(CommandPalette)
app.mount('#app')
```

### Importing CommandPalette locally
```html
<!-- Component.vue -->

<script setup>
  import { CommandPalette } from 'vuetify-command-palette'
</script>
```

### Props
#### commands
The `commands` prop hands the commands to the component and displays them.
The prop expects an Array of command objects. A command object looks like this:
```js
const command = {
  title: 'Test', // Displayed text
  icon: 'mdi-plus', // Icon of Command
  commandMethod: () => { // executed logic on click
    console.log('Test')
  }
}
```
#### shortcuts
The `shortcuts` prop expects an array of characters, that includes the letters you can press in combination with `CTRL` to open the command palette. By default the shortcut is `CTRL+K`. An example of an shortcuts array is this:
```js
const shortcuts = ['K', 'P']
```

#### color
The `color` prop expects whether a hex color or a vuetify application color as a string. By default the `primary` color is used.

#### blackText
The `blackText` prop is a boolean prop. If `true` the Text will be displayed black and not white

#### displayAll
The `displayAll` prop is a boolean prop. If `true` all commands will be displayed if the array is not filtered

#### noDataText
The `noDataText` prop expects a string, in which the text, that is displayed when no command matches the search string, is defined. If you do not define the text the default text is: `Nothing found`