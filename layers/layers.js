var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_2 = new ol.format.GeoJSON();
var features_Boundary_2 = format_Boundary_2.readFeatures(json_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2.addFeatures(features_Boundary_2);
var lyr_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_2, 
                style: style_Boundary_2,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_2.png" /> Boundary'
            });
var format_Natural_3 = new ol.format.GeoJSON();
var features_Natural_3 = format_Natural_3.readFeatures(json_Natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natural_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natural_3.addFeatures(features_Natural_3);
var lyr_Natural_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natural_3, 
                style: style_Natural_3,
                popuplayertitle: 'Natural ',
                interactive: true,
                title: '<img src="styles/legend/Natural_3.png" /> Natural '
            });
var format_Waterways_4 = new ol.format.GeoJSON();
var features_Waterways_4 = format_Waterways_4.readFeatures(json_Waterways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_4.addFeatures(features_Waterways_4);
var lyr_Waterways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_4, 
                style: style_Waterways_4,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_4.png" /> Waterways'
            });
var format_Places_5 = new ol.format.GeoJSON();
var features_Places_5 = format_Places_5.readFeatures(json_Places_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_5.addFeatures(features_Places_5);
var lyr_Places_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_5, 
                style: style_Places_5,
                popuplayertitle: 'Places',
                interactive: true,
                title: '<img src="styles/legend/Places_5.png" /> Places'
            });
var format_natural_6 = new ol.format.GeoJSON();
var features_natural_6 = format_natural_6.readFeatures(json_natural_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_6.addFeatures(features_natural_6);
var lyr_natural_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_6, 
                style: style_natural_6,
                popuplayertitle: 'natural',
                interactive: true,
                title: '<img src="styles/legend/natural_6.png" /> natural'
            });
var format_Institutions_7 = new ol.format.GeoJSON();
var features_Institutions_7 = format_Institutions_7.readFeatures(json_Institutions_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Institutions_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Institutions_7.addFeatures(features_Institutions_7);
var lyr_Institutions_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Institutions_7, 
                style: style_Institutions_7,
                popuplayertitle: 'Institutions',
                interactive: true,
    title: 'Institutions<br />\
    <img src="styles/legend/Institutions_7_0.png" /> Anganvady<br />\
    <img src="styles/legend/Institutions_7_1.png" /> Bank<br />\
    <img src="styles/legend/Institutions_7_2.png" /> Bridge<br />\
    <img src="styles/legend/Institutions_7_3.png" /> Church<br />\
    <img src="styles/legend/Institutions_7_4.png" /> College<br />\
    <img src="styles/legend/Institutions_7_5.png" /> hospital<br />\
    <img src="styles/legend/Institutions_7_6.png" /> Library<br />\
    <img src="styles/legend/Institutions_7_7.png" /> Masjid<br />\
    <img src="styles/legend/Institutions_7_8.png" /> police<br />\
    <img src="styles/legend/Institutions_7_9.png" /> School<br />\
    <img src="styles/legend/Institutions_7_10.png" /> Shop<br />\
    <img src="styles/legend/Institutions_7_11.png" /> Temple<br />' });
var format_Roads_8 = new ol.format.GeoJSON();
var features_Roads_8 = format_Roads_8.readFeatures(json_Roads_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_8.addFeatures(features_Roads_8);
var lyr_Roads_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_8, 
                style: style_Roads_8,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_8.png" /> Roads'
            });
var format_landusemap_9 = new ol.format.GeoJSON();
var features_landusemap_9 = format_landusemap_9.readFeatures(json_landusemap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landusemap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landusemap_9.addFeatures(features_landusemap_9);
var lyr_landusemap_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landusemap_9, 
                style: style_landusemap_9,
                popuplayertitle: 'land use map',
                interactive: true,
                title: '<img src="styles/legend/landusemap_9.png" /> land use map'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Boundary_2.setVisible(true);lyr_Natural_3.setVisible(true);lyr_Waterways_4.setVisible(true);lyr_Places_5.setVisible(true);lyr_natural_6.setVisible(true);lyr_Institutions_7.setVisible(true);lyr_Roads_8.setVisible(true);lyr_landusemap_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_Boundary_2,lyr_Natural_3,lyr_Waterways_4,lyr_Places_5,lyr_natural_6,lyr_Institutions_7,lyr_Roads_8,lyr_landusemap_9];
lyr_Boundary_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Natural_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Waterways_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Places_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_natural_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Institutions_7.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_Roads_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_landusemap_9.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Boundary_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Natural_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Waterways_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_Places_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'population': 'TextEdit', });
lyr_natural_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Institutions_7.set('fieldImages', {'osm_id': 'TextEdit', 'timestamp': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_landusemap_9.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_Boundary_2.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Natural_3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'no label', 'type': 'no label', });
lyr_Waterways_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'width': 'no label', });
lyr_Places_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'population': 'no label', });
lyr_natural_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', });
lyr_Institutions_7.set('fieldLabels', {'osm_id': 'no label', 'timestamp': 'no label', 'name': 'inline label - always visible', 'type': 'no label', });
lyr_Roads_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_landusemap_9.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_landusemap_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});