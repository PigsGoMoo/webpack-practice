import mapboxgl from 'mapbox-gl';
import markerMaker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnVsbHN0YWNrd29ya3Nob3AiLCJhIjoiY2trZThzamtyMGFmMDJvbzFhczBxcmExNiJ9.LDjuKIgSPT_jjLZYbgruVQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

const mapBoxMarker = document.createElement('div');
mapBoxMarker.style.width = '32px';
mapBoxMarker.style.height = '39px';
mapBoxMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(mapBoxMarker).setLngLat([-74.009, 40.705]).addTo(map);

markerMaker('activity', [-87.6354, 41.885]).addTo(map);
