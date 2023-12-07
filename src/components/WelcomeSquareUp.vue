<template>
  <div class="container">
    <div class="block-title">
      <img src="../../assets/images/max-logo.svg"/>
      <div class="title-container">
        <h4 class="title">
          Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
        </h4>
        <p class="title-content">
          Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
        </p>
      </div>
    </div>
    <div class="chip-container">
      <div class="heading">Welcome to SquareUp</div>
      <div class="chip">
        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
      </div>
      <button class="start-project">Start Project</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeSquareUp"
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #262626;
  padding: 80px;

  .block-title {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    img {
      margin-right: 40px;
    }

    .title-container {

      .title {
        color: #98989A;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 20px;
      }

      .title-content {
        color: #98989A;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }

  .chip-container {
    padding: 24px 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .heading {
      color: #98989A;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 20px;
    }

    .chip {
      display: flex;
      padding: 14px 20px;
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 8px;
      background: #262626;
    }

    .start-project {
      border: none;
      display: flex;
      margin-right: 0;
      margin-left: auto;
      padding: 18px 34px;
      border-radius: 8px;
      background: #9EFF00;

      color: #1A1A1A;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
  }
}
</style>