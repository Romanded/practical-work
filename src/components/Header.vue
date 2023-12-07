<template>
  <header class="header">
    <div class="container">
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
        <router-link to="/contact-us">
          <button>Contact Us</button>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
  border-bottom: 1px solid #262626;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  max-height: 100px;
  z-index: 5;
  background: #1A1A1A;

  .container {
    max-width: 1760px;
    padding: 0 80px;
    margin: 20px auto;

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
      button {
        display: flex;
        padding: 16px 24px;
        align-items: center;
        border-radius: 8px;
        background: #9EFF00;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        color: #262626;
        white-space: nowrap;
      }
    }
  }
}
</style>