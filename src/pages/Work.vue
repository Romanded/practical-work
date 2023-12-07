<template>
  <div class="page-body">
    <div class="page-header"></div>
    <div class="block-title">
      <h3 class="title">At SquareUp</h3>
      <p>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
      <div class="chip">Here are ten examples of our notable works:</div>
    </div>
    <div class="list">
      <div class="list-item" :key="n" v-for="n of 10">
        <div class="list-item-title">E-Commerce Platform for Fashion Hub</div>
        <div class="list-item-container">
          <div class="work-image-container">
            <img class="work-image" src="../../assets/images/work-image.png"/>
          </div>
          <div class="heading">
            <div class="title-container">
              <h5 class="title">Chic Boutique</h5>
              <div class="chip">htttps:/www.chicboutique.com</div>
            </div>
            <div class="icon">
              <img src="../../assets/images/arrow-right-up.svg"/>
            </div>
          </div>
          <p class="item-content">We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
        </div>
      </div>
    </div>
    <div class="page-footer">

    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage"
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 372px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/our-works-header.png");
  }
  .page-footer {
    height: 624px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/lets-bring-ideas.png");
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
    grid-template-rows: auto auto auto auto auto;
    &-item {
      border: 1px solid #262626;
      &-title {
        padding: 30px 50px;
        color: #98989A;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 30px;
        border-bottom: 1px solid #262626;
      }

      &-container {
        padding: 0 50px 100px 50px;
        .work-image-container {
          margin-bottom: 30px;
          display: flex;
          .work-image {
            width: 100%;
            height: 100%;
          }
        }

        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title-container {
            .title {
              color: #E6E6E6;
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
              letter-spacing: -0.144px;
              margin-bottom: 10px;
            }

            .chip {
              display: flex;
              padding: 10px 14px;
              color: #98989A;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              letter-spacing: -0.12px;
              border-radius: 8px;
              background: #262626;
              margin-bottom: 30px;
            }
          }

          .icon {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #2E2E2E;
            background: linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);
          }
        }

        .item-content {
          color: #98989A;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }
}
</style>