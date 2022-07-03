<template>
  <div>
    <form action="">
      <v-col cols="12" class="pa-0 ma-0">
        <ul class="">
          <!-- <li class="filter__card">
            <div class="region">
              <label for=""> منطقه : </label>
              <input
                type="text"
                name="region"
                id=""
                placeholder="  منطقه ی شما"
                v-on:change="onchangeGetValue"
              />
            </div>
            <div>
              <span v-if="this.region === '' || this.region === null"> هر منطقه ای</span>
              <span class="filter__card__detaile" v-else-if="this.region !== null">
                {{ this.region }}
              </span>
            </div>
          </li> -->
          <li class="filter__card">
            <div class="building">
              <label for="estate_type"> انتخاب کنید</label>
              <select
                name="region"
                id="region"
                v-on:change="onchangeGetValue"
                class="test"
              >
                <option value="منطقه اول" :selected="this.region == 'منطقه اول'">
                  منطقه اول
                </option>
                <option value=" لیتکوه" :selected="this.region == 'لیتکوه'">
                  لیتکوه
                </option>
                <option value=" هراز" :selected="this.region == 'هراز'">هراز</option>
              </select>
            </div>
          </li>
          <li class="filter__card">
            <div class="building">
              <label for="estate_type"> انتخاب کنید</label>
              <select
                name="estate_type"
                id="estate_type"
                v-on:change="onchangeGetValue"
                class="test"
              >
                <option
                  value=""
                  :selected="this.estate_type == '' || this.estate_type == null"
                >
                  هر منطقه ای
                </option>
                <option value="G" :selected="this.estate_type == 'G'">باغ</option>
                <option value="H" :selected="this.estate_type == 'H'">خانه ویلایی</option>
                <option value="L" :selected="this.estate_type == 'L'">زمین</option>
                <option value="A" :selected="this.estate_type == 'A'">آپارتمان</option>
                <option value="B" :selected="this.estate_type == 'B'">
                  مغازه و تجاری
                </option>
                <option value="V" :selected="this.estate_type == 'H'">ویلا</option>
              </select>
            </div>
          </li>
        </ul>
        <p>hi</p>

        <div v-for="onchangeGetValue in valueInput" :key="onchangeGetValue ">
          <p v-if="onchangeGetValue.length ==0">hi zero</p>
          <p v-else-if="onchangeGetValue.length > 0"> hi one</p>
        </div>
        <!-- <span class="filter__card__detaile"> {{ this.unit_price__lte }} </span> -->
        <!-- <span class="filter__card__detaile"> {{ this.unit_price__gte }} </span> -->
        <!-- <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="itema" label="Select" item-text="state" filled></v-select>
          </v-col> -->
        <nuxt-link
          :to="{
            name: 'propertyCode',
            query: {
              region: `${this.valueInput.region}`,
              estate_type: `${this.valueInput.estate_type}`,
              unit_price__lte: `${this.valueInput.unit_price__lte}`,
              unit_price__gte: `${this.valueInput.unit_price__gte}`,
            },
          }"
        >
          <!-- <nuxt-link :to=" { name: 'propertyCode', query: ` ${'region'}`}">     -->
          <v-btn class="search_home" v-on:click="handleSearch"> جستجوی ملک</v-btn>
        </nuxt-link>
      </v-col>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      region: "",
      estate_type: "",
      unit_price__lte: "",
      unit_price__gte: "",

      valueInput: {
        unit_price__lte: "",
        unit_price__gte: "",
        region: "",
        estate_type: "",
      },
      items: [
        {
          kind: "نوع ملک",
          detaile: "هر مکانی",
        },
        {
          kind: " حدود قیمت :",
          detaile: "هر قیمتی",
        },
        {
          kind: "خواب : ",
          detaile: "هر تعدادی",
        },
        {
          kind: " سن بنا :",
          detaile: "هر تعدادی",
        },
        {
          kind: " نوع سند :",
          detaile: "هر نوعی",
        },
      ],
      itema: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },

  methods: {
    onchangeGetValue(e) {
      this.valueInput = {
        ...this.valueInput,
        [e.target.name]: e.target.value,
      };
    },
    async handleSearch() {
      console.log('hi')
      console.log(this.valueInput.length);
            console.log('by')

      // const data = await getSearch(keyword)
      //   .then((this.data = res.data))
      //   .then(console.log("hi"));
    },
  },
  mounted() {
    const url = this.$route.query;
    this.region = url.region;
    // console.log(this.region);
    this.estate_type = url.estate_type;
    // console.log(this.estate_type);
    this.unit_price__lte = url.estate_type;
    // console.log(this.estate_type);
    this.unit_price__gte = url.unit_price__gte;
    // console.log(this.unit_price__gte);
    
  },
};
</script>
<style>
.v-select.v-text-field:not(.v-text-field--single-line) input {
  margin-top: 0;
  text-align: end !important;
  width: 100% !important;
}
.v-select.v-text-field:not(.v-text-field--single-line) input {
  margin-top: 0;
}
</style>
<style scoped>
.building {
  position: relative;
  width: 100%;
}

.test {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  text-align: left !important;
}
.building label {
  width: 100% !important;
}
.building select {
  text-align-last: left !important;
}
.filter__card_items {
  width: 30%;
  float: left;
}
.filter__card {
  width: 100%;
  border-radius: 9px;
  border: 0.5px solid rgba(0, 0, 0, 0.17);
  padding: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all ease-in-out 0.3s !important;
}
.filter__card:hover {
  box-shadow: -1.7764931917190552px 3.5529863834381104px 2.6647398471832275px 0px
    rgba(0, 0, 0, 0.06);
  transition: all ease-in-out 0.3s !important;
}
.filter__card__items {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.04em;
  text-align: right;
}
.filter__card__detaile {
  color: rgba(0, 0, 0, 0.44);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.04em;
  text-align: left;
}

.arrow::after {
  content: "";
  border-bottom: 1px solid rgba(0, 255, 242, 0.797);
  height: 6px;
  width: 6px;
}

.filter__button {
  background: #519fff !important;
  color: #ffff !important;
  border-radius: 10px !important;
}

@media screen and (max-width: 960px) {
  .filter__card {
  }
  .filter__card__items {
  }
  .filter__card__detaile {
  }
  .filter__button {
  }
}
</style>
