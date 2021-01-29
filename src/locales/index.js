import Vue from 'vue'
import VueI18n from "vue-i18n"
import en from './en'
import zh from './zh'

const messages = {
  en,
  zh
}

Vue.use(VueI18n);

const lang = localStorage.getItem("lang") || "zh"

const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: 'zh',
  messages
})



export default i18n;