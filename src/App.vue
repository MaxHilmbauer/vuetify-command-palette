<script setup>
import CommandPalette from "./components/CommandPalette.vue";
</script>

<template>
  <CommandPalette :commands="commands" :shortcuts="['K']" color="secondary" />
</template>

<script>
export default {
  data: () => ({
    commands: [
      {
        id: 0,
        title: "Create Record",
        icon: "mdi-plus",
        commandLogic: () => {
          console.log("Hello");
        },
      },
      {
        id: 1,
        title: "Create Record",
        icon: "mdi-plus",
        commandLogic: () => {
          console.log("Hello");
        },
      },
      {
        id: 2,
        title: "Create Record",
        icon: "mdi-plus",
        commandLogic: () => {
          console.log("Hello");
        },
      },
    ],
  }),
};
</script>
