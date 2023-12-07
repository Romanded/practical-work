<template>
  <div class="page-body contact-us">
    <div class="page-header"></div>
    <div class="contacts-container">
      <div class="contacts-item">
        <img src="../../assets/images/mail.svg"/>
        hello@squareup.com
      </div>
      <div class="contacts-item">
        <img src="../../assets/images/phone.svg"/>
        +91 91813 23 2309
      </div>
      <div class="contacts-item">
        <img src="../../assets/images/geo.svg"/>
        Somewhere in the World
      </div>
    </div>
    <contact-form :remove-header="true"/>
    <div class="container">
      <div class="operating-days">
        <h6>Operating Days</h6>
        <div class="chip">Monday to Friday</div>
      </div>
      <div class="social">
        <span class="social-title">Stay Connected</span>
        <div class="social-logo">
          <img src="../../assets/images/twitter.svg"/>
        </div>
        <div class="social-logo">
          <img src="../../assets/images/twitter.svg"/>
        </div>
        <div class="social-logo">
          <img src="../../assets/images/twitter.svg"/>
        </div>
      </div>
    </div>
    <asked-questions/>
    <welcome-square-up/>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import AskedQuestions from "@/components/AskedQuestions.vue";
import WelcomeSquareUp from "@/components/WelcomeSquareUp.vue";

export default {
  name: "ContactUs",
  components: {WelcomeSquareUp, AskedQuestions, ContactForm}
}
</script>

<style lang="scss" scoped>
.page-body {
  .page-header {
    height: 336px;
    border: 1px solid #262626;
    background-image: url("../../assets/images/contact-us.png");
  }

  .contacts-container {
    border: 1px solid #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    .contacts-item {
      display: flex;
      align-items: center;
      margin-right: 30px;
      padding: 18px 24px;
      border-radius: 8px;
      background: #262626;

      color: #E6E6E6;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;

      img {
        margin-right: 10px;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;

    .operating-days {
      justify-content: flex-end;
      padding: 50px 80px 50px 0;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      border-left: 1px solid #262626;

      h6 {
        color: #E6E6E6;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        margin-right: 14px;
      }

      .chip {
        display: flex;
        padding: 12px 24px;
        border-radius: 6px;
        background: #262626;
        color: #E6E6E6;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
      }
    }
    .social {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      border: 1px solid #262626;
      padding: 50px 0 50px 80px;

      &-title {
        margin-right: 20px;
        color: #E6E6E6;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
      }

      &-logo {
        display: flex;
        padding: 19px;
        border-radius: 8px;
        border: 1px solid #2E2E2E;
        background: linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%);
        margin-right: 14px;
      }
    }
  }
}
</style>