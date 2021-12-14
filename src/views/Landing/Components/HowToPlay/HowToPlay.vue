<template>
  <div
    class="view-content flex flex-col home-content mb-12 pt-24"
    id="howToPlay"
    align="center"
  >
    <div class="title-landing hidden lg:block mb-16">¿ Como jugar ?</div>
    <div class="items hidden lg:flex mt-10">
      <div class="w-1/2 flex container-text" align="left">
        <div class="ball">1</div>
        <div class="pl-6 flex flex-1 flex-col">
          <span class="title-step">Compra Tokens</span>
          <div>
            Recarga tu wallet a traves de pago movil o Binance rapidamente!
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img src="@/assets/images/Landing/wallets.png" alt="" />
      </div>
    </div>
    <div class="items hidden lg:flex mt-10">
      <div class="w-1/2">
        <img src="@/assets/images/Landing/ticket.png" alt="" />
      </div>
      <div class="w-1/2 flex container-text" align="left">
        <div class="ball">2</div>
        <div class="pl-6 flex flex-1 flex-col">
          <span class="title-step">Arma tu tickets</span>
          <div>
            Seleciona 6 numeros de tu preferencia entre el 1 y el 49 junto a un
            septimo numero entre 1 y el 99
          </div>
        </div>
      </div>
    </div>
    <div class="items hidden lg:flex mt-10">
      <div class="w-1/2 flex container-text" align="left">
        <div class="ball">3</div>
        <div class="pl-6 flex flex-1 flex-col">
          <span class="title-step">Espera los resultados</span>
          <div>
            Todos los sabados a las 8:00pm Estaremos dando el resultado del
            ganador
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img src="@/assets/images/Landing/contest.png" alt="" />
      </div>
    </div>
    <div class="items hidden lg:flex mt-10 mb-10">
      <div class="w-1/2">
        <img src="@/assets/images/Landing/withdraw.png" alt="" />
      </div>
      <div class="w-1/2 flex container-text" align="left">
        <div class="ball">4</div>
        <div class="pl-6 flex flex-1 flex-col">
          <span class="title-step">Retira tus tokens</span>
          <div>Retira tus tokens cuando quieras y hacia donde quieras</div>
        </div>
      </div>
    </div>
    <div class="lg:hidden block my-auto pb-24">
      <div class="title-landing lg:hidden block">¿ Como jugar ?</div>
      <Carousel :loop="true" :autoplay="true" class="mt-24 w-full" :perPage="1">
        <Slide
          v-for="(slide, index) in sliders"
          :key="index"
          :data-index="index"
          align="center"
          data-name="first"
        >
          <div class="flex flex-col h-full">
            <div class="h-full">
              <img
                loading="load"
                width="200"
                :src="require('@/assets/images/Landing/' + slide.img)"
                alt=""
              />
            </div>
            <div class="content px-5 md:px-20 mx-auto">
              <h1 class="text-center mt-5">{{ slide.title }}</h1>
              <p class="text-center font-thin text-white mt-2">
                {{ slide.subtitle }}
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { Carousel, Slide },
  data: function () {
    return {
      sliders: [
        {
          title: "Compra Tokens",
          subtitle:
            "Recarga tu wallet a traves de pago movil o Binance rapidamente!",
          img: "wallets.png",
        },
        {
          title: "Arma tu tickets",
          subtitle:
            "Recarga tu wallet a traves de pago movil o Binance rapidamente!",
          img: "ticket.png",
        },
        {
          title: "Espera los resultados",
          subtitle:
            "Todos los sabados a las 8:00pm Estaremos dando el resultado del ganador",
          img: "contest.png",
        },
        {
          title: "Retira tus tokens",
          subtitle: "Retira tus tokens cuando quieras y hacia donde quieras",
          img: "withdraw.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-content {
  height: auto !important;
  max-width: 1200px;
  min-height: 100vh;
}

.items {
  align-items: center;
  height: 60vh;
  justify-content: center;
}

.title-landing {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 46px;
}

.ball {
  box-shadow: inset 0px 6px 10px rgb(56 44 44 / 35%);
  background: white;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: #1b1454;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-step {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
}

.container-text {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
