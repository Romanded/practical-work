<template>
  <div class="page-body">
    <div class="page-header"></div>
    <div class="block-title">
      <h3 class="title">Welcome to SquareUp, where talent meets opportunity!</h3>
      <p>
        At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team
        members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're
        ready to make a difference and contribute to cutting-edge projects, we invite you to explore career
        opportunities with us.
      </p>
      <div class="chip">Here are ten examples of our notable works:</div>
    </div>
    <div class="list">
      <div class="about-card" :key="n" v-for="n of 4">
        <div class="about-card-title">
          <h4>Innovative and Impactful Projects</h4>
        </div>
        <p class="about-card-content">
          At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital
          landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of
          a team that creates products that make a difference.
        </p>
      </div>
      <div class="openings-block-title">
        <h4 class="title">Current Openings</h4>
        <p class="content">
          We are always on the lookout for talented individuals who are passionate about creating exceptional digital
          experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's
          mission, we encourage you to explore our open positions.
        </p>
      </div>
      <div class="opening-container" :key="n" v-for="n of 4">
        <div class="heading">Design Job Openings</div>
        <div class="opening" :key="n" v-for="n of 3">
          <div class="icon">
            <img src="../../assets/images/pazzle.svg"/>
          </div>
          <h6 class="opening-title">Engineering</h6>
          <p class="opening-content">
            Our engineering team combines technical expertise with a passion for innovation to build robust and scalable
            digital solutions. We leverage the latest technologies and best practices to deliver high-performance
            applications tailored to your specific needs.
          </p>
          <button class="opening-btn">Learn More</button>
        </div>
      </div>
    </div>
    <WelcomeSquareUp/>
  </div>
</template>

<script>
import WelcomeSquareUp from "@/components/WelcomeSquareUp.vue";

export default {
  name: "CareersPage",
  components: {WelcomeSquareUp}
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 336px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/join-our-team.png");
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(21, auto);

    .about-card {
      grid-column: 1/4;
      padding: 100px 50px;
      border: 1px solid #262626;

      &:nth-child(even) {
        grid-column: 4/7;
      }


      &-title {
        color: #D8FF99;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
      }

      &-content {
        color: #98989A;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }

    .openings-block-title {
      grid-column: 1/7;
      padding: 120px 50px 50px 50px;
      border: 1px solid #262626;

      .title {
        color: #FFF;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 14px;
      }

      .content {
        color: #E6E6E6;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.108px;
      }
    }

    .heading {
      grid-column: 1/7;
      padding: 50px 0 50px 50px;
      border: 1px solid #262626;
      color: #98989A;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .opening {
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: start;
      border: 1px solid #262626;

      .icon {
        padding: 24px;
        border-radius: 10px;
        border: 1px solid #2E2E2E;
        background: linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);
        margin-bottom: 30px;
      }


      &-title {
        color: #FFF;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: -0.18px;
        margin-bottom: 20px;
      }

      &-content {
        color: #E6E6E6;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.108px;
      }

      &-btn {
        border: none;
        margin-bottom: 0;
        margin-top: auto;
        align-self: stretch;
        display: flex;
        padding: 18px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: #262626;

        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.108px;
      }
    }
  }
}

.opening-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 1/7;
}
</style>