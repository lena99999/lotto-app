<template>
  <div>
    <h2 class="mb-2">Eurojackpot Ziehung vom {{ drawDate }}</h2>

    <p v-if="error">
      {{ error }}
    </p>
    <v-icon
      v-else-if="loading"
      icon="mdi:mdi-loading mdi-spin"
      size="x-large"
    ></v-icon>
    <div v-else-if="drawResult">
      <h2
        :data-testid="dateToISOString(drawResult.date)"
        class="text-primary py-2"
      >
        {{
          `Gewinnzahlen: ${drawResult.numbers.join(
            ", "
          )} + ${drawResult.additionalNumbers.join(", ")}`
        }}
      </h2>

      <!-- gameAmount: {{ formatStringAsCurrency(drawResult.gameAmount) }} -->
      <p class="py-2">
        {{ `Jackpot: ${formatNumber(drawResult.jackpot)} €` }}
      </p>

      <v-table>
        <thead>
          <tr>
            <th class="text-left">Gewinnklasse</th>
            <th class="text-right">Gewinner</th>
            <th class="text-right">Gewinn</th>
          </tr>
        </thead>
        <tbody class="text-right">
          <tr v-for="odd of drawResult.odds" :key="odd.winningClass">
            <td class="text-left">{{ odd.description }}</td>
            <td>{{ formatNumber(odd.numberOfWinners) }}</td>
            <td>{{ formatStringAsCurrency(odd.odd) }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { ComputedRef, computed, ref } from "vue";
import { Draw } from "../types/LottoTypes";
import { GET_DRAW_DETAILS_QUERY } from "../graphql";
import {
  formatStringAsCurrency,
  formatNumber,
  formatDateString,
  dateToLongString,
  dateToISOString,
} from "../helpers/formatHelper";

//get date from route param & fetch data

const route = useRoute();

const convertedDate = dateToLongString(route.params.drawDate as string);

const drawDate = formatDateString(convertedDate);

const queryVariables = ref({
  date: convertedDate,
});

const { result, loading, error } = useQuery(
  GET_DRAW_DETAILS_QUERY,
  queryVariables
);

const drawResult: ComputedRef<Draw> = computed(
  () => result.value?.draw.draws[0]
);
</script>

<style scoped>
.v-table {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
