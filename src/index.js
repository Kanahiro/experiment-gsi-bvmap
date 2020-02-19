let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

let map = new mapboxgl.Map({
    'container':'mapPane',
    'style':{'version': 8, 'sources': {'OpenStreetMap_37002f18_475d_44d1_9e2f_8e24b804c960': {'type': 'raster', 'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png']}, 'mvt': {'type': 'vector', 'tiles': ['https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf']}}, 'layers': [{'id': 'OpenStreetMap_37002f18_475d_44d1_9e2f_8e24b804c960', 'source': 'OpenStreetMap_37002f18_475d_44d1_9e2f_8e24b804c960', 'type': 'raster', 'paint': {'raster-opacity': 1.0}}, {'id': 'transp_7c2d1771_e5c3_4cb8_9a78_3e6fd7ab9e29', 'source': 'mvt', 'source-layer': 'transp', 'type': 'circle', 'paint': {'circle-color': '#ff9e17', 'circle-radius': 6, 'circle-opacity': 1.0, 'circle-stroke-color': '#232323'}}, {'id': 'contour_b96a2cb0_3a6f_45eb_b228_e5ff8f5e5412', 'source': 'mvt', 'source-layer': 'contour', 'type': 'line', 'paint': {'line-color': '#e8718d', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'lake_bef9d3e3_08e8_4654_8273_6b48949b753f', 'source': 'mvt', 'source-layer': 'lake', 'type': 'line', 'paint': {'line-color': '#8d5a99', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'landforma_8c8bb6bd_e2e5_4f3f_8701_93a634f71b1c', 'source': 'mvt', 'source-layer': 'landforma', 'type': 'fill', 'paint': {'fill-color': '#f3dda6', 'fill-outline-color': '#232323', 'fill-opacity': 1.0}}, {'id': 'waterarea_633c47ef_e13c_4210_ac41_91d783ba3929', 'source': 'mvt', 'source-layer': 'waterarea', 'type': 'fill', 'paint': {'fill-color': '#6bc2ff', 'fill-outline-color': '#232323', 'fill-opacity': 1.0}}, {'id': 'boundary_5c92ed6e_0775_454c_93a5_67d8836a9be3', 'source': 'mvt', 'source-layer': 'boundary', 'type': 'line', 'paint': {'line-color': '#d5b43c', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'symbol_dda45275_c9fc_4bd2_9313_ca33fd034987', 'source': 'mvt', 'source-layer': 'symbol', 'type': 'circle', 'paint': {'circle-color': '#a47158', 'circle-radius': 6, 'circle-opacity': 1.0, 'circle-stroke-color': '#232323'}}, {'id': 'river_57081b16_7d88_424b_bc4d_750ffbaa351f', 'source': 'mvt', 'source-layer': 'river', 'type': 'line', 'paint': {'line-color': '#85b66f', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'railway_efc5fc3b_94d9_41d6_aa63_622a00e7bf0c', 'source': 'mvt', 'source-layer': 'railway', 'type': 'line', 'paint': {'line-color': '#7d8b8f', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'elevation_3b36c46d_16e1_4977_a2d1_f0e3aa4b02ab', 'source': 'mvt', 'source-layer': 'elevation', 'type': 'circle', 'paint': {'circle-color': '#91522d', 'circle-radius': 6, 'circle-opacity': 1.0, 'circle-stroke-color': '#232323'}}, {'id': 'label_5ecb1842_8101_4117_b2a9_59bfb7efa8c0', 'source': 'mvt', 'source-layer': 'label', 'type': 'circle', 'paint': {'circle-color': '#c43c39', 'circle-radius': 6, 'circle-opacity': 1.0, 'circle-stroke-color': '#232323'}}, {'id': 'coastline_2c777e86_311e_4e01_a1f8_f582ca6af289', 'source': 'mvt', 'source-layer': 'coastline', 'type': 'line', 'paint': {'line-color': '#e5b636', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'searoute_4694bcca_e5ce_4c8a_b23e_e7f7af759589', 'source': 'mvt', 'source-layer': 'searoute', 'type': 'line', 'paint': {'line-color': '#003780', 'line-width': 1, 'line-opacity': 1.0}}, {'id': 'road_79e3ae8f_927d_4663_8a41_502839cbe65a', 'source': 'mvt', 'source-layer': 'road', 'type': 'line', 'paint': {'line-color': '#ffffff', 'line-width': 4, 'line-opacity': 1.0}}, {'id': 'road_6db818ea_6b82_41f4_aa79_3cba98ca23b8', 'source': 'mvt', 'source-layer': 'road', 'type': 'line', 'paint': {'line-color': '#ff9101', 'line-width': 2, 'line-opacity': 1.0}}]},
    
    center: [139.767, 35.681],
    zoom: 9
})

map.on("click", function() {
    let features = map.querySourceFeatures("mapprint", {
        "sourceLayer":"japan"
    })
    console.log(features)
})