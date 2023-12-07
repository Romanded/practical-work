<template>
  <div class="page-body">
    <div class="page-header">
      <h1 class="title">
        A Digital Product Studio<br/>
        that will Work
      </h1>
      <div class="page-header-chips">
        <div class="page-header-chips-container">
          <p>For<span class="chip">Startups</span>,<span class="chip">Enterprise leaders</span>,<span class="chip">Media & Publishers</span>and<span class="chip">Social Good</span></p>
        </div>
      </div>
      <div class="container-contact-btns">
        <div class="contact-btns">
          <button class="our-works">Our Works</button>
          <button class="contact-us">Contact Us</button>
        </div>
      </div>
    </div>
    <div class="companies-container">
      <div class="title-container">
        <h6 class="title">
          Trusted By 250+ Companies
        </h6>
      </div>
      <div class="list">
        <div class="list-item"><img src="../../assets/images/zapier.svg"></div>
        <div class="list-item"><img src="../../assets/images/spotify.svg"></div>
        <div class="list-item"><img src="../../assets/images/zoom.svg"></div>
        <div class="list-item"><img src="../../assets/images/slack.svg"></div>
        <div class="list-item"><img src="../../assets/images/amazon.svg"></div>
        <div class="list-item"><img src="../../assets/images/Adobe.svg"></div>
      </div>
    </div>
    <section class="our-services">
      <div class="section-image">
        <div class="fog"></div>
        <img src="../../assets/images/our-services.png"/>
      </div>
      <div class="our-services-content">
        <div class="our-services-content-item" :key="n" v-for="n of 3">
          <div class="item-logo">
            <img src="../../assets/images/pazzle.svg"/>
          </div>
          <h6 class="item-title">Engineering</h6>
          <p class="item-content">
            Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
          </p>
          <button class="item-btn">Learn More</button>
        </div>
      </div>
    </section>
    <section class="why-chose">
      <div class="section-image">
        <div class="fog"></div>
        <img src="../../assets/images/chose-square-up.png"/>
      </div>
      <div class="why-chose-content">
        <div class="why-chose-content-item" :key="n" v-for="n of 4">
          <div class="row">
            <div class="item-logo">
              <img src="../../assets/images/pazzle.svg"/>
            </div>
            <h6 class="item-title">Expertise</h6>
          </div>
          <p class="item-content">
            Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
    <section class="say-about-us">
      <div class="section-image">
        <div class="fog"></div>
        <img src="../../assets/images/our-clients-about-us.png"/>
      </div>
      <div class="say-about-us-content">
        <div class="say-about-us-content-item" :key="n" v-for="n of 6">
          <p class="item-title">SquareUp has been Instrumental in Transforming our Online Presence. </p>
          <p class="item-content">
            Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.
          </p>
          <div class="item-profile">
            <img src="../../assets/images/Profile.png"/>
            <div class="item-profile-data">
              <span class="profile-name">John Smith</span>
              <span class="profile-role">CEO of Chic Boutique</span>
            </div>
            <button class="item-profile-btn">Open Website</button>
          </div>
        </div>
      </div>
    </section>
    <AskedQuestions/>
    <contact-form/>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import AskedQuestions from "@/components/AskedQuestions.vue";

export default {
  name: "HomePage",
  components: {AskedQuestions, ContactForm},
}
</script>

<style lang="scss" scoped>
.page-body {

  .page-header {
    border-right: 1px solid #262626;
    border-bottom: 1px solid #262626;
    border-left: 1px solid #262626;
    padding-top: 212px;
    padding-bottom: 274px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url("../../assets/images/hero-section.png");

    .title {
      color: #FFF;
      font-size: 68px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 40px;
    }

    &-chips {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;

      &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 40px;
        border-radius: 12px;
        border: 1px solid #262626;
        background: rgba(36, 36, 36, 0.20);
        backdrop-filter: blur(6px);

        p {
          display: flex;
          align-items: center;
          color: #98989A;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          .chip {
            display: flex;
            padding: 12px 14px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background: #262626;

            color: #FFF;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
    .container-contact-btns {
      display: flex;
      justify-content: center;

      .contact-btns {
        display: flex;

        .our-works {
          display: flex;
          padding: 18px 28px;
          align-items: center;
          border-radius: 10px;
          border: 1px solid var(--grey-20, #333);
          background: rgba(36, 36, 36, 0.20);
          backdrop-filter: blur(6px);
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          white-space: nowrap;
          margin-right: 13px;
        }

        .contact-us {
          display: flex;
          padding: 18px 28px;
          align-items: center;
          border-radius: 10px;
          background: #9EFF00;
          color: #262626;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          white-space: nowrap;
        }
      }
    }
  }

  .companies-container {
    position: relative;
    border-right: 1px solid #262626;
    border-bottom: 1px solid #262626;
    border-left: 1px solid #262626;
    background: rgba(36, 36, 36, 0.20);

    .title-container {
      display: flex;
      padding: 20px 34px;
      align-items: flex-start;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -31px;
      border-radius: 100px;
      border: 1px solid #262626;
      background: #1A1A1A;

      .title {
        color: #FDFFFA;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 40px 0;

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
      }
    }
  }

  .our-services {
    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      height: 577px;

      &-item {
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: start;
        border-right: 1px solid #262626;

        &:first-child {
          border-left: 1px solid #262626;
        }

        .item {

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
  }

  .why-chose {

    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      &-item {
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 80px;
        border: 1px solid #262626;

        .row {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
        }

        .item {

          &-logo {
            margin-bottom: 0;
          }

          &-title {
            color: #FFF;
            font-size: 26px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            letter-spacing: -0.156px;
          }

          &-content {
            color: #E6E6E6;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: -0.12px;
          }
        }
      }
    }
  }

  .say-about-us {

    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;

      &-item {
        display: flex;
        flex-direction: column;
        height: 532px;
        padding: 100px 80px;

        .item {

          &-title {
            color: #D8FF99;
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            margin-bottom: 24px;
          }

          &-content {
            color: #E6E6E6;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          }

          &-profile {
            display: flex;
            align-items: center;
            padding: 20px;
            margin-bottom: 0;
            margin-top: auto;
            border-radius: 8px;
            justify-content: space-between;
            border: 1px solid #262626;
            background: rgba(36, 36, 36, 0.20);

            &-data {
              display: flex;
              flex-direction: column;
              margin-left: 18px;
              margin-right: auto;

              .profile {

                &-name {
                  color: #FFF;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 150%;
                }

                &-role {
                  color: #E6E6E6;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%;
                }
              }
            }

            &-btn {
              border: none;
              display: flex;
              padding: 18px 20px;
              border-radius: 8px;
              background: #262626;

              color: #FFF;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%;
            }
          }
        }
      }
    }
  }

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

  .section-image {
    display: grid;

    .fog {
      grid-area: 1/1;
      z-index: 2;
      background-blend-mode: color, normal, overlay;
    }

    img {
      grid-area: 1/1;
      display: flex;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item-logo {
    padding: 24px;
    border-radius: 10px;
    border: 1px solid #2E2E2E;
    background: linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);
    margin-bottom: 40px;
  }
}
</style>