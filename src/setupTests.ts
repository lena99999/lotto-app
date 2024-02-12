import { beforeAll, afterEach, afterAll } from "vitest";
import { graphql, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { drawDetailsResult, drawsResult } from "./tests/mockApi";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { config } from "@vue/test-utils";

//api

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

provideApolloClient(apolloClient);

const graphqlHandlers = [
  graphql.query("draws", () => {
    return HttpResponse.json(drawDetailsResult);
  }),
  graphql.query("getDraws", () => {
    return HttpResponse.json(drawsResult);
  }),
];

//vuetify

const vuetify = createVuetify({
  components,
  directives,
});

config.global.plugins = [vuetify];

const server = setupServer(...graphqlHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
