# Vuetify command palette
![vuetify-command-palette package version](https://img.shields.io/npm/v/vuetify-command-palette.svg?colorB=green) \
The `vuetify-command-palette` is a custom design component for vuetify adding a command palette to your application.

## Installation

Install package with npm or yarn. Next to the `vuetify-command-palette` you need to install `Vuetify`, because the commmand palette relies on Vuetify.

```bash
npm install vuetify-command-palette@^1.0.3
npm install vuetify@^3.1.13
# or
yarn add vuetify-command-palette@^1.0.3
yarn add vuetify@^3.1.13
```

## Usage

### Using CommandPalette as global available component
```js
// main.js

import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import CommandPalette from 'vuetify-command-palette'



const vuetify = createVuetify({
  directives,
  components: {
    ...components,
    ...labs
  }
})

const app = createApp(App)
app.use(vuetify)
app.use(CommandPalette)
app.mount('#app')
```

### Using CommandPalette locally in a component
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
  commandMethod: () => { // executed logic on click
    console.log('Test')
  }
}
```

### Accessing the CommandPalette
To access the CommandPalette you need to press CTRL + K in the Browser and then the CommandPalette should open. In the near future it will be customizable which key will be used.
