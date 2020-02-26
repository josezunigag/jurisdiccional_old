/*
* tablesaw: A set of plugins for responsive tables
* Mode Switch: UI element to allow the user to change table modes: stack/swipe/columntoggle
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/

(function (win, $) {
  var S = {
    selectors: {
      init: 'table[data-tablesaw-mode-switch]'
    },
    attributes: {
      excludeMode: 'data-tablesaw-mode-exclude'
    },
    classes: {
      main: 'tablesaw-modeswitch',
      toolbar: 'tablesaw-toolbar'
    },
    modes: [ 'stack', 'swipe', 'columntoggle' ],
    init: function (table) {
      var $table = $(table)
      var ignoreMode = $table.attr(S.attributes.excludeMode)
      var $toolbar = $table.prev().filter('.tablesaw-bar')
      var modeVal = ''
      var $switcher = $('<div>').addClass(S.classes.main + ' ' + S.classes.toolbar).html(function () {
        var html = [ '<label>' + Tablesaw.i18n.columns + ':' ]
        var dataMode = $table.attr('data-tablesaw-mode')
        var isSelected

        html.push('<span class="btn btn-small">&#160;<select>')
        for (var j = 0, k = S.modes.length; j < k; j++) {
          if (ignoreMode && ignoreMode.toLowerCase() === S.modes[ j ]) {
            continue
          }

          isSelected = dataMode === S.modes[ j ]

          if (isSelected) {
            modeVal = S.modes[ j ]
          }

          html.push('<option' +
							(isSelected ? ' selected' : '') +
							' value="' + S.modes[ j ] + '">' + Tablesaw.i18n.modes[ j ] + '</option>')
        }
        html.push('</select></span></label>')

        return html.join('')
      })

      var $otherToolbarItems = $toolbar.find('.tablesaw-advance').eq(0)
      if ($otherToolbarItems.length) {
        $switcher.insertBefore($otherToolbarItems)
      } else {
        $switcher.appendTo($toolbar)
      }

      $switcher.find('.btn').tablesawbtn()
      $switcher.find('select').bind('change', S.onModeChange)
    },
    onModeChange: function () {
      var $t = $(this)
      var $switcher = $t.closest('.' + S.classes.main)
      var $table = $t.closest('.tablesaw-bar').nextUntil($table).eq(0)
      var val = $t.val()

      $switcher.remove()
      $table.data('table').destroy()

      $table.attr('data-tablesaw-mode', val)
      $table.table()
    }
  }

  $(win.document).on('tablesawcreate', function (e, Tablesaw) {
    if (Tablesaw.$table.is(S.selectors.init)) {
      S.init(Tablesaw.table)
    }
  })
})(this, jQuery)
