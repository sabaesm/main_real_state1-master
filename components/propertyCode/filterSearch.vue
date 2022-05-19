<!-- <template>
  <v-app>
    <div>
      <form action="">
        <v-col cols="12" class="pa-0 ma-0">
          <ul class="">
            <li class="filter__card">
              <div class="region">
                <label for=""> منطقه : </label>
                <select
                  type="text"
                  name="region"
                  id=""
                  placeholder="  منطقه ی شما"
                  v-on:change="onchangeGetValue"
                >
                  <option value="A"></option>
                  <option value="B">امام رضا</option>
                  <option value="C">جاده محمود اباد</option>
                  <option value="D">جاده نور</option>
                  <option value="E">اسپه کلا</option>
                </select>
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type == null">
                null
              </div>
              <div class="filter__card__detaile" v-if="this.region === 'A'">هراز</div>
              <div class="filter__card__detaile" v-if="this.region === 'B'">
                جاده محمود اباد
              </div>
              <div class="filter__card__detaile" v-if="this.region === 'D'">جاده نور</div>
              <div class="filter__card__detaile" v-if="this.region === 'E'">اسپه کلا</div>

              
            </li>
            <li class="filter__card">
              <div class="building">
                <label for=""> نوع ملک : </label>
                <select name="estate_type" id="" v-on:change="onchangeGetValue">
                  <option value="">انتخاب کنید:</option>
                  <option value="V ">ویلا</option>
                  <option value="G">باغ</option>
                  <option value="H">خانه ویلایی</option>
                  <option value="L">زمین</option>
                  <option value="A">آپارتمان</option>
                  <option value="B">مغازه و تجاری</option>
                </select>
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type == null">
                null
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type === 'V'">
                ویلا
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type === 'H'">
                خانه ویلایی
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type === 'L'">
                زمین
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type === 'G'">باغ</div>
              <div class="filter__card__detaile" v-if="this.estate_type === ' A'">
                اپارتمان
              </div>
              <div class="filter__card__detaile" v-if="this.estate_type === 'B'">
                مغازه تجاری
              </div>
            </li>
          </ul>
          <span class="filter__card__detaile"> {{ this.unit_price__lte }} </span>
          <span class="filter__card__detaile"> {{ this.unit_price__gte }} </span>
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
            <nuxt-link :to=" { name: 'propertyCode', query: ` ${'region'}`}">     -->
<!-- <v-btn class="search_home" v-on:click="handleSearch"> جستجوی ملک</v-btn>
          </nuxt-link>
        </v-col>
      </form>
    </div>
  </v-app>
</template> -->
<template>
  <v-app>
    <div>
      <form action="">
        <v-col cols="12" class="pa-0 ma-0">
          <ul class="">
            <li class="filter__card">
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
                <span v-if="this.region === '' || this.region === null">
                  هر منطقه ای</span
                >
                <span class="filter__card__detaile" v-else-if="this.region !== null">
                  {{ this.region }}
                </span>
              </div>
            </li>
            <li class="filter__card">
              <div class="building">
                <label for=""> نوع ملک : </label>
                <select name="estate_type" id="" v-on:change="onchangeGetValue">
                  <option value="">انتخاب کنید:</option>
                  <option value="G">باغ</option>
                  <option value="H">خانه ویلایی</option>
                  <option value="L">زمین</option>
                  <option value="A">آپارتمان</option>
                  <option value="B">مغازه و تجاری</option>
                </select>
              </div>
              <div  class="filter__card__detaile">
              <div v-if="this.estate_type === null || this.estate_type === ''">هر مکانی</div>
              <div v-else-if="this.estate_type !== null">
                <!-- <div class="filter__card__detaile" v-if="this.estate_type === 'V'">
                  ویلا
                </div> -->
                <div class="filter__card__detaile" v-if="this.estate_type === 'H'">
                  خانه ویلایی
                </div>
                <div class="filter__card__detaile" v-if="this.estate_type === 'L'">
                  زمین
                </div>
                <div class="filter__card__detaile" v-if="this.estate_type === 'G'">
                  باغ
                </div>
                <div class="filter__card__detaile" v-if="this.estate_type === ' A'">
                  اپارتمان
                </div>
                <div class="filter__card__detaile" v-if="this.estate_type === 'B'">
                  مغازه تجاری
                </div>
              </div>
              </div>
            </li>
          </ul>
          <span class="filter__card__detaile"> {{ this.unit_price__lte }} </span>
          <span class="filter__card__detaile"> {{ this.unit_price__gte }} </span>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="itema" label="Select" item-text="state" filled></v-select>
          </v-col>
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
  </v-app>
</template>
<script>
export default {
  data() {
    return {
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
      console.log(this.valueInput);
      const httpRequest = await getSearch(keyword);
      console.log(httpRequest);
    },
  },
  mounted() {
    const url = this.$route.query;
    this.region = url.region;
    console.log(this.region);
    this.estate_type = url.estate_type;
    console.log(this.estate_type);
    this.unit_price__lte = url.estate_type;
    console.log(this.estate_type);
    this.unit_price__gte = url.unit_price__gte;
    console.log(this.unit_price__gte);
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
  text-align: right;
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
