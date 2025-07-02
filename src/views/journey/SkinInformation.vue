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
        <div class="d-flex flex-column gap-4 align-items-center justify-content-center py-2 form-sg text-center">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Skincare Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Your Skin Type</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Your Skin Problem</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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

          <button type="submit" @click="$router.push(`/result`)" class="btn btn-cta mt-2">Get The Recommendation</button>
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

export default defineComponent({
  name: 'SkinInformation',
  components: {},
});
</script>
