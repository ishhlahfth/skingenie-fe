<template>
  <modal v-model="modal.productDetailModal">
    <ProductDetailsModal :data="modalData" />
  </modal>
  <div class="row justify-content-center section-margin text-center">
    <div class="col-lg-9">
      <h2>Find your personalized skincare.</h2>
    </div>
  </div>
  <div class="row">
    <p>Step 3/3</p>
    <div class="ribbon-white">
      <div
        class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg mt-4 radius-box"
      >
        <h4>Here is your Tailored Discovery!</h4>
        <div>
          <img :src="resultData.recommended.img_url" class="img-result" alt="" />
        </div>
        <h4>{{ resultData.recommended.skincare_name }}</h4>
        <h4>
          Rp {{ convertCurrency(resultData.recommended.min_price) }} -
          Rp {{ convertCurrency(resultData.recommended.max_price) }}
        </h4>
        <button
          type="button"
          class="btn btn-cta mt-2"
          @click="handleShowProductDetailModal(resultData.recommended)"
        >
          See Details
        </button>
      </div>
      <div class="container">
        <div class="row text-center mt-4">
          <h4>You might like :</h4>
        </div>
        <div class="row mb-4">
          <template v-for="(sc, i) in resultData.others" :key="i">
            <div class="col-md-3 col-sm-12 mt-2 mx-auto" @click="handleShowProductDetailModal(sc)">
              <div class="d-flex card-other align-items-center gap-2 p-4">
                <img :src="sc.img_url" class="img-other" alt="" />
                <p>{{ sc.skincare_name }}</p>
              </div>
            </div>
          </template>
        </div>
        <div class="row text-center my-2">
          <div>
            <button
              type="button"
              class="btn btn-cta mt-2"
              @click="handleBackToHome()"
            >
              Try Another Combination
            </button>
          </div>
        </div>
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
import Modal from '@/components/Modal.vue';
import ProductDetailsModal from './ProductDetailsModal.vue';

export default defineComponent({
  name: 'ResultPage',
  components: {
    ProductDetailsModal,
    Modal,
  },
  emits: ['home'],
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      isLoading: false,
      modal: {
        productDetailModal: false,
      },
      modalData: {},
    };
  },
  computed: {
    resultData(): any {
      return this.store.state.submissionResult;
    },
  },
  methods: {
    convertCurrency(amt: number): string {
      return amt.toLocaleString('en-US');
    },
    handleShowProductDetailModal(skincare: any) {
      this.modalData = {};
      this.modalData = skincare;
      this.modal.productDetailModal = true;
    },
    handleHideProductDetailModal() {
      this.modal.productDetailModal = false;
    },
    handleBackToHome() {
      this.$emit('home');
    },
  },
});
</script>
