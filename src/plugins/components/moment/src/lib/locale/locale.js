// Side effect imports
import './prototype'

import {
  getSetGlobalLocale,
  defineLocale,
  getLocale
} from './locales'

import {
  listMonths,
  listMonthsShort,
  listWeekdays,
  listWeekdaysShort,
  listWeekdaysMin
} from './lists'

import { deprecate } from '../utils/deprecate'
import { hooks } from '../utils/hooks'

import './en'

export {
  getSetGlobalLocale,
  defineLocale,
  getLocale,
  listMonths,
  listMonthsShort,
  listWeekdays,
  listWeekdaysShort,
  listWeekdaysMin
}

hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale)
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale)
