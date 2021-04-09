


//  Gamemap
mapboxgl.accessToken = 'hidden';
var gMap = new mapboxgl.Map({
container: 'gameMap',
style: 'mapbox://styles/mapbox/satellite-v9', // stylesheet location
attributionControl: false,
center: [39.11, 55.8], // starting position [lng, lat]
zoom: 6 // starting zoom



});

// Game Mode 

const gmBtn = document.querySelector('#gmBtn');
const contentScreen = document.querySelector('.contentScreen');
const gameScreen = document.querySelector('.gameScreen');
const startBtn = document.querySelector('#startBtn');

const shuttleBtn = document.querySelector('#shuttleBtn');

// hide scan and crew button before Game mode

const scanBtn = document.querySelector('#scanBtn');
const crewBtn = document.querySelector('#crew');
scanBtn.style.color = '#cc6699'; // show scan button
scanBtn.style.pointerEvents = 'none'; // scanning option
scanBtn.style.userSelect = 'none';

shuttleBtn.style.color = '#cc6699';
shuttleBtn.style.pointerEvents = 'none';
shuttleBtn.style.userSelect = 'none';

// start Game mode

gmBtn.onclick = () => {
    
    document.querySelector('#clicksoundThree').play(); //sound effect button
    // renderlabel();
    contentScreen.style.visibility = 'hidden';
    gameScreen.className = 'gameScreenActive';
    gameScreen.style.display = 'block'; //set to block because display none below

    // all other buttons unclickable and hide btn txt with same color
    for (let i = 0; i < buttonsA.length; i++ ) {
        console.log('r3');
        buttonsA[i].style.color = '#999fff'; // hidee btn text
        buttonsA[i].style.pointerEvents = 'none'; // make buttons unclickable
        buttonsB[i].style.pointerEvents = 'none'; // make buttons unclickable
        buttonsA[i].style.userSelect = 'none'; // make words unselectable
        buttonsB[i].style.userSelect = 'none';
        buttonsB[i].style.color = '#cc6699';
    }

    gmBtn.textContent = 'GAME MODE'; // show this text
    gmBtn.style.pointerEvents = 'auto'; // make clickable
    gmBtn.style.color = 'black';
    
    startBtn.style.color = 'black'; // show start text
    startBtn.style.pointerEvents = 'auto'; // make clickable

    scanBtn.style.color = 'black'; // show scan button
    scanBtn.style.pointerEvents = 'auto'; // scanning option

    gMap.resize(); //to fill entire game screen.

    // Fly to game start on map
    gMap.flyTo({
        center: [31.233, 30.033],
        zoom: 12,
        pitch: 30,
        duration: 5000
    })

    // game instructions
    setTimeout(gameInstructions.voice, 3000);

   

}

// Exit game screen by resetting location 
startBtn.onclick = () => {

setTimeout(reset,  1000);
    function reset() {
        location.reload();
    }

};




const cadet = {
    name: 'Spock ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Leonard_Nimoy_Spock_1967.jpg/467px-Leonard_Nimoy_Spock_1967.jpg',
}

const captain = {
    name: 'Captain Kirk',
    image: 'https://cdn.pixabay.com/photo/2014/07/16/14/32/william-shatner-394757__340.jpg'
}


function renderlabel() {
    gMap.resize();


    // cadet Tilly
    const tilly = document.createElement('div');
    tilly.className = 'tilly';
    tilly.textContent = cadet.name;
    console.log(cadet.name);
    
    const image = document.createElement('img');
    image.className = 'gameImg';
    image.src = cadet.image;
    
    const gamePerson = new mapboxgl.Marker(tilly);
    gamePerson.setLngLat ([31.233, 30.033]);
    gamePerson.addTo(gMap);
    
    const gameImg = new mapboxgl.Marker(image);
    gameImg.setLngLat ([31.233, 30.033]);
    gameImg.addTo(gMap);

    
    cadetperson = document.querySelector('.gameImg');
    cadetperson.onclick = ()=> {
        console.log('asdfgh');
        beamUp();
        tillyIsSaved.voice();
        saved.push('Tilly');
        missionComplete();
        
    }

    //Commander LaForge
    const kirk = document.createElement('div');
    kirk.className = 'kirk';
    kirk.textContent = captain.name;
    console.log(captain.name);
    
    const imgCaptain = document.createElement('img');
    imgCaptain.className = 'imgCaptain';
    imgCaptain.src = captain.image;
    
    const markerCaptain = new mapboxgl.Marker(kirk);
    markerCaptain.setLngLat ([31.260, 30.023]);
    markerCaptain.addTo(gMap);
    
    const markerImageCaptain = new mapboxgl.Marker(imgCaptain);
    markerImageCaptain.setLngLat ([31.260, 30.023]);
    markerImageCaptain.addTo(gMap);

    
    captainLabel = document.querySelector('.imgCaptain');
    captainLabel.onclick = ()=> {
        console.log('asdfgh');
        sendShuttleCraft.voice();
        shuttleBtn.style.color = 'black';
        shuttleBtn.style.pointerEvents = 'auto';
        
        
    }


   
    };

    // game function when click on game labels
    function beamUp() {
        cadetperson.style.display = 'none';
        document.querySelector('.tilly').style.display = 'none';
        beamUpSound.play();
    }

    function beamUpTwo() {
        document.querySelector('.imgCaptain').style.display = 'none';
        document.querySelector('.kirk').style.display = 'none';
        beamUpSound.play();
    }
   
   



    // scan button 
    scanBtn.onclick = () => {
        scanMap();
        scanSound.play();
        scanBtn.style.pointerEvents = 'none';
        
    }
    
    // activate animation by set class name. 
    const animation = document.querySelector('.animation');
    function scanMap() {
        animation.style.display = 'flex';
        setTimeout(renderlabel, 3000);

    }
    

    // Game voice commands

    const gameInstructions = {
        voice: function() { 
            const speech = new SpeechSynthesisUtterance;
            speech.rate = .9;
            speech.pitch = 1;
            speech.volume = 1;
            speech.voice = speechSynthesis.getVoices()[1];
            speech.text = '...Captain Kirk and Spock are missing in action. ....Please scan for their location ...and beam them up.';
    
        speechSynthesis.speak(speech);
        }
    }

    const tillyIsSaved = {
        voice: function() { const speech = new SpeechSynthesisUtterance;
      speech.lang = 'en-US';
      speech.rate = .9;
      speech.pitch = 1;
      speech.volume = 1;
      speech.voice = speechSynthesis.getVoices()[1];
      speech.text = '......Spock is now beamed on board.';
  
      speechSynthesis.speak(speech);
      }
  }

  
    const sendShuttleCraft = {
          voice: function() { 
            const speech = new SpeechSynthesisUtterance;
            speech.lang = 'en-US';
            speech.rate = .9;
            speech.pitch = 1;
            speech.volume = 1;
            speech.voice = speechSynthesis.getVoices()[1];
            speech.text = 'Captain Kirk cannot be beamed on board. Please send a shuttlecraft.';
    
        speechSynthesis.speak(speech);
        }
    }

    const setCourse = {
        voice: function() {
            const speech = new SpeechSynthesisUtterance;
            speech.lang = 'en-US';
            speech.rate = .9;
            speech.pitch = 1;
            speech.volume = 1;
            speech.voice = speechSynthesis.getVoices()[1];
            speech.text = '...Mission Complete.... We have received a distress signal from the outer rim. Set course....';
    
            speechSynthesis.speak(speech);
            }

        }
    
    const shuttle = document.querySelector('.shuttle');

    shuttleBtn.onclick = () => {
        console.log('sending shuttlecraft');
        shuttle.style.display = 'block';
        setTimeout(beamUpTwo, 3200);
        saved.push('Captain');
        setTimeout(missionComplete, 4000);

        shuttleBtn.style.color = '#cc6699';
        shuttleBtn.style.pointerEvents = 'none';
        shuttleBtn.style.userSelect = 'none';
    }

    // if saved.length 

    const saved = [];

    function missionComplete() {
        console.log(saved.length);
        if(saved.length === 1) {
            console.log('still missing persons!');

          
        } else {
            console.log('mission complete!');
            gMap.flyTo({
                center: [104.1361 ,35.8593],
                zoom: 2,
                pitch: 30,
                duration: 15000
            })
            setTimeout(setCourse.voice, 4000);
            document.querySelector('#congrats').style.display = 'block';
        
        
        }
    }

    