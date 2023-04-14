<script setup>
import CommandPalette from "./components/CommandPalette.vue";

const commands = [
  {
    title: "Dashboard",
    icon: "mdi-home",
    commandLogic: () => {
      console.log("Hello Dashboard");
    },
  },
  {
    title: "Records",
    icon: "mdi-record",
    commandLogic: () => {
      console.log("Hello Records");
    },
  },
  {
    title: "Settings",
    icon: "mdi-cog",
    commandLogic: () => {
      console.log("Hello Settings");
    },
  },
];
</script>

<template>
  <CommandPalette
    :commands="commands"
    :shortcuts="['K']"
    color="secondary"
    blackText
  />
</template>

<script>
export default {};
</script>
