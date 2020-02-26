import { normalizeObjectUnits } from '../units/aliases'
import { getLocale } from '../locale/locales'

export function Duration (duration) {
  var normalizedInput = normalizeObjectUnits(duration)
  var years = normalizedInput.year || 0
  var quarters = normalizedInput.quarter || 0
  var months = normalizedInput.month || 0
  var weeks = normalizedInput.week || 0
  var days = normalizedInput.day || 0
  var hours = normalizedInput.hour || 0
  var minutes = normalizedInput.minute || 0
  var seconds = normalizedInput.second || 0
  var milliseconds = normalizedInput.millisecond || 0

  // representation for dateAddRemove
  this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 36e5 // 1000 * 60 * 60
  // Because of dateAddRemove treats 24 hours as different from a
  // day when working around DST, we need to store them separately
  this._days = +days +
        weeks * 7
  // It is impossible translate months into days without knowing
  // which months you are are talking about, so we have to store
  // it separately.
  this._months = +months +
        quarters * 3 +
        years * 12

  this._data = {}

  this._locale = getLocale()

  this._bubble()
}

export function isDuration (obj) {
  return obj instanceof Duration
}
