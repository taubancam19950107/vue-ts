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
const vueI18n = new VueI18n({
  locale: locale,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages,
  silentTranslationWarn: true
})

/**
 * Translation language.
 *
 * @param string key
 * @param array|undefined params
 * @returns {VueI18n.TranslateResult}
 */
export function trans(key: string, params?: []) {
  return vueI18n.t(key, params)
}

export default vueI18n
