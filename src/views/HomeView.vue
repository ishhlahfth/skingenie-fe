<template>
  <Header />
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section light-background">
      <div class="container">
        <IndexJourney />
        <PersonalInformation />
        <Footer />
      </div>
    </section>
    <!-- /Hero Section -->
  </main>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { defineComponent } from 'vue';
import IndexJourney from './journey/IndexJourney.vue';
import PersonalInformation from './journey/PersonalInformation.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Footer,
    IndexJourney,
    PersonalInformation,
  },
});
</script>
