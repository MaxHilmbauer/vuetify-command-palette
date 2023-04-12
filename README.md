# Vuetify command palette
The `vuetify-command-palette` is a custom design component for vuetify adding a command palette to your application.

## Installation

Install package with npm or yarn. Next to the `vuetify-command-palette` you need to install `Vuetify`, because the commmand palette relies on Vuetify.

```
npm install vuetify-command-palette@^1.0.3
npm install vuetify@^3.1.13
```
or
```
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

### Using CommandPalette local in component
```vue
// Component.vue

<script setup>
  import { CommandPalette } from 'vuetify-command-palette'
</script>
```
