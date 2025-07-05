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
    <p>Step 1/3</p>
    <div class="ribbon-white">
      <div
        class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg text-center"
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Your Name</label>
          <input
            v-model="formData.user_name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Your Email</label>
          <input
            v-model="formData.user_email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Your Phone</label>
          <input
            v-model="formData.user_phone"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter phone"
            @input="onPhoneNumberInput"
          />
        </div>
        <button type="submit" @click="nextStep" class="btn btn-cta mt-2">Continue</button>
      </div>
    </div>
  </div>
  <div class="row justify-content-center section-margin">
    <div class="col-lg-9"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'IndexJourney',
  components: {},
  emits: ['next'],
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    formData(): any {
      return this.store.state.formSubmission;
    },
  },
  methods: {
    formValidate() {
      let isValidated = true;
      if (this.formData.user_name === '') {
        isValidated = false;
      }
      if (this.formData.user_phone === '') {
        isValidated = false;
      }
      if (this.formData.user_email === '') {
        isValidated = false;
      }
      return isValidated;
    },
    onPhoneNumberInput(e:any) {
      this.formData.user_phone = e.target.value.replace(/\D/g, '');
    },
    nextStep() {
      if (!this.formValidate()) {
        Swal.fire({
          title: 'Failed To Continue',
          text: 'Oops! Please fill all the form fields.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } else {
        this.$emit('next');
      }
    },
  },
});
</script>
