<script setup>
import CommandPalette from "./components/CommandPalette.vue";
</script>

<template>
  <CommandPalette :commands="commands" />
</template>

<script>
export default {
  data: () => ({
    commands: [
      {
        id: 0,
        title: "Create Record",
        commandLogic: () => {
          console.log("Hello");
        },
      },
    ],
  }),
};
</script>

<style></style>
