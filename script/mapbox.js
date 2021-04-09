

// Mapbox script
mapboxgl.accessToken = 'hidden';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-v9', // stylesheet location
attributionControl: false,
center: [39.11, 55.8], // starting position [lng, lat]
zoom: 6 // starting zoom
});




// label markers content in object literals

const spaceX = {
    tittel: 'Space X HQ',
    info: 'Space X is the first privat company to make use of reusable rockets.',
    image: 'https://cdn.pixabay.com/photo/2015/03/26/18/36/spacecraft-693217__340.jpg',
}

map.on("load", () => {

const label = document.createElement('div');
label.className = 'labelText';
label.textContent  = spaceX.info;

const image = document.createElement('img');
image.className = 'image_label';
image.src = spaceX.image;

image.appendChild(label);

const labeltext = new mapboxgl.Marker(label);
labeltext.setLngLat ([38.111377, 55.877410]);
labeltext.addTo(map);

const labelimage = new mapboxgl.Marker(image);
labelimage.setLngLat ([38.111377, 55.877410]);
labelimage.addTo(map);

});



// Label markers for 'language'

const language = {
    tittel: 'Chinese',
    info: 'Chinese is one the most spoken languages among humans',
    image: 'https://cdn.pixabay.com/photo/2015/08/24/12/31/the-great-wall-of-china-904870__340.jpg',
}

map.on("load", () => {

const label = document.createElement('div');
label.className = 'labelText';
label.textContent  = language.info;

const image = document.createElement('img');
image.className = 'image_label';
image.src = language.image;

image.appendChild(label);

const labeltext = new mapboxgl.Marker(label);
labeltext.setLngLat ([104.1361 ,35.8593]);
labeltext.addTo(map);

const labelimage = new mapboxgl.Marker(image);
labelimage.setLngLat ([104.1361 ,35.8593]);
labelimage.addTo(map);

});

// label markers for 'culture'


const cultureLabel = {
    tittel: 'Egypt',
    info: 'En av de eldste sivilisasjonene i menneskets historie starter i Egypt.',
    image: 'https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501__340.jpg',
}

map.on("load", () => {

const label = document.createElement('div');
label.className = 'labelText';
label.textContent  = cultureLabel.info;

const image = document.createElement('img');
image.className = 'image_label';
image.src = cultureLabel.image;

image.appendChild(label);

const labeltext = new mapboxgl.Marker(label);
labeltext.setLngLat ([31.233, 30.033]);
labeltext.addTo(map);

const labelimage = new mapboxgl.Marker(image);
labelimage.setLngLat ([31.233, 30.033]);
labelimage.addTo(map);

});


//  Planet status 

const planetLabel = {
    tittel: 'Artic Sea',
    info: 'Sjøisen i Arktisk påvirker klimaet på Jorden',
    image: 'https://cdn.pixabay.com/photo/2014/10/09/23/36/mountains-482689__340.jpg',
}

map.on("load", () => {

const label = document.createElement('div');
label.className = 'labelText';
label.textContent  = planetLabel.info;

const image = document.createElement('img');
image.className = 'image_label';
image.src = planetLabel.image;

image.appendChild(label);

const labeltext = new mapboxgl.Marker(label);
labeltext.setLngLat ([-60.5, 65.3]);
labeltext.addTo(map);

const labelimage = new mapboxgl.Marker(image);
labelimage.setLngLat ([-60.5, 65.3]);
labelimage.addTo(map);

});


