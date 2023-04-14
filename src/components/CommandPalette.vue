<script setup>
import "@mdi/font/css/materialdesignicons.css";
</script>

<template>
  <Hotkeys :shortcuts="shortcuts" @triggered="visible = true" />
  <v-dialog v-model="visible">
    <v-row class="d-flex flex-column align-center">
      <v-col cols="12" sm="12" md="8" lg="6" xl="4">
        <v-card max-height="700" rounded="lg" border>
          <v-card-text>
            <v-text-field
              :color="color"
              prepend-inner-icon="mdi-magnify"
              v-model="commandFilterText"
              placeholder="Search Command"
              autofocus
              variant="outlined"
            >
            </v-text-field>
            <v-divider></v-divider>
            <v-list class="overflow-y-auto pb-7" max-height="300">
              <v-list-item
                v-for="command in filteredCommands"
                :key="command.id"
                @click="command.commandMethod"
                :id="command.id"
                :prepend-icon="command.icon"
                :append-icon="
                  command.id == selected ? 'mdi-arrow-left-bottom' : ''
                "
                :active="command.id == selected"
                :active-class="'bg-' + color + ' ' + 'text-white'"
                rounded="lg"
                border="1"
                >{{ command.title }}</v-list-item
              >
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import { ref } from "vue";
import { useMagicKeys } from "@vueuse/core";
import Hotkeys from "vue-hotkeys-rt";

const keys = useMagicKeys();

export default {
  components: {
    Hotkeys,
  },
  props: {
    color: {
      type: String,
      default: "primary",
    },
    shortcuts: {
      type: Array,
      required: true,
    },
    commands: {
      type: Array,
      required: false,
      default: [],
    },
  },
  data: () => ({
    commandFilterText: "",
    arrowDownKey: keys.arrowDown,
    arrowUpKey: keys.arrowUp,
    enterKey: keys.enter,
    visible: ref(false),
    selected: 0,
  }),
  watch: {
    arrowUpKey(v) {
      if (this.visible) {
        if (v) {
          if (this.selected > 0) {
            this.selected--;
          } else {
            this.selected = this.filteredCommands.length - 1;
          }
          document.getElementById(this.selected).scrollIntoView();
        }
      }
    },
    arrowDownKey(v) {
      if (this.visible) {
        if (v) {
          if (this.selected < this.filteredCommands.length - 1) {
            this.selected++;
          } else {
            this.selected = 0;
          }
          document.getElementById(this.selected).scrollIntoView();
        }
      }
    },
    enterKey(v) {
      if (this.visible) {
        if (v) {
          if (this.filteredCommands[this.selected] != undefined) {
            this.filteredCommands[this.selected].commandLogic();
            this.visible = ref(false);
          }
        }
      }
    },
    visible(v) {
      if (!v) {
        this.closeCommandCenter();
      }
    },
  },
  methods: {
    closeCommandCenter() {
      this.visible = false;
      this.commandFilterText = "";
      this.selected = 0;
    },
  },
  computed: {
    filteredCommands() {
      if (this.commandFilterText == "") {
        return [];
      }
      return this.commands.filter((command) => {
        if (command.title.includes(this.commandFilterText)) {
          return true;
        }
        return false;
      });
    },
  },
};
</script>
