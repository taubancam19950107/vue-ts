// VeeValidate https://vee-validate.logaretm.com/v2/guide/getting-started.html

import locale from '@/i18n/locale'
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate'
import en from '@/i18n/en/validation.json'
import ja from '@/i18n/ja/validation.json'
import * as rules from 'vee-validate/dist/rules'
import * as customRules from './custom-rules'

for (const [rule, validation] of [...Object.entries(rules), ...Object.entries(customRules)]) {
  extend(rule, {
    ...validation
  })
}

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Install English and Japan locales.
localize({ en, ja })

// Set locale for vee-validate
localize(locale)
