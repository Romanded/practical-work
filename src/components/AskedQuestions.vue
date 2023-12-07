<template>
  <section class="asked-questions">
    <div class="section-image">
      <div class="fog"></div>
      <img style="width: 100%; height: 100%" src="../../assets/images/asked-questions.png"/>
    </div>
    <div class="asked-questions-content">
      <div class="asked-questions-content-item" :class="{show: n.show}" :key="n.id" v-for="n of items">
        <div class="row">
          <div class="item-number">0{{n.id}}</div>
          <h6 class="item-title">How can SquareUp help my business?</h6>
          <img class="item-plus" src="../../assets/images/plus.svg" @click="n.show = !n.show"/>
        </div>
        <p class="item-content">SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AskedQuestions',
  data() {
    return {
      items: [{id : 1, show: false}, {id : 2, show: false} ,{id : 3, show: false}, {id : 4, show: false}, {id : 5, show: false}, {id : 6, show: false}, {id : 7, show: false}, {id : 8, show: false}]
    }
  }
}
</script>

<style lang="scss" scoped>
.asked-questions {

  &-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 80px 0;
    max-height: 900px;
    border-right: 1px solid #262626;
    border-left: 1px solid #262626;

    &-item {
      padding: 30px 50px;

      @media screen and (max-width: 1440px){
        padding: 24px 40px;
      }

      &.show {

        .item-content {
          display: flex;
        }

        .row {
          margin-bottom: 24px;
          .item {

            &-number {
              color: #C5FF66;
            }

            &-title {
              color: #C5FF66;
            }

            &-plus {
              animation: rotate 1s forwards;

              @keyframes rotate {
                to {
                  rotate: 45grad;
                  background: #C5FF66;
                }
              }
            }
          }
        }
      }
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {

        &-number {
          display: flex;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #2E2E2E;
          background: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);

          color: #FFF;
          text-align: center;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
          margin-right: 30px;

          @media screen and (max-width: 1440px){
            font-size: 24px;
            padding: 16px;
          }
        }

        &-title {
          margin-left: 0;
          margin-right: auto;
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;

          @media screen and (max-width: 1440px){
            font-size: 22px;
          }
        }

        &-plus {

          @media screen and (max-width: 1440px){
            width: 26px;
            height: 26px;
          }
        }
      }
    }

    .item-content {
      display: none;
      color: #E6E6E6;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      max-width: 500px;

    }
  }
}

</style>