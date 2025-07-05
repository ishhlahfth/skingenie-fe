<template>
  <div class="row justify-content-center section-margin text-center">
    <div class="col-lg-9">
      <h2>SkinGenie</h2>
      <h4>By Tata</h4>
    </div>
    <p>Discover the perfect skincare tailored just for you.</p>
  </div>
  <div class="row">
    <div class="ribbon-white">
      <div class="d-flex flex-row gap-4 align-items-center justify-content-between home-big">
        <div class="home-intro p-4">
          <img class="img-clip-home" src="@/assets/images/clip-skincare-rounded.png" alt="" />
        </div>
        <div class="home-intro pt-4">
          <div class="callout-quote">
            <p style="text-align: left">
              "Find your ideal skincare routine quickly and easily. We're here to provide
              personalized product recommendations, tailored specifically for your skin type and
              concerns. Powered by advanced analysis, SkinGenie will help you achieve the healthy,
              glowing skin of your dreams."
            </p>
          </div>
        </div>
        <div class="home-intro pt-4">
          <img class="img-clip-home" src="@/assets/images/girl.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center section-margin text-center">
    <div class="col-lg-9">
      <h3><strong>Ready to start your skincare journey?</strong> Hit the button below!</h3>
      <button @click="nextStep" class="btn btn-cta mt-2">
        Start Your Skincare Journey
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexJourney',
  setup() {
    const router = useRouter();
  },
  components: {},
  emits: ['next'],
  methods: {
    nextStep() {
      this.$emit('next');
    },
  },
});
</script>
