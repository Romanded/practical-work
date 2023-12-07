<template>
  <div class="page-body">
    <div class="page-header"></div>
    <div class="block-title">
      <div class="block-title-container">
        <h3 class="title">About SquareUp</h3>
        <p class="title-content">
          SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
      </div>
      <img src="../../assets/images/about-square-up-image.png"/>
    </div>
    <div class="heading">Our Story</div>
    <div class="list">
      <div class="list-item" :key="n" v-for="n of 6">
        <div class="list-item-title">
          <h2 class="title">0{{n}}</h2>
          <h6 class="sub-title">Design</h6>
        </div>
        <p>
          Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.
        </p>
      </div>
    </div>
    <welcome-square-up/>
  </div>
</template>

<script>
import WelcomeSquareUp from "@/components/WelcomeSquareUp.vue";

export default {
  name: "AboutPage",
  components: {WelcomeSquareUp}
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 366px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/about-us-image.png");
  }

  .block-title {
    display: flex;
    align-items: center;
    padding: 100px 150px;
    border: 1px solid #262626;

    &-container {
      margin-right: 100px;

      .title {
        color: #FFF;
        margin-bottom: 20px;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .title-content {
        color: #E6E6E6;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.12px;
      }
    }
  }

  .heading {
    padding: 100px 50px;
    color: #FFF;
    font-size: 58px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-left: 1px solid #262626;
    border-right: 1px solid #262626;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;

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
          color: #D8FF99;
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
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