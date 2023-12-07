<template>
  <div class="page-body">
    <div class="page-header"></div>
    <div class="block-title">
      <h3 class="title">At SquareUp</h3>
      <p>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
      <div class="chip">Here are ten examples of our notable works:</div>
    </div>
    <div class="list">
      <div class="list-item" :key="n" v-for="n of 8">
        <div class="list-item-title">
          <h2 class="title">0{{n}}</h2>
          <h6 class="sub-title">Discovery</h6>
        </div>
        <p>We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.</p>
      </div>
    </div>
    <contact-form/>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ProcessPage",
  components: {ContactForm}
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 336px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/process-header.png");
  }
  .block-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 120px 300px 50px 50px;
    border-left: 1px solid #262626;
    border-right: 1px solid #262626;

    .title {
      color: #FFF;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 14px;
    }

    p {
      color: #E6E6E6;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.108px;
      margin-bottom: 50px;
    }

    .chip {
      display: flex;
      padding: 12px 14px;
      color: #FFF;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 8px;
      background: #262626;
    }
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;

    &-item {
      border: 1px solid #262626;
      padding: 100px 50px;

      &-title {
        display: flex;
        align-items: center;
        padding-bottom: 26px;
        margin-bottom: 50px;

        .title {
          color: #D8FF99;
          font-size: 150px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-right: 24px;
        }

        .sub-title {
          color: #98989A;
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }

      p {
        color: #98989A;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
}
</style>