<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title">World Map</h3>
                        <div id="world-map-markers" style="height: 700px"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">India</h3>
                        <div id="india" style="height: 450px"></div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Usa</h3>
                        <div id="usa" style="height: 450px"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Australia</h3>
                        <div id="australia" style="height: 450px"></div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Uk</h3>
                        <div id="uk" style="height: 450px"></div>
                    </div>
                </div>
            </div>
            <!-- /.row -->

        </div>
        <!-- /.container-fluid -->
        <footer class="footer t-a-c">
            © 2017 Cubic Admin
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
export default {
    name: 'MapsVector',
    mounted() {
        jQuery('#world-map-markers').vectorMap(
        {
            map: 'world_mill_en',
            backgroundColor: '#fff',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#f4f3f0',
            regionStyle : {
                initial : {
                fill : '#d6e88e'
                }
            },
            markerStyle: {
            initial: {
                            r: 9,
                            'fill': '#fff',
                            'fill-opacity':1,
                            'stroke': '#000',
                            'stroke-width' : 5,
                            'stroke-opacity': 0.4
                        },
                        },
            enableZoom: true,
            hoverColor: '#c9dfaf',
            markers : [{
                latLng : [21.00, 78.00],
                name : 'I Love My India'
            
            }],
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: [],
            showTooltip: true,
            onRegionClick: function(element, code, region)
            {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();

                alert(message);
            }
        });


        $('#india').vectorMap({
                    map : 'in_mill',
                    backgroundColor : 'transparent',
                    regionStyle : {
                        initial : {
                            fill : '#13dafe'
                        }
                    }
                });


                $('#usa').vectorMap({
                    map : 'us_aea_en',
                    backgroundColor : 'transparent',
                    regionStyle : {
                        initial : {
                            fill : '#99d683'
                        }
                    }
                });
                
            
                
                $('#australia').vectorMap({
                    map : 'au_mill',
                    backgroundColor : 'transparent',
                    regionStyle : {
                        initial : {
                            fill : '#ffca4a'
                        }
                    }
                });
                
                $('#uk').vectorMap({
                    map : 'uk_mill_en',
                    backgroundColor : 'transparent',
                    regionStyle : {
                        initial : {
                            fill : '#6164c1'
                        }
                    }
                });

            
                
    }
}
</script>
