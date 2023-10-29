<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "BCarousel",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<template>
  <Carousel
    class=""
    style="width: inherit"
    :autoplayHoverPause="true"
    :loop="true"
    :perPageCustom="[
      [240, 2],
      [339, 3],
      [600, 4],
    ]"
  >
    <Slide>
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
    </Slide>
    <Slide>
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
    </Slide>
    <Slide>
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
      </div></Slide
    >
    <Slide>
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/102" alt="img" />
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
    </Slide>
    <Slide>
      <div class="col" style="width: 20vw">
        <div class="card shadow-sm">
          <img src="https://picsum.photos/104" alt="img" />
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
    </Slide>
  </Carousel>
</template>

<style scoped lang="scss"></style>
