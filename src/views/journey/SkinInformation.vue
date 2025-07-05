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
    <p>Step 2/3</p>
    <div class="ribbon-white">
      <template v-if="isLoading">
        <div
          class="d-flex flex-column gap-4 align-items-center justify-content-center py-4 text-center"
        >
          <div
            class="spinner-border"
            style="width: 8em; height: 8rem; color: #ffb6c1"
            role="status"
          >
            <span class="sr-only"></span>
          </div>
          <h4>Hang tight!</h4>
          <h4>We're analyzing your skin criteria to conjure up the best recommendations.</h4>
        </div>
      </template>
      <template v-else>
        <div class="container">
          <div
            class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg text-center"
          >
            <div class="form-group">
              <label for="exampleFormControlSelect1">Skincare Category</label>
              <select
                v-model="formData.category_id"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="" selected disabled>Choose Your Skincare Category</option>
                <template v-for="(cat, i) in scCategories" :key="i">
                  <option :value="cat.value">{{ cat.label }}</option>
                </template>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Your Skin Type</label>
              <select
                v-model="formData.tipe_id"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="" selected disabled>Choose Your Skin Type</option>
                <template v-for="(cat, i) in scSkinType" :key="i">
                  <option :value="cat.value">{{ cat.label }}</option>
                </template>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Your Skin Problem</label>
              <select
                v-model="formData.concern_id"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="" selected disabled>Choose Your Skin Problem</option>
                <template v-for="(cat, i) in scSkinConcern" :key="i">
                  <option :value="cat.value">{{ cat.label }}</option>
                </template>
              </select>
            </div>
            <div class="w-100">
              <label for="exampleFormControlSelect1" class="mb-2">Price Range</label>
              <div class="d-flex gap-4">
                <div class="form-group">
                  <input
                    v-model="formData.price_form"
                    @input="onPriceFromInput"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Price From"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="formData.price_to"
                    @input="onPriceToInput"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Price To"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Jumlah Rekomendasi Pembeli</label>
              <input type="range" class="form-range" min="1" max="200" id="customRange2" v-model="formData.recommend">
              <p>({{formData.recommend}})</p>

            </div>

            <button type="submit" @click="handleSubmit" class="btn btn-cta mt-2">
              Get The Recommendation
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="row justify-content-center section-margin">
    <div class="col-lg-9"></div>
  </div>
</template>
<script lang="ts">
import apiClient from '@/services/ApiServices';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'SkinInformation',
  components: {},
  emits: ['next'],
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      scCategories: [],
      scSkinType: [],
      scSkinConcern: [],
      isLoading: false,
    };
  },
  computed: {
    formData(): any {
      return this.store.state.formSubmission;
    },
  },
  methods: {
    nextStep() {
      this.$emit('next');
    },
    async loadScCategories() {
      this.scCategories = [];
      try {
        const {
          data: { data },
        } = await apiClient.get('options/categories');
        this.scCategories = data;
      } catch (error) {
        console.log(error);
      }
    },
    async loadScSkintype() {
      this.scSkinType = [];
      try {
        const {
          data: { data },
        } = await apiClient.get('options/skin-type');
        this.scSkinType = data;
      } catch (error) {
        console.log(error);
      }
    },
    async loadScSkinConcern() {
      this.scSkinConcern = [];
      try {
        const {
          data: { data },
        } = await apiClient.get('options/concern');
        this.scSkinConcern = data;
      } catch (error) {
        console.log(error);
      }
    },
    onPriceFromInput(e: any) {
      this.formData.price_form = e.target.value.replace(/\D/g, '');
    },
    onPriceToInput(e: any) {
      this.formData.price_to = e.target.value.replace(/\D/g, '');
    },
    async handleSubmit() {
      this.isLoading = true;
      try {
        // if (this.formData.price_to < this.formData.price_form) {
        //   Swal.fire({
        //     title: 'Failed To Process',
        //     text: 'Oops! Please check your price range.',
        //     icon: 'error',
        //     confirmButtonText: 'OK',
        //   });
        //   return;
        // }
        const response = await apiClient.post('submission/request', this.formData);
        if (response.data.success) {
          this.store.state.submissionResult.recommended = response.data.data.recommended;
          this.store.state.submissionResult.others = response.data.data.others;
          this.nextStep();
        } else {
          Swal.fire({
            title: 'Failed To Get Result',
            text: 'Oops! Something went wrong while processing. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Gagal Memproses',
          text: 'error',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
  async mounted() {
    await this.loadScCategories();
    await this.loadScSkintype();
    await this.loadScSkinConcern();
  },
});
</script>
