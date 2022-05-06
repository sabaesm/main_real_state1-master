<template>

  <div class="main_section">
    <div class="overlays "></div>
   <div class="medium_container">
    <div class="header-info  mb-5  " >
     <v-col cols="12">
      <h5 class="pb-4">برترین مشاورین املاک خاور میانه</h5>
      <h2 class="pb-4 about_header">درباره ما</h2>
      <p class="pb-2  aboutus_text ">
        <span >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.1922 0.580397C8.60261 0.167154 7.85717 -0.0158061 7.13855 0.00106613C6.41993 0.0179381 5.68357 0.235705 5.11429 0.679053L5.11395 0.679316L1.32891 3.63249L1.32872 3.63263C0.976198 3.90723 0.674223 4.30337 0.449949 4.72428C0.427195 4.76698 0.405242 4.80994 0.384118 4.85305C0.154823 5.32098 0 5.85419 0 6.34414V11.5549C0 13.4486 1.53944 15 3.4337 15H3.49823H5.40636C5.582 15 5.72438 14.8574 5.72438 14.6816V14.0447V13.6925V13.2148V10.6674C5.72438 10.4915 5.86676 10.349 6.0424 10.349H8.58657C8.76221 10.349 8.90459 10.4915 8.90459 10.6674V11.9411V13.2148V13.6925V14.0109V14.0447V14.6816C8.90459 14.8574 9.04698 15 9.22261 15H11.4488H11.5663C13.2231 15 14.6094 13.8128 14.9301 12.2515C14.9759 12.0285 15 11.7978 15 11.5619V6.44259C15 5.92022 14.8287 5.35893 14.5745 4.87142C14.3205 4.3841 13.9589 3.92303 13.532 3.62499L13.5316 3.62469L9.1922 0.580397ZM11.5663 14.0447H10.0177C9.84203 14.0447 9.69965 13.9021 9.69965 13.7263V10.6674C9.69965 9.96394 9.13011 9.39368 8.42756 9.39368H6.20141C5.49886 9.39368 4.92933 9.96394 4.92933 10.6674V13.7263C4.92933 13.9021 4.78695 14.0447 4.61131 14.0447H3.4337C2.0693 14.0447 0.954064 12.924 0.954064 11.5549V6.34414C0.954064 6.03948 1.05558 5.6515 1.24064 5.27383C1.42561 4.89636 1.67095 4.57634 1.91464 4.38655L1.91498 4.38629L5.70002 1.43311L5.70028 1.43291C6.03173 1.17492 6.47718 1.01331 6.95459 0.968221C7.02279 0.961782 7.09165 0.95772 7.16091 0.956094C7.7152 0.94308 8.25145 1.08711 8.64508 1.363L12.9851 4.40774L12.9861 4.40841C13.2543 4.59559 13.5246 4.92196 13.7287 5.31348C13.7543 5.36241 13.7783 5.41162 13.801 5.46092C13.9593 5.80599 14.0459 6.15515 14.0459 6.44259V11.5619C14.0459 11.7321 14.0285 11.8985 13.9954 12.0594C13.7634 13.1861 12.7608 14.0447 11.5663 14.0447Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="px-1 "> /</span>
         درباره ما
      </p>
      </v-col>
    </div>
   </div >
  </div>
</template>
<script></script>

<style scoped>
h5 {
    font-style: Bold;
    font-size: 23px;
    letter-spacing: -3.5%;
   
  }
  .about_header {
    font-style: Bold;
    font-size: 50px!important;
    font-weight: 800;
    vertical-align: Top;
    letter-spacing: -3.5%;
  
  }
  
 .header-info
  P,
  h2,
  h5 {
    color: #ffff!important;
   
  }
  .main_section {
    background-image: url("~/assets/images/headerimg.png");
    object-fit: cover;
    height: auto;
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 0;
  }
  .overlays {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.445);

  }
  .header-info {
  width: 100%  !important;
    padding-bottom: 60px !important;
    z-index: 2;
  }
  .header-info p {
    color: #ffff !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.025em;
    text-align: right;
    }

    /* mobile mode*/
    @media only screen and (max-width: 600px) {
  h5{
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.035em;
  }
  .about_header{
font-size: 25px !important;
font-style: normal;
font-weight: 800 !important;
line-height: 31px !important;
}
 
.aboutus_text{

font-size: 11px !important;

font-weight: 400 !important;
line-height: 18px !important;
letter-spacing: -0.025em;

}
}
</style>
