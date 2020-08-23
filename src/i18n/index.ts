import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { DEFAULT_LANGUAGE } from '@/config/constants'
import locale from './locale'
import jaLocale from './ja/index'
import enLocale from './en/index'

Vue.use(VueI18n)

const messages = {
  ja: {
    ...jaLocale
  },
  en: {
    ...enLocale
  }
}

/**
 * Define I18n instance.
 *
 * @type {VueI18n}
 */
const index = new VueI18n({
  locale: locale,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages,
  silentTranslationWarn: true
})

/**
 * Function helper translation language.
 *
 * @param key
 * @param params
 * @returns {VueI18n.TranslateResult}
 */
export const trans = (key: string, params: []) => {
  return index.t(key, params)
}

export default index
