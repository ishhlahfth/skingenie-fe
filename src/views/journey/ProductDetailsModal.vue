<template>
  <div class="container product-modal">
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <div class="d-flex flex-column gap-2">
          <img :src="data.img_url" class="img-result-modal" alt="" />
          <!-- <button type="submit" @click="$router.push(`/skin-info`)" class="btn btn-cta mt-2">
            Approve Product
          </button> -->
          <div class="d-flex justify-content-center">
          <a
            :href="data.sociolla_url"
            target="_blank"
            class="btn btn-cta mt-2"
          >
            Buy Now
        </a>
        </div>
        </div>
      </div>
      <div class="col-md-8 col-xs-12">
        <div>
          <div class="d-flex justify-content-between">
            <h4>{{ data.skincare_name }}</h4>
            <div class="d-flex gap-2">
              <h4>{{ data.rating.toFixed(2) }}</h4>
              <h4>({{ data.total_reviews }})</h4>
            </div>
          </div>
          <!-- <h5>Brand</h5> -->
          <h5>{{ data.min_price }} - {{ data.max_price }}</h5>
          <hr />
          <div class="detail-box">
            <h5><i>Description :</i></h5>
            <div v-html="data.description"></div>
            <hr />
            <h5><i>Ingredients :</i></h5>
            <div v-html="data.ingredients"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ProductDetailsModal',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
