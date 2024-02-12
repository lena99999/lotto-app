<template>
  <v-container>
    <p class="pb-6">
      <h1> Willkommen bei </h1>
      <img src="../assets/lotto.png" width="200px" class="pl-1" />
    </p>

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-card>
          <img src="../assets/eurojackpot.png" width="200px" class="mt-5" />
          <h4>62 Mio € Jackpot</h4>
          <v-btn color="primary" class="my-3">
            Jetzt Spielen (coming soon...)
          </v-btn>

          <router-link
            v-if="latestDraw"
            :to="`/draws/${dateToISOString(latestDraw.date)}`"
          >
            <h4 :data-testid="latestDraw.date" class="mt-3">
              Ziehung vom {{ formatDateString(latestDraw.date) }}:
            </h4>
            {{
              `${latestDraw.numbers.join(', ')} + ${latestDraw.additionalNumbers.join(', ')}`
            }}
            
            <v-btn v-if="xs || sm"
              color="grey-lighten-1"
              icon="mdi-chevron-right"
              variant="text"
            ></v-btn> 
          </router-link>

          <p>
            <v-btn to="/draws" color="primary" class="my-5" justify-center>
              Letzte Ziehungen
            </v-btn>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { ref, ComputedRef, computed } from "vue";
import { useDisplay } from "vuetify";
import { GET_DRAWS_QUERY } from "../graphql";
import { Draw } from "../types/LottoTypes";
import { formatDateString, dateToISOString } from "../helpers/formatHelper";

const { xs, sm } = useDisplay();

//fetch latest draw from api

const queryVariables = ref({
  limit: 1,
});

const { result } = useQuery(GET_DRAWS_QUERY, queryVariables);

const latestDraw: ComputedRef<Draw> = computed(
  () => result.value?.draw.draws[0]
);
</script>
<style scoped>
@media screen and (max-width: 450px) {
  .v-btn {
    font-size: xx-small;
  }
}
</style>
