<template>
  <div class="h-100 d-flex">
    <div class="card" style="width: 18rem">
      <img
        src="https://picsum.photos/100"
        class="card-img-top h-25"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        src="https://picsum.photos/101"
        class="card-img-top h-25"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleCarousel",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column; /* İçerikleri dikey olarak sırala */
  max-height: 100%; /* Ana bölmenin yüksekliğine uygun */
  overflow: hidden; /* İçerik fazla gelirse gizle */
}

.card-img-top {
  max-height: 50%; /* Toplam yüksekliğin yarısını resim için ayır */
  object-fit: cover; /* Resmi sığdır ve orantılı olarak kes */
}

.card-body {
  overflow-y: auto; /* İçerik fazla gelirse dikey olarak kaydırma çubuğu göster */
}
</style>
