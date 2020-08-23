// Export current language

import { DEFAULT_LANGUAGE } from '@/config/constants'

let locale = DEFAULT_LANGUAGE
if (!localStorage.getItem('language')) {
  locale = DEFAULT_LANGUAGE
} else {
  locale = localStorage.getItem('language') === 'en' ? 'en' : 'ja'
}

export default locale
