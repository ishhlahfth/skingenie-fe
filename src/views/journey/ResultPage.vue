<template>
  <modal v-model="modal.productDetailModal">
    <ProductDetailsModal />
  </modal>
  <div class="row justify-content-center section-margin text-center">
    <div class="col-lg-9">
      <h2>Find your personalized skincare.</h2>
    </div>
    <p>Your Tailored Discovery!</p>
  </div>
  <div class="row">
    <div class="ribbon-white">
      <template v-if="isLoading">
        <div class="d-flex flex-column gap-4 align-items-center justify-content-center py-4 text-center">
          <div class="spinner-border" style="width: 8em; height: 8rem; color: #FFB6C1;" role="status">
            <span class="sr-only"></span>
          </div>
          <h4>Hang tight!</h4>
          <h4>We're analyzing your skin criteria to conjure up the best recommendations.</h4>
        </div>
      </template>
      <template v-else>
        <div
          class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg"
        >
          <div>
            <img
              src="https://images.soco.id/e9dfd5c2-b565-4ae7-9318-b5c5cc0cf4bc-image-0-1626929910328"
              class="img-result"
              alt=""
            />
          </div>
          <h4>MIni Oil Control Cleanser pH Balanced</h4>
          <h4>Rp 51.450</h4>
          <button type="button" class="btn btn-cta mt-2" @click="handleShowProductDetailModal">
            See Details
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
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
import { defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';
import ProductDetailsModal from './ProductDetailsModal.vue';

export default defineComponent({
  name: 'ResultPage',
  components: {
    ProductDetailsModal,
    Modal,
  },
  data() {
    return {
      isLoading: false,
      modal: {
        productDetailModal: false,
      },
    };
  },
  methods: {
    handleShowProductDetailModal() {
      this.modal.productDetailModal = true;
    },
    handleHideProductDetailModal() {
      this.modal.productDetailModal = false;
    },
  },
});
</script>
