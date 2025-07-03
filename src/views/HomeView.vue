<template>
  <Header />
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section light-background">
      <div class="container">
        <template v-if="step === 0">
          <IndexJourney @next="handleNextStep" />
        </template>
        <template v-else-if="step === 1">
          <PersonalInformation @next="handleNextStep"/>
        </template>
        <template v-else-if="step === 2">
          <SkinInformation @next="handleNextStep"/>
        </template>
        <template v-else-if="step === 3">
          <ResultPage />
        </template>
      </div>
    </section>
    <!-- /Hero Section -->
  </main>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';
import IndexJourney from './journey/IndexJourney.vue';
import PersonalInformation from './journey/PersonalInformation.vue';
import SkinInformation from './journey/SkinInformation.vue';
import ResultPage from './journey/ResultPage.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    IndexJourney,
    PersonalInformation,
    SkinInformation,
    ResultPage,
  },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    handleNextStep() {
      this.step += 1;
    },
  },
});
</script>
