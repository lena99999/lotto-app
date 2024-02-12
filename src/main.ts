import { createApp, provide, h } from "vue";
import { createRouter } from "./router.ts";
import "./style.css";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const apiUrl = import.meta.env.VITE_API_URL;

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: apiUrl,
});

// Cache implementation
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#c59e39",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

const router = createRouter();

app.use(router).use(vuetify);
app.mount("#app");
