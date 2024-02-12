<template>
  <div>
    <h2 class="text-primary">Ergebnisse der letzten Eurojackpot Ziehungen</h2>

    <p v-if="error">
      {{ error }}
    </p>
    <v-icon
      v-else-if="loading"
      icon="mdi:mdi-loading mdi-spin"
      size="x-large"
    ></v-icon>
    <v-container v-else>
      <v-list lines="two">
        <v-list-item
          v-for="draw of drawResult"
          :key="draw.date"
          :title="`${draw.numbers.join(', ')} + ${draw.additionalNumbers.join(
            ', '
          )}`"
          :subtitle="formatDateString(draw.date)"
          :data-testid="draw.date"
          @click="showDrawDetails(draw.date)"
        >
          <template v-if="xs || sm" v-slot:append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-chevron-right"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ComputedRef, computed, ref } from "vue";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
import { Draw } from "../types/LottoTypes";
import { GET_DRAWS_QUERY } from "../graphql";
import { formatDateString, dateToISOString } from "../helpers/formatHelper";

const { xs, sm } = useDisplay();
const router = useRouter();

const queryVariables = ref({
  date: "",
  limit: 10,
});

const { result, loading, error } = useQuery(GET_DRAWS_QUERY, queryVariables);
const drawResult: ComputedRef<Draw[]> = computed(
  () => result.value?.draw.draws ?? []
);

function showDrawDetails(date: string): void {
  if (!date) {
    return;
  }
  router.push({
    name: "drawDetails",
    params: { drawDate: dateToISOString(date) },
  });
}
</script>

<style scoped>
.v-btn--icon.v-btn--density-default {
  height: 20px;
  width: 10px;
}
</style>
