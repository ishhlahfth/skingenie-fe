<template>
  <main class="main">
    <section id="hero" class="hero section light-background">
      <div class="container">
        <div class="row justify-content-center section-margin text-center">
          <div class="col-lg-9">
            <h2>Dashboard</h2>
          </div>
        </div>
        <div class="row">
          <div class="ribbon-white py-4">
            <template v-if="loading">
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
                <h4>Hang tight, We're loading your data!</h4>
              </div>
            </template>
            <template v-else>
              <div class="row">
                <div class="col-4">
                  <div class="card-dashboard">
                    <div class="text-center">
                      <h4>Total Usage</h4>
                      <h3>{{ dashboardData.usage }}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-dashboard">
                    <div class="text-center">
                      <h4>Total Products</h4>
                      <h3>{{ dashboardData.product }}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-dashboard">
                    <div class="text-center">
                      <h4>Most Picked Category</h4>
                      <h3>
                        {{ dashboardData.most_category?.ref_category?.category_name }} ({{
                          dashboardData.most_category?.total
                        }})
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-col gap-4 align-items-center justify-content-center home-big">
                <div class="card-dashboard">
                  <div class="text-center">
                    <h4>Most Recommended Product</h4>
                    <img
                      :src="dashboardData.most_product?.ref_skincare?.img_url"
                      class="img-result"
                      alt=""
                    />
                    <h3>
                      {{ dashboardData.most_product?.ref_skincare?.skincare_name }} ({{
                        dashboardData.most_product?.total
                      }})
                    </h3>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="row text-center my-2">
              <div>
                <button type="button" class="btn btn-cta mt-2" @click="$router.push(`/`)">
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import apiClient from '@/services/ApiServices';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Dashboard',
  components: {},
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      loading: false,
      dashboardData: {},
    };
  },
  methods: {
    async loadDashboard() {
      this.loading = true;
      this.dashboardData = {};
      try {
        const {
          data: { data },
        } = await apiClient.get('dashboard');
        this.dashboardData = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  async mounted() {
    await this.loadDashboard();
  },
});
</script>
