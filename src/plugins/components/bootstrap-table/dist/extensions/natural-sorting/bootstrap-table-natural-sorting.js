/**
 * @author: Brian Huisman
 * @webSite: http://www.greywyvern.com
 * @version: v1.0.0
 * JS function to allow natural sorting on bootstrap-table columns
 * just add data-sorter="alphanum" to any th
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 */

function alphanum (a, b) {
  function chunkify (t) {
    var tz = []
    var x = 0
    var y = -1
    var n = 0
    var i
    var j

    while (i = (j = t.charAt(x++)).charCodeAt(0)) {
      var m = (i === 46 || (i >= 48 && i <= 57))
      if (m !== n) {
        tz[++y] = ''
        n = m
      }
      tz[y] += j
    }
    return tz
  }

  var aa = chunkify(a)
  var bb = chunkify(b)

  for (x = 0; aa[x] && bb[x]; x++) {
    if (aa[x] !== bb[x]) {
      var c = Number(aa[x])
      var d = Number(bb[x])

      if (c == aa[x] && d == bb[x]) {
        return c - d
      } else {
        return (aa[x] > bb[x]) ? 1 : -1
      }
    }
  }
  return aa.length - bb.length
}
