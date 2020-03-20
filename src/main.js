import Vue from 'vue'
import Clipboard from 'v-clipboard' 
import VueTour from 'vue-tour' //

require('vue-tour/dist/vue-tour.css')

// libs "npm"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'chartist'
import 'chartist-plugin-tooltips'
import 'chartist/dist/chartist.min.css'
import Datatable from 'vue2-datatable-component'

import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'
// load these modules as your need
import loadStock from 'highcharts/modules/stock.js'
import loadMap from 'highcharts/modules/map.js'
import loadGantt from 'highcharts/modules/gantt.js'
import loadDrilldown from 'highcharts/modules/drilldown.js'
// some charts like solid gauge require `highcharts-more.js`, you can find it in official document.
import loadHighchartsMore from 'highcharts/highcharts-more.js'
import loadSolidGauge from 'highcharts/modules/solid-gauge.js'

import 'animate.css'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'
import 'footable'
import 'raphael'
// import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel'
import 'magnific-popup/dist/magnific-popup.css'
import 'magnific-popup/dist/jquery.magnific-popup.min.js'
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.css'
import 'ion-rangeslider/css/ion.rangeSlider.skinModern.css'
import 'icheck'
import 'icheck/skins/all.css'
import 'dropify'
import 'dropify/dist/css/dropify.min.css'
import 'dropzone'
import 'dropzone/dist/min/dropzone.min.css'
import 'clockpicker/dist/jquery-clockpicker.min.js'
import 'clockpicker/dist/jquery-clockpicker.min.css'
import 'peity'
import 'tablesaw'
import 'tablesaw/dist/tablesaw.css'
// import * as VueGoogleMaps from "vue2-google-maps"

// libs "components"
import './plugins/components/styleswitcher/jQuery.style.switcher.js'
// import Chartist from 'chartist';
import * as ChartistTooltips from 'chartist-plugin-tooltip'
// import './plugins/components/chartist-js/dist/chartist.min.js'
// import './plugins/components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js'
import './plugins/components/sparkline/jquery.sparkline.min.js'
import './plugins/components/sparkline/jquery.charts-sparkline.js'
import './plugins/components/knob/jquery.knob.js'
import './plugins/components/easypiechart/dist/jquery.easypiechart.min.js'
import './plugins/components/morrisjs/morris.min.js'
import './plugins/components/morrisjs/morris.css'
import './plugins/components/datatables/jquery.dataTables.min.js'
import './plugins/components/datatables/jquery.dataTables.min.css'
import './plugins/components/datatables-plugins/buttons/dataTables.buttons.min.js'
import './plugins/components/datatables-plugins/buttons/buttons.flash.min.js'
import './plugins/components/datatables-plugins/buttons/buttons.html5.min.js'
import './plugins/components/datatables-plugins/buttons/buttons.print.min.js'
import './plugins/components/datatables-plugins/buttons/jszip.min.js'
// import './plugins/components/datatables-plugins/buttons/pdfmake.min.js'
import './plugins/components/datatables-plugins/buttons/vfs_fonts.js'


import './plugins/components/datatables-plugins/buttons/buttons.dataTables.min.css'


import './plugins/components/css-chart/css-chart.css'
import './plugins/components/bootstrap-select/bootstrap-select.min.js'
import './plugins/components/blockUI/jquery.blockUI.js'
// import './plugins/components/jqueryui/jquery-ui.min.js'
// import './plugins/components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'
// import './plugins/components/gridstack/gridstack.css'
// import './plugins/components/gridstack/gridstack.min.js'
// import './plugins/components/gridstack/gridstack.jQueryUI.js'
import './plugins/components/toast-master/js/jquery.toast.js'
import './plugins/components/toast-master/css/jquery.toast.css'
import './plugins/components/owl.carousel/owl.theme.default.css'
import './plugins/components/horizontal-timeline/css/horizontal-timeline.css'
// import './plugins/components/horizontal-timeline/js/horizontal-timeline.js'
import './plugins/components/session-timeout/idle/jquery.idletimeout.js'
import './plugins/components/session-timeout/idle/jquery.idletimer.js'
import './plugins/components/session-timeout/jquery.sessionTimeout.min.js'
import './plugins/components/bootstrap-datepicker/bootstrap-datepicker.min.css'
import './plugins/components/custom-select/custom-select.css'
import './plugins/components/custom-select/custom-select.min.js'
import './plugins/components/switchery/dist/switchery.min.css'
import './plugins/components/switchery/dist/switchery.min.js'
import './plugins/components/bootstrap-select/bootstrap-select.min.css'

import './plugins/components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'
import './plugins/components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'
import './plugins/components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'
import './plugins/components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js'
import './plugins/components/jquery-asColorPicker-master/css/asColorPicker.css'
import './plugins/components/jquery-asColorPicker-master/libs/jquery-asColor.js'
import './plugins/components/jquery-asColorPicker-master/libs/jquery-asGradient.js'
import './plugins/components/jquery-asColorPicker-master/dist/jquery-asColorPicker.min.js'

import './plugins/components/bootstrap-table/dist/bootstrap-table.min.css'
import './plugins/components/bootstrap-table/dist/bootstrap-table.min.js'
import './plugins/components/jquery-datatables-editable/datatables.css'
import './plugins/components/jquery-datatables-editable/jquery.dataTables.js'
import './plugins/components/tiny-editable/mindmup-editabletable.js'
import './plugins/components/tiny-editable/numeric-input-example.js'
import './plugins/components/vectormap/jquery-jvectormap-2.0.2.css'
import './plugins/components/vectormap/jquery-jvectormap-2.0.2.min.js'
import './plugins/components/vectormap/jquery-jvectormap-world-mill-en.js'
import './plugins/components/vectormap/jquery-jvectormap-in-mill.js'
import './plugins/components/vectormap/jquery-jvectormap-us-aea-en.js'
import './plugins/components/vectormap/jquery-jvectormap-uk-mill-en.js'
import './plugins/components/vectormap/jquery-jvectormap-au-mill.js'
import './plugins/components/gallery/css/animated-masonry-gallery.css'
import './plugins/components/fancybox/ekko-lightbox.min.css'
import './plugins/components/gallery/js/jquery.isotope.min.js'
import './plugins/components/fancybox/ekko-lightbox.min.js'

// assets js
import './assets/js/jquery.slimscroll.js'
import './assets/js/waves.js'
import './assets/js/sidebarmenu.js'
import './assets/js/jasny-bootstrap.js'
import './assets/js/jquery.PrintArea.js'

// assets css
import './assets/css/style.css'
import './assets/css/colors/default.css'

import App from './AppVertical.vue'
import router from './router'
import store from './store'
import VueTextareaAutosize from 'vue-textarea-autosize'
require('expose-loader?$!jquery')
require('expose-loader?jQuery!jquery')

loadStock(Highcharts)
loadMap(Highcharts)
loadGantt(Highcharts)
loadDrilldown(Highcharts)
loadHighchartsMore(Highcharts)
loadSolidGauge(Highcharts)

Vue.config.productionTip = false

// Vue.use(VueQuillEditor, /* { default global options } */)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw",
//     libraries: "places" // necessary for places input
//   }
// });
Vue.use(VueTextareaAutosize)
Vue.use(VueHighcharts, { Highcharts })
Vue.use(ChartistTooltips)
Vue.use(Datatable) // done!
Vue.use(Clipboard)
Vue.use(VueTour)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
