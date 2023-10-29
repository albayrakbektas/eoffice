<template>
  <Flicking :options="{ circular: true, panelsPerView: 3 }" :plugins="plugins">
    <div class="panel px-3">
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/100" alt="img" />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel px-3">
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/98" alt="img" />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel px-3">
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/99" alt="img" />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel px-3">
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/100" alt="img" />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel px-3">
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/101" alt="img" />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
const plugins = [
  new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
];

export default {
  name: "SwiperHomeCover",
  data() {
    return {
      plugins,
    };
  },
  components: { Flicking },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel {
  width: auto !important;
  height: 300px;
}
</style>
