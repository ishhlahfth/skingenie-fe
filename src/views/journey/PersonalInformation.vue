<template>
  <div class="row justify-content-center section-margin text-center">
    <div class="col-lg-9">
      <h2>Find your personalized skincare.</h2>
    </div>
    <p>
      To provide the most accurate recommendations, kindly pick the match details about your skin
      and the category of the skincare. This information will allow us to precisely tailor product
      suggestions to your unique requirements.
    </p>
  </div>
  <div class="row">
    <div class="ribbon-white">
      <div class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg text-center">
        <div class="form-group">
          <label for="exampleInputEmail1">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Your Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Your Phone</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter phone"
          />
        </div>
        <button type="submit" @click="$router.push(`/skin-info`)" class="btn btn-cta mt-2">
          Continue
        </button>
      </div>
    </div>
  </div>
  <div class="row justify-content-center section-margin">
    <div class="col-lg-9"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexJourney',
  components: {},
});
</script>
