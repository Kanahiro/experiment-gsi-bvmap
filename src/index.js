let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

let map = new mapboxgl.Map({
    'container':'mapPane',
    'style':{
        'version':8,
        'sources':{
            'gsi-bvmap':{
                'type':'vector',
                'tiles':[
                    'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf'
                ],
            },
            'osm':{
                'type':'raster',
                'tiles':['https://tile.openstreetmap.jp/{z}/{x}/{y}.png']
            }
        },
        'layers':[
            {
                'id':'road',
                'type':'line',
                'source':'gsi-bvmap',
                'source-layer':'road',
                'paint':{
                    'line-color':'#000000'
                }
            }
        ]
    },
    center: [139.767, 35.681],
    zoom: 9
})