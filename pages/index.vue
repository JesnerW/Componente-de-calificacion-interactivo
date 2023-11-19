<template>
  <main>
    <div class="card" :hidden="showThanks">
      <div class="start">
        <img :src="imgStart" alt="icon start" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div class="option">
        <div
          class="start number"
          :class="n.status && 'active'"
          @click="cambiarEstado(n)"
          v-for="n in option"
        >
          {{ n.id }}
        </div>
      </div>
      <button @click="submit" :disabled="buttonDisabled">SUBMIT</button>
    </div>
    <div class="card finish" :hidden="!showThanks">
      <img :src="imgFinish" alt="icon finish" />
      <div class="info">
        You selected {{ selectOption }} out of {{ option.length }}
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import imgStart from "../assets/icon-star.svg";
import imgFinish from "../assets/illustration-thank-you.svg";
interface Options {
  id: number;
  status: boolean;
}
const showThanks = ref(false);
const buttonDisabled = ref(true);
const selectOption = ref(3);
const option = ref<Options[]>([
  { id: 1, status: false },
  { id: 2, status: false },
  { id: 3, status: false },
  { id: 4, status: false },
  { id: 5, status: false },
]);
function cambiarEstado(opt: Options) {
  if (selectOption.value !== 0) {
    option.value[selectOption.value - 1].status = false;
  }
  option.value[opt.id - 1].status = true;
  selectOption.value = opt.id;
  buttonDisabled.value = false;
}
function submit() {
  showThanks.value = true;
}
</script>

<style>
@import url("../assets/style.css");
</style>
