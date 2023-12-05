<script>
export default {
  name: "PricesView",
  metaInfo() {
    return {
      title: this.$t("seo.pricesView.title"),
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.$t("seo.pricesView.description"),
        },
      ],
    };
  },
  computed: {
    pricesView() {
      return this.$t("pricesView");
    },
  },
  methods: {
    formatAvailability(status) {
      const icons = {
        check: '<i class="bi bi-check-lg text-primary"></i>',
        x: '<i class="bi bi-x text-danger"></i>',
      };
      return icons[status] || "";
    },
  },
};
</script>

<template>
  <div class="container mt-4 mt-lg-5 mb-5 pt-5 pt-lg-5">
    <section class="mb-5 pt-0">
      <h1 class="h1-responsive mt-3 mb-3 text-center">
        {{ $t("keywords.prices") }}
      </h1>
      <div class="table-responsive">
        <table class="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th
                class="first-title"
                scope="col"
                v-for="header in pricesView.tableHeaders"
                :key="header"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, key) in pricesView.services" :key="key">
              <th scope="row">{{ service.name }}</th>
              <td
                v-for="status in service.availability"
                :key="status"
                v-html="formatAvailability(status)"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.first-title {
  background: #c62828;
  color: white;
}
</style>
