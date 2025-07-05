<template>
  <!-- <Header /> -->
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section light-background">
      <div class="container">
        <template v-if="step === 0">
          <IndexJourney @next="handleNextStep" />
        </template>
        <template v-else-if="step === 1">
          <PersonalInformation @next="handleNextStep" />
        </template>
        <template v-else-if="step === 2">
          <SkinInformation @next="handleNextStep" />
        </template>
        <template v-else-if="step === 3">
          <ResultPage @home="handleResetStep" />
        </template>
      </div>
    </section>
    <!-- /Hero Section -->
  </main>
</template>

<script lang="ts">
// import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import IndexJourney from './journey/IndexJourney.vue';
import PersonalInformation from './journey/PersonalInformation.vue';
import SkinInformation from './journey/SkinInformation.vue';
import ResultPage from './journey/ResultPage.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // Header,
    IndexJourney,
    PersonalInformation,
    SkinInformation,
    ResultPage,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
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
    handleResetStep() {
      this.store.state.formSubmission = {
        category_id: '',
        user_name: '',
        user_phone: '',
        user_email: '',
        tipe_id: '',
        concern_id: '',
        price_form: '',
        price_to: '',
        recommend: 100,
      };
      this.store.state.submissionResult = {
        recommended: {},
        others: [],
      };
      this.step = 0;
    },
  },
});
</script>
