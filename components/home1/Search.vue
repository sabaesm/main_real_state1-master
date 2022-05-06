<template>
    <div>
    
    <div class="select_box d-flex flex-row justify-space-between align-center justify-center">
    <span class="Area">منطقه:</span>
    <div class="place">
    <span >منطقه شما</span>
 
    <select class="ui dropdown">
  <option value="0" > q
  <span class="first"></span>
  </option>
  <option value="1">Gender</option>
  <option value="2">Male</option>
  <option value="3">Female</option>
</select>
</div>
    </div>
    </div>
</template>
<style  scoped>

.first{
transition: all ease-in-out .3s;

}

.first::before{
content: '';
width: 10px;
height: 2px;
border-left: 2px solid  #3366cc!important;
transform: rotate(-180deg);
margin-top: 10px;
margin-left:10px;
background-color: #3366cc!important;
display: block;

padding-top: 0;
margin: 0;
margin-right: 10px!important;
}
.first:hover:before{
transform: rotate(45deg);
margin-top: 0!important;
}
.first:hover:after{
transform: rotate(-45deg);
margin-top: 0!important;
}
.first::after{
content: '';
padding-top: 0;
margin: 0!important;
width: 11px;
height: 2px;
border-right: 2px solid  #3366cc!important;
transform: rotate(180deg);
background-color: #3366cc!important;
display: block;
}
.select_box{
background-color: #FFFF;
width: 270px;
padding: 10px;
box-shadow: 0px 0px 52px -10px rgba(0, 0, 0, 0.29);
border-radius: 9px;
}
.Area{
font-size: 17px;
font-weight: 800;
line-height: 28px;
letter-spacing: -0.01em;
}
.place :first-child{
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: -0.05em;
color: rgba(0, 0, 0, 0.37);
}
</style>
