<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="d-flex flex-column gap-2">
          <img
            src="https://images.soco.id/e9dfd5c2-b565-4ae7-9318-b5c5cc0cf4bc-image-0-1626929910328"
            class="img-result-modal"
            alt=""
          />
          <button type="submit" @click="$router.push(`/skin-info`)" class="btn btn-cta mt-2">
            Approve Product
          </button>
        </div>
      </div>
      <div class="col-8">
        <div>
          <div class="d-flex justify-content-between">
            <h4>Product Name</h4>
            <div class="d-flex gap-2">
              <h4>5.0</h4>
              <h4>5.0</h4>
            </div>
          </div>
          <h5>Brand</h5>
          <h5>Price</h5>
          <hr />
          <h5><i>Description :</i></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <hr />
          <h5><i>Ingredients :</i></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr>
        <div class="d-flex justify-content-center">
          <button type="submit" @click="$router.push(`/skin-info`)" class="btn btn-cta mt-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
