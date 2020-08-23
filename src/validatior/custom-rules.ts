/* eslint-disable @typescript-eslint/camelcase */

// You can easily add custom rules to VeeValidate, but your custom rules must adhere to a contract or certain structure:
// https://vee-validate.logaretm.com/v2/guide/custom-rules.html

import { trans } from '@/i18n/'
import { isVideoFile } from '@/utils/functions'

const is_video = {
  getMessage (field: string, args: []) {
    return trans('validator.is_video', args)
  },
  validate (filename: string): boolean {
    return isVideoFile(filename)
  }
}

export {
  is_video
}
