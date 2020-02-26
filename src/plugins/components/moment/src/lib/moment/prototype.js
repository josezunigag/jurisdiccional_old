import { Moment } from './constructor'

import { add, subtract } from './add-subtract'
import { calendar } from './calendar'
import { clone } from './clone'
import { isBefore, isBetween, isSame, isAfter } from './compare'
import { diff } from './diff'
import { format, toString, toISOString } from './format'
import { from, fromNow } from './from'
import { to, toNow } from './to'
import { getSet } from './get-set'
import { locale, localeData, lang } from './locale'
import { prototypeMin, prototypeMax } from './min-max'
import { startOf, endOf } from './start-end-of'
import { valueOf, toDate, toArray, toObject, unix } from './to-type'
import { isValid, parsingFlags, invalidAt } from './valid'

// Year
import { getSetYear, getIsLeapYear } from '../units/year'

// Week Year
import { getSetWeekYear, getSetISOWeekYear, getWeeksInYear, getISOWeeksInYear } from '../units/week-year'

// Quarter
import { getSetQuarter } from '../units/quarter'

// Month
import { getSetMonth, getDaysInMonth } from '../units/month'

// Week
import { getSetWeek, getSetISOWeek } from '../units/week'

// Day
import { getSetDayOfMonth } from '../units/day-of-month'
import { getSetDayOfWeek, getSetISODayOfWeek, getSetLocaleDayOfWeek } from '../units/day-of-week'
import { getSetDayOfYear } from '../units/day-of-year'

// Hour
import { getSetHour } from '../units/hour'

// Minute
import { getSetMinute } from '../units/minute'

// Second
import { getSetSecond } from '../units/second'

// Millisecond
import { getSetMillisecond } from '../units/millisecond'

// Offset
import {
  getSetOffset,
  setOffsetToUTC,
  setOffsetToLocal,
  setOffsetToParsedOffset,
  hasAlignedHourOffset,
  isDaylightSavingTime,
  isDaylightSavingTimeShifted,
  getSetZone,
  isLocal,
  isUtcOffset,
  isUtc
} from '../units/offset'

// Timezone
import { getZoneAbbr, getZoneName } from '../units/timezone'

// Deprecations
import { deprecate } from '../utils/deprecate'

var proto = Moment.prototype

proto.add = add
proto.calendar = calendar
proto.clone = clone
proto.diff = diff
proto.endOf = endOf
proto.format = format
proto.from = from
proto.fromNow = fromNow
proto.to = to
proto.toNow = toNow
proto.get = getSet
proto.invalidAt = invalidAt
proto.isAfter = isAfter
proto.isBefore = isBefore
proto.isBetween = isBetween
proto.isSame = isSame
proto.isValid = isValid
proto.lang = lang
proto.locale = locale
proto.localeData = localeData
proto.max = prototypeMax
proto.min = prototypeMin
proto.parsingFlags = parsingFlags
proto.set = getSet
proto.startOf = startOf
proto.subtract = subtract
proto.toArray = toArray
proto.toObject = toObject
proto.toDate = toDate
proto.toISOString = toISOString
proto.toJSON = toISOString
proto.toString = toString
proto.unix = unix
proto.valueOf = valueOf
proto.year = getSetYear
proto.isLeapYear = getIsLeapYear
proto.weekYear = getSetWeekYear
proto.isoWeekYear = getSetISOWeekYear
proto.quarter = proto.quarters = getSetQuarter
proto.month = getSetMonth
proto.daysInMonth = getDaysInMonth
proto.week = proto.weeks = getSetWeek
proto.isoWeek = proto.isoWeeks = getSetISOWeek
proto.weeksInYear = getWeeksInYear
proto.isoWeeksInYear = getISOWeeksInYear
proto.date = getSetDayOfMonth
proto.day = proto.days = getSetDayOfWeek
proto.weekday = getSetLocaleDayOfWeek
proto.isoWeekday = getSetISODayOfWeek
proto.dayOfYear = getSetDayOfYear
proto.hour = proto.hours = getSetHour
proto.minute = proto.minutes = getSetMinute
proto.second = proto.seconds = getSetSecond
proto.millisecond = proto.milliseconds = getSetMillisecond
proto.utcOffset = getSetOffset
proto.utc = setOffsetToUTC
proto.local = setOffsetToLocal
proto.parseZone = setOffsetToParsedOffset
proto.hasAlignedHourOffset = hasAlignedHourOffset
proto.isDST = isDaylightSavingTime
proto.isDSTShifted = isDaylightSavingTimeShifted
proto.isLocal = isLocal
proto.isUtcOffset = isUtcOffset
proto.isUtc = isUtc
proto.isUTC = isUtc
proto.zoneAbbr = getZoneAbbr
proto.zoneName = getZoneName
proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth)
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth)
proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear)
proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone)

export default proto
