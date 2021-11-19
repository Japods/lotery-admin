<template>
  <div class="gold-container" id="awards">
    <div class="view-content flex-col home-content my-12" align="center">
      <div class="title">
        <span class="title-awards">Premios del sorteo</span> <br />
        <span class="subtitle-awards"
          >Puedes ganar 7 premios segun la cantidad de asiertos en tus
          tickets</span
        >
      </div>
      <div class="flex lg:flex-row flex-col mt-10 px-5 lg:mt-32">
        <div class="left lg:w-3/6 w-full" align="left">
          <div
            class="item my-10 f-14 lg:f-18"
            v-for="(element, index) in items"
            :key="index"
          >
            * {{ element.title }}
          </div>
          <br />
        </div>
        <div class="left lg:w-3/6 w-full" align="center">
          <img
            src="@/assets/images/Landing/phone_awards.png"
            class="mb-5 relative"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: function () {
    return {
      items: [
        {
          id: 1,
          title:
            "El premio se divide entre los ganadores existentes segun los asciertos",
        },
        {
          id: 2,
          title: "Mientras mas numeros aciertes mayor es el premio en Tokens",
        },
        {
          id: 3,
          title:
            "Pudes generar cuantos tickets quieras, para aumentar tus probabilidades de ganar",
        },
        {
          id: 4,
          title:
            "No hay un factor de orden en los numeros seleccionados. Mucho mas sencillo de ganar!",
        },
        {
          id: 5,
          title:
            "Si no hay ganadores el premio se va acumulando hasta que un ganador sea el afortunado dando asi el reinicio del pote!!",
        },
        {
          id: 6,
          title:
            "Si no hay ganadores el premio se va acumulando hasta que un ganador sea el afortunado dando asi el reinicio del pote!!",
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
}

.gold-container {
  background: #201a57;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
}

.title-awards {
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 46px;
}
.subtitle-awards {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.item {
  line-height: 25px;
}

.f-14 {
  font-size: 14px;
}

.f-18 {
  font-size: 18px !important;
}

.body-awards {
  display: flex !important;
}
</style>
