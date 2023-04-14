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
```vue
// Component.vue

<script setup>
  import { CommandPalette } from 'vuetify-command-palette'
</script>
```

### Props
The CommandPalette Component has one required prop `commands` that expects an array of command objects you want to display in the command palette.
An command object looks like this:
```js
{
  id: 0,
  title: 'Test', // Displayed text
  icon: 'mdi-plus', // Icon of Command
  commandMethod: () => { // executed logic on click
    console.log('Test')
  }
}
```

### Accessing the CommandPalette
To access the CommandPalette you need to press CTRL + K in the Browser and then the CommandPalette should open. In the near future it will be customizable which key will be used.
