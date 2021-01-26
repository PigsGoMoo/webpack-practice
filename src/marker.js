import mapboxgl from 'mapbox-gl';

const markerMaker = (typeOfMarker, coordinates) => {
  const aMarker = document.createElement('div');
  aMarker.style.width = '32px';
  aMarker.style.height = '39px';

  switch (typeOfMarker.toLowerCase()) {
    case 'activity':
      aMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;

    case 'hotel':
      aMarker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
      break;

    case 'restaurant':
      aMarker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
      break;

    default:
      throw new Error('Please specify an activity, hotel, or restaurant');
  }

  return new mapboxgl.Marker(aMarker).setLngLat(coordinates);
};

export default markerMaker;
