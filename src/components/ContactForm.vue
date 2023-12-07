<template>
  <section class="reg-form">
    <div class="reg-header" v-show="!removeHeader">

    </div>
    <div class="container">
      <div class="form">
        <div class="personal-data-container">
          <label>Full Name</label>
          <input type="text" placeholder="Type here">
        </div>
        <div class="personal-data-container">
          <label>Email</label>
          <input type="email" placeholder="Type here">
        </div>
        <div class="why-contacting">
          <h4>Why are you contacting us?</h4>
          <div>
            <input type="checkbox"/>
            <label>Web Design</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Mobile App Design</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Collaboration</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Others</label>
          </div>
        </div>
        <div class="your-budget">
          <h4>Your Budget</h4>
          <h6>Slide to indicate your budget range</h6>
          <input type="range">
        </div>
        <div class="send-message">
          <label>Your message</label>
          <input type="text" placeholder="Type here">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    removeHeader: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.reg-form {
  .reg-header {
    height: 600px;
    background-image: url("../../assets/images/registration-header.png");
    background-repeat: no-repeat;
  }

  .container {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    border-left: 1px solid #262626;
    border-right: 1px solid #262626;
    border-bottom: 1px solid #262626;
    .form {
      padding: 80px;
      border: 1px solid #262626;
      border-bottom: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto;
      gap: 40px;

      .personal-data-container {
        display: flex;
        padding: 24px 40px;
        flex-direction: column;
        justify-content: center;

        border-radius: 8px;
        border: 1px solid var(--grey-15, #262626);
        background: rgba(36, 36, 36, 0.50);

        label {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          margin-bottom: 20px;
        }
      }

      .why-contacting {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        padding: 40px;
        gap: 24px;
        grid-column: 1/3;

        border-radius: 12px;
        border: 1px solid var(--grey-15, #262626);
        background: rgba(36, 36, 36, 0.50);

        h4 {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          grid-column: 1/3;
          margin-bottom: 16px;
        }

        div {
          color: #FDFFFA;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;

          input {
            margin-right: 10px;
          }
        }
      }

      .your-budget {
        display: flex;
        padding: 40px;
        flex-direction: column;
        align-items: flex-start;
        grid-column: 1/3;

        border-radius: 12px;
        border: 1px solid var(--grey-15, #262626);
        background: rgba(36, 36, 36, 0.50);

        h4 {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          margin-bottom: 14px;
        }

        h6 {
          color: #E6E6E6;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: -0.108px;
          margin-bottom: 60px;
        }

        input {
          width: 100%;
        }
      }

      .send-message {
        display: flex;
        padding: 24px 40px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        grid-column: 1/3;

        border-radius: 8px;
        border: 1px solid var(--grey-15, #262626);
        background: rgba(36, 36, 36, 0.50);

        label {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          margin-bottom: 20px;
        }

        input {
          width: 100%;
        }
      }
    }

    button {

    }
  }
}

input {
  border: none;
  background: transparent;
  border-bottom: 1px solid #333;

  color: #656567;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

input[type=range]  {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
  height: 4px;
  background: #333;
}
input[type=range]::-webkit-slider-thumb {
  cursor: pointer;
  width:15px;
  height: 15px;
  -webkit-appearance: none;
  margin-top: -4px;

  border-radius: 30px;
  background: var(--grey-30, #4C4C4D);
}

input[type=range]::-moz-range-track {
  height: 4px;
  background: #333;
}
input[type=range]::-moz-range-thumb {
  border-radius: 30px;
  background: var(--grey-30, #4C4C4D);
}
</style>