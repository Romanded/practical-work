<template>
  <div class="page-body">
    <div class="page-header"></div>
    <section class="services-section">
      <div class="list">
        <div class="list-item" :key="n" v-for="n of 3">
          <div class="block-title">
            <h3 class="title">Design</h3>
            <p>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
            <div class="chip">Our design services include:</div>
          </div>
          <div class="heading"><h5>User Experience (UX) Design</h5></div>
          <div class="content" :key="n" v-for="n of 12">
            <div class="icon">
              <img src="../../assets/images/services-item-icon.svg" alt="">
            </div>
            <p>
              Intuitive and Visually Appealing Interface Design
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="page-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent'
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 336px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/our-services.png");
  }

  .page-footer {
    height: 624px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/lets-bring-ideas.png");
  }

  .services-section {
    .list {

      &-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;

        .block-title {
          grid-column: 1/5;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 120px 300px 50px 50px;

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

        .heading {
          grid-column: 1/5;
          padding: 50px 0 50px 50px;
          border: 1px solid #262626;
          h5 {
            color: #98989A;
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }

        .content {
          border-left: 1px solid #262626;
          border-right: 1px solid #262626;
          border-bottom: 1px solid #262626;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 50px;

          .icon {
            padding: 24px;
            border-radius: 10px;
            border: 1px solid #2E2E2E;
            background: linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);
            margin-bottom: 30px;
          }

          p {
            color: #E6E6E6;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            letter-spacing: -0.12px;
          }
        }
      }
    }
  }
}
</style>