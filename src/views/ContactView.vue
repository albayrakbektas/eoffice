<script>
export default {
  name: "ContactView",
};
</script>

<template>
  <div class="container mt-0 mt-lg-5 mb-5 pt-0 pt-lg-5">
    <section class="mb-5 pt-0 pb-5 text-center">
      <h1 class="h1-responsive mt-3 mb-5">İletişim</h1>
      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <div class="text-start">
            <p><b>Ünvan: </b>Akdeniz Business Center Ltd. Şti.</p>
            <p>
              <b>Adres: </b>Camişerif mahalle 5212 sokak uysal apt zemin kat no
              1 Akdeniz Mersin
            </p>
          </div>
          <form class="row g-3 text-start">
            <div class="col-md-6">
              <label for="inputName4" class="form-label">Name</label>
              <input type="text" class="form-control" id="inputName4" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-12">
              <label for="inputPhone" class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                id="inputPhone"
                placeholder="+905555"
              />
            </div>
            <div class="col-12">
              <label for="inputSubject" class="form-label">Subject</label>
              <input
                type="text"
                class="form-control"
                id="inputSubject"
                placeholder="Type your subject"
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>

        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="bi bi-geo-alt-fill display-1 text-primary"></i>
              <p>
                <a
                  href="https://maps.app.goo.gl/6DAkbSfP64Sj4drW9"
                  target="_blank"
                  >Akdeniz, Mersin</a
                >
              </p>
            </li>
            <li class="mt-4">
              <i class="bi bi-phone mt-5 display-1 text-primary"></i>
              <p><a href="tel:0537 600 1153">0537 600 1153</a></p>
            </li>
            <!--            <li>-->
            <!--              <i class="bi bi-envelope mt-5 display-1"></i>-->
            <!--              <p><a href="mailto:eofis@eofis.com.tr">eofis@eofis.com.tr</a></p>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
