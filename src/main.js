import { createApp, provide, h } from "vue";
import "./index.css";
import router from "./router/index";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import App from "./App.vue";
const hasuraUri = "https://climbing-corgi-98.hasura.app/v1/graphql";
const httpLink = createHttpLink({
  uri: hasuraUri,
});

const authLink = setContext((_, { headers }) => {
  const token =
    "QvOiic6nGQ6vGQf3OGIQhJBUWyHXFFCvBH4P6iaETkSNUx0Eeot5QAJSCgXV3X9i";
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": token,
    },
  };
});
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.mount("#app");
