<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title">Click twice on the map</h3>
                        <gmap-map ref="map" @click="clicked"
                            :center="{lat:40.720917, lng:-74.001308}"
                            :zoom="12"
                            :options="{gestureHandling:'cooperative'}"
                            map-type-id="roadmap"
                            style="width: 100%; height: 500px"
                        >
                            <GmapMarker v-if="start" :position="start.latLng" label="S" />
                            <GmapMarker v-if="end" :position="end.latLng" label="E" />
                            <GmapPolyline v-if="curvedPath" :path="curvedPath" />
                        </gmap-map>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title">Terrain map</h3>
                        <gmap-map
                            :center="{lat:40.720917, lng:-74.001308}"
                            :zoom="12"
                            :options="{gestureHandling:'cooperative'}"
                            map-type-id="terrain"
                            style="width: 100%; height: 500px"
                        ></gmap-map>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container-fluid -->
        <footer class="footer t-a-c">
            © 2017 Cubic Admin
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
import _ from 'lodash'

export default {
    name: 'MapsGoogle',
    data () {
		return {
			start: null,
			end: null,
			lastId: 1,
			center: {
				lat: 48.8538302,
				lng: 2.2982161
			},
			reportedCenter: {
				lat: 48.8538302,
				lng: 2.2982161
			},
			mapBounds: {},
			clustering: true,
			zoom: 7,
			gridSize: 50,
			mapType: 'terrain',
			markers: [],
			markersEven: false,
			drag: 0,
			mapClickedCount: 0,
			ifw: true,
			ifw2: false,
			ifw2text: 'You can also use the content prop to set your modal',
            mapStyle: 'green'
        }
    },
    computed: {
        curvedPath () {
			if (this.start && this.end) {
				return _.range(100).map(i => {
					const tick = i / 99

					/* Bezier curve -- set up the control points */
					const dlat = this.end.latLng.lat() - this.start.latLng.lat()
					const dlng = this.end.latLng.lng() - this.start.latLng.lng()

					const cp1 = {
						lat: this.start.latLng.lat() + 0.33 * dlat + 0.33 * dlng,
						lng: this.start.latLng.lng() - 0.33 * dlat + 0.33 * dlng,
					}

					const cp2 = {
						lat: this.end.latLng.lat() - 0.33 * dlat + 0.33 * dlng,
						lng: this.end.latLng.lng() - 0.33 * dlat - 0.33 * dlng,
					}

					/* Bezier curve formula */
					return {
						lat:
							(tick * tick * tick) * this.start.latLng.lat() +
							3 * ((1 - tick) * tick * tick) * cp1.lat +
							3 * ((1 - tick) * (1 - tick) * tick) * cp2.lat +
							((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lat(),
						lng:
							(tick * tick * tick) * this.start.latLng.lng() +
							3 * ((1 - tick) * tick * tick) * cp1.lng +
							3 * ((1 - tick) * (1 - tick) * tick) * cp2.lng +
							((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lng(),
					}
				})
			}
		}
    },
    methods: {
        clicked (e) {
			if (!this.start && !this.end) {
				this.start = {
					latLng: e.latLng
				}
			} else if (this.start && !this.end) {
				this.end = {
					latLng: e.latLng
				}
			} else {
				this.start = {
					latLng: e.latLng
				}
				this.end = null
			}
		},
    },
    mounted() {
    }
}
</script>
