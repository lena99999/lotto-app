<template>
  <v-app>
    <v-app-bar color="primary" :elevation="4" prominent>
      <v-app-bar-nav-icon
        color="white"
        @click.stop="showSideBar = !showSideBar"
      ></v-app-bar-nav-icon>

      <router-link to="/" exact>
        <img height="41" src="./assets/lotto.png" />
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="showSideBar" temporary>
      <v-list>
        <v-list-item v-for="route of sideBarList" :key="route.route">
          <router-link :to="route.route" exact> {{ route.title }} </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { watch } from "vue";
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { useRoute } from "vue-router";
import { formatDateString } from "./helpers/formatHelper";

//sidebar

const showSideBar = ref(false);

type SideBarEntry = { title: string; route: string };

const sideBarList: SideBarEntry[] = [
  {
    title: "Startseite",
    route: "/",
  },
  {
    title: "Eurojackpot Ziehungen",
    route: "/draws",
  },
];

//page title

const route = useRoute();
const routeName = computed(() => {
  return route.name ?? "";
});

const pageTitle = computed(() => {
  switch (routeName.value) {
    case "draws":
      return "Letzte Ziehungen | Lotto";

    case "drawDetails":
      let date = formatDateString(route.params.drawDate as string);
      return `Ziehung ${date}`;

    default:
      return "Lotto";
  }
});

watch(pageTitle, () => {
  useTitle(pageTitle.value);
});
</script>

<style scoped>
a img {
  vertical-align: middle;
}
</style>
