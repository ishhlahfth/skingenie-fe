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
      <div class="container">
        <div
          class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg text-center"
        >
          <div class="form-group">
            <label for="exampleFormControlSelect1">Skincare Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <template v-for="(cat, i) in scCategories" :key="i">
                <option :value="cat.value">{{ cat.label }}</option>
              </template>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Your Skin Type</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <template v-for="(cat, i) in scSkinType" :key="i">
                <option :value="cat.value">{{ cat.label }}</option>
              </template>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Your Skin Problem</label>
            <select class="form-control" id="exampleFormControlSelect1">
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
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Price From"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Price To"
                />
              </div>
            </div>
          </div>

          <button type="submit" @click="nextStep" class="btn btn-cta mt-2">
            Get The Recommendation
          </button>
        </div>
      </div>
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
    };
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
  },
  async mounted() {
    await this.loadScCategories();
    await this.loadScSkintype();
    await this.loadScSkinConcern();
  },
});
</script>
