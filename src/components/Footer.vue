<template>
  <div class="footer">
    <div class="container">
      <div class="top-bar">
        <nav>
          <router-link to="/">
            <div class="logo">
              <img src="../../assets/images/Logo.svg"/>
              <img src="../../assets/images/SquareUp.svg">
            </div>
          </router-link>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/work">Work</router-link>
            </li>
            <li>
              <router-link to="/process">Process</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/careers">Careers</router-link>
            </li>
          </ul>
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
        </nav>
      </div>
      <div class="bottom-bar">
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
        <div class="rights">
          © 2023 SquareUp. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
.footer {
  .container {
    display: flex;
    flex-direction: column;
    max-width: 1760px;
    padding: 0 80px;
    margin: 0 auto;

    .top-bar {
      padding: 50px 0;
      border-bottom: 1px solid #262626;

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
          display: flex;
          align-items: center;

          img:first-child {
            margin-right: 10px;
          }
        }

        ul {
          display: flex;
          align-items: center;
          align-self: stretch;
          color: #E6E6E6;
          list-style-type: none;

          li {
            margin-right: 30px;
            display: flex;
            align-items: center;

            &:active {
              display: flex;
              padding: 14px 24px;
              border-radius: 8px;
              background: #262626;
            }

            a {
              color: #E6E6E6;
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }

        .social {
          display: flex;
          align-items: center;
          border-radius: 12px;
          border: 1px solid #262626;
          padding: 14px 0 14px 14px;

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

    .bottom-bar {
      padding: 50px 0;
      display: flex;
      justify-content: space-between;

      .contacts-container {
        display: flex;
        align-items: center;

        .contacts-item {
          display: flex;
          align-items: center;
          margin-right: 30px;
          padding-bottom: 16px;
          border-bottom: 1px solid #262626;

          color: #E6E6E6;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;

          img {
            margin-right: 10px;
          }
        }
      }

      .rights {
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