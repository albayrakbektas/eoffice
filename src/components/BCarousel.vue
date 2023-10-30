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
    <!--    <Slide>-->
    <!--      <div class="col" style="width: 20vw">-->
    <!--        <div class="card shadow-sm">-->
    <!--          <img src="https://picsum.photos/98" alt="img" />-->
    <!--          <div class="card-body">-->
    <!--            <p class="card-text">-->
    <!--              This is a wider card with supporting text below as a natural-->
    <!--              lead-in to additional content. This content is a little bit-->
    <!--              longer.-->
    <!--            </p>-->
    <!--            <div class="d-flex justify-content-between align-items-center">-->
    <!--              <div class="btn-group">-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  View-->
    <!--                </button>-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  Edit-->
    <!--                </button>-->
    <!--              </div>-->
    <!--              <small class="text-body-secondary">9 mins</small>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </Slide>-->
    <!--    <Slide>-->
    <!--      <div class="col" style="width: 20vw">-->
    <!--        <div class="card shadow-sm">-->
    <!--          <img src="https://picsum.photos/100" alt="img" />-->
    <!--          <div class="card-body">-->
    <!--            <p class="card-text">-->
    <!--              This is a wider card with supporting text below as a natural-->
    <!--              lead-in to additional content. This content is a little bit-->
    <!--              longer.-->
    <!--            </p>-->
    <!--            <div class="d-flex justify-content-between align-items-center">-->
    <!--              <div class="btn-group">-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  View-->
    <!--                </button>-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  Edit-->
    <!--                </button>-->
    <!--              </div>-->
    <!--              <small class="text-body-secondary">9 mins</small>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </Slide>-->
    <!--    <Slide>-->
    <!--      <div class="col" style="width: 20vw">-->
    <!--        <div class="card shadow-sm">-->
    <!--          <img src="https://picsum.photos/101" alt="img" />-->
    <!--          <div class="card-body">-->
    <!--            <p class="card-text">-->
    <!--              This is a wider card with supporting text below as a natural-->
    <!--              lead-in to additional content. This content is a little bit-->
    <!--              longer.-->
    <!--            </p>-->
    <!--            <div class="d-flex justify-content-between align-items-center">-->
    <!--              <div class="btn-group">-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  View-->
    <!--                </button>-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  Edit-->
    <!--                </button>-->
    <!--              </div>-->
    <!--              <small class="text-body-secondary">9 mins</small>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div></Slide-->
    <!--    >-->
    <!--    <Slide>-->
    <!--      <div class="col" style="width: 20vw">-->
    <!--        <div class="card shadow-sm">-->
    <!--          <img src="https://picsum.photos/102" alt="img" />-->
    <!--          <div class="card-body">-->
    <!--            <p class="card-text">-->
    <!--              This is a wider card with supporting text below as a natural-->
    <!--              lead-in to additional content. This content is a little bit-->
    <!--              longer.-->
    <!--            </p>-->
    <!--            <div class="d-flex justify-content-between align-items-center">-->
    <!--              <div class="btn-group">-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  View-->
    <!--                </button>-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  Edit-->
    <!--                </button>-->
    <!--              </div>-->
    <!--              <small class="text-body-secondary">9 mins</small>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </Slide>-->
    <!--    <Slide>-->
    <!--      <div class="col" style="width: 20vw">-->
    <!--        <div class="card shadow-sm">-->
    <!--          <img src="https://picsum.photos/104" alt="img" />-->
    <!--          <div class="card-body">-->
    <!--            <p class="card-text">-->
    <!--              This is a wider card with supporting text below as a natural-->
    <!--              lead-in to additional content. This content is a little bit-->
    <!--              longer.-->
    <!--            </p>-->
    <!--            <div class="d-flex justify-content-between align-items-center">-->
    <!--              <div class="btn-group">-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  View-->
    <!--                </button>-->
    <!--                <button type="button" class="btn btn-sm btn-outline-secondary">-->
    <!--                  Edit-->
    <!--                </button>-->
    <!--              </div>-->
    <!--              <small class="text-body-secondary">9 mins</small>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </Slide>-->
    <Slide>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="card card-personal mb-4 services-card">
          <div class="view cardimage">
            <img
              class="card-img-top"
              src="//www.eofis.com.tr/ass/img/hizmet/3-toplanti-odasi.jpg"
              alt="Toplantı Odası"
            />
            <a href="/toplanti-odasi">
              <div
                class="mask rgba-black-slight waves-effect waves-light"
              ></div>
            </a>
          </div>

          <div class="card-body">
            <a href="/toplanti-odasi" class="main_red-text">
              <div class="card-title">Toplantı Odası</div>
            </a>

            <p class="card-meta font-weight-bold">
              Saatlik, günlük, haftalık, aylık...
            </p>

            <p class="card-text freeheight cardaciklama">
              eOfis Toplantı Salonlarımız, Türkiye’de 13 şehirde 55 lokasyonda
              kolaylıkla ulaşabileceğiniz, merkezi bölgelerde...
            </p>
            <hr />

            <a
              href="/toplanti-odasi"
              class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
            >
              <span>Detaylı İncele</span
              ><span><i class="fa fa-chevron-right pl-2"></i></span>
            </a>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<style scoped lang="scss"></style>
