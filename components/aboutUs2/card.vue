<template>
<div class="medium_container">
<v-col cols="12" class="mainCard  ">
<v-row  class="" >
<v-col cols="12 d-flex">
<v-col cols="6"  md="3"> 
<img class="person_img" src="https://picsum.photos/200"/>
</v-col>
<v-col class="information" cols="6" md="8" >

<span class="name"> اشکان صامتی</span>
<h5 >مدیریت مشاور املاک هوملند</h5>
<p class="mt-4">
لورم ایپسوم متن ساختگی با 
تولید سادگی نامفهوم از صنعت چاپ، و ب
ا استفاده از طراحان گرافیک است، چاپگ
رها و متون بلکه روزنامه و مجله در ست
ون و سطرآنچنان که لازم است، و برای شر
ایط فعلی تکنولوژی مورد نیاز، و کاربر
دهای متنوع با هدف بهبود ابزارهای کار
رها و متون بلکه روزنامه و مجله در ست
ون و سطرآنچنان که لازم است، و برای شر
ایط فعلی تکنولوژی مورد نیاز، و کاربر
دهای متنوع با هدف بهبود ابزارهای کار
بردی می باشد،</p> 

</v-col>
</v-col>
</v-row>
<v-row   class=" flex-column-reverse modern_section  flex-lg-row flex-md-row " >
<v-col lg="7" md="7" sm="12"    >
<h3 class="modern_title">
ما مدرن ترین خدمات املاک و مستغلات را ارائه می دهیم.</h3>
<p class="mt-4">
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
</p>
</v-col>
<v-col lg="5" md="5" sm="12"> 
<img class="modern_pic" src="https://picsum.photos/200"/> 
</v-col>
</v-row>
</v-col>
 </div>
</template>
<script>
import slider from './slider.vue'
export default ({
   layouts:'defualt',
   component:{
slider

   }
})
</script>
<style >


</style>
<style scoped>
.mainCard{
    background-color: #ffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
    margin-top: -80px ;
}
img{
    width: 80%;
    border-radius: 20px;
}
.mainCard{
    position: relative;
    padding: 30px;
}
.bio{
    position: absolute;
    top: 10%;
    right:  -10%;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
}
.bio .test{
    width: 20%;
    border-radius: 100%;
    background-color: rgb(255, 255, 255, .5);
    padding:  5px;
}
.bio{
      color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 400; 
}
 .name{
    color: rgb(0, 0, 0);
font-size: 25px;
font-style: normal;
font-weight: 800;
line-height: 41px;
letter-spacing: 0.01em;
text-align: right;
}
.bio .test img{
  width: 100%;
    border-radius: 100%;
    border: 5px solid #ffff;
}
.modern_title{
font-size: 25px;
font-style: normal;
font-weight: 800;
line-height: 41px;
letter-spacing: -0.03em;
text-align: right;
color: rgb(0, 0, 0);
margin-top: 0;

}
p{
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 30px !important;
letter-spacing: 0.01em;
color: #9B9B9B;
padding: 0;
}
h5{
color: #646464;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0.01em;
padding: 5px;
}
.desctiption{
    position: absolute;
    width: 90%;
    bottom: 5%;
    left: 5%;
    text-align: right;
    line-height: 5px;
}
.modern_section{
display: flex;
align-items: flex-start;
width: 100%;
margin-top: 30px;
}
.information{
    padding-top: 20px;
}
img{
width: 100%!important;
}
.modern_pic{
height: 300px;
}
.person_img{
width: 100%;
height: 300px;
}
@media only screen and (max-width: 1300px){
.modern_title{
font-size: 16px!important;
}
}
@media only screen and (max-width: 960px){
.mainCard p{
font-size: 15px;
}
  h5{
font-size: 9px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0.01em;
}
.mainCard h3 {
text-align: center !important;
}
}
@media only screen and (max-width: 768px) {
 .mainCard p {
font-size: 13px !important;
font-weight: 400;
line-height: 24px !important;
letter-spacing: -0.02em;
  }
  h5{
font-size: 14px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0.01em;
}
.modern_title{
font-size: 15px !important;
font-weight: 800;
line-height: 21.5px;
letter-spacing: -0.03em;
text-align: center;
}
.name{
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: 23px;
letter-spacing: 0.01em;
}
.mainCard{}
}
@media only screen and (max-width:426px)
 {
    .mainCard p {
font-size: 9px !important;
font-weight: 400;
line-height: 20px !important;
letter-spacing: -0.02em;
  }
  h5{
font-size: 10px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0.01em;
text-align: right;
}
.modern_title{
font-size: 13px !important;
font-weight: 800;

}
}

</style>