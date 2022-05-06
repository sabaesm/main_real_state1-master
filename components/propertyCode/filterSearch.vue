<template>
<v-app>
<div>
<v-col cols="12" class="pa-0 ma-0">
<ul class="">
<li class="filter__card" v-for="item in items" :key="item.id" >
<span class="filter__card__items"> {{ item.kind }}</span>
<span class="filter__card__detaile"> {{ item.detaile }}
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4508 5.59375L8.37578 9.66875C7.89453 10.15 7.10703 10.15 6.62578 9.66875L2.55078 5.59375" stroke="#292D32" stroke-opacity="0.44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
</li>
</ul>
<v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="itema"
       label="Select"
       item-text="state"
        filled
        ></v-select>
      </v-col>
<v-btn class="w-100 filter__button my-3 py-4" >اعمال فیلتر</v-btn>
</v-col>
</div>
</v-app>
</template>
<script>
export default ({
    data() {
        return{
            items:[
                
                {
                kind:"نوع ملک",
                detaile:"هر مکانی"
                } ,
                 {
                kind:  " حدود قیمت :",
                detaile:"هر قیمتی"
                } ,
                 {
                kind:  "خواب : ",
                detaile:"هر تعدادی"
                } ,
                 {
                kind: " سن بنا :",
                detaile:"هر تعدادی"
                } ,
                 {
                kind:  " نوع سند :",
                detaile:"هر نوعی"
                } ,
            ],
             itema: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
        
    },
})
</script>
<style >
.v-select.v-text-field:not(.v-text-field--single-line) input {
    margin-top: 0;
      text-align: end!important;
    width: 100%!important;
}
.v-select.v-text-field:not(.v-text-field--single-line) input {
    margin-top: 0;
  
}
</style>
<style scoped>
.filter__card{
width: 100%;
border-radius: 9px;
border:  0.5px solid rgba(0, 0, 0, 0.17);
padding: 15px ;
margin: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
transition: all ease-in-out .3s !important;
}
.filter__card:hover{
box-shadow: -1.7764931917190552px 3.5529863834381104px 2.6647398471832275px 0px rgba(0, 0, 0, 0.06);
transition: all ease-in-out .3s !important;
}
.filter__card__items{
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 23px;
letter-spacing: -0.04em;
text-align: right;
}
.filter__card__detaile{
color: rgba(0, 0, 0, 0.44);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 23px;
letter-spacing: -0.04em;
text-align: right;
}
.filter__card:hover svg {
transform: rotate(45deg);
}
.filter__button{
background: #519FFF!important;
color: #ffff !important;
border-radius: 10px!important;
}

@media screen  and (max-width: 960px){
    .filter__card {
    
    }
    .filter__card__items{
    
    }
    .filter__card__detaile{
    
    }
    .filter__button{
    
    }

}
</style>