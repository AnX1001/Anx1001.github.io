// sound effect buttons 
let buttonsA = document.querySelectorAll('.buttonA');
const clicksound = document.querySelector('#clicksound');

// left hand buttons 
buttonsA.forEach((all) => {
    all.addEventListener('click', () => {
        console.log('clicksound');
        clicksound.play();
    })
  
})

// right hand buttons
let buttonsB = document.querySelectorAll('.buttonB');
const clicksoundTwo = document.querySelector('#clicksoundTwo');

buttonsB.forEach((all) => {
    all.addEventListener('click', () => {
        console.log('x2');
        clicksoundTwo.play();
    })
})


// text info and image info stored in objects

// DOM references buttons and content
const header = document.querySelector('.header');
const paraOne = document.querySelector('.paraOne');
const paraTwo = document.querySelector('.paraTwo');
const imgCS = document.querySelector('.imgCS');
const smlimgCs = document.querySelector('.smlimgCs');
const figcaptionOne = document.querySelector('#figcaption');
const figcaptionTwo = document.querySelector('#figcaptionTwo');

const sprak = {
    header: 'Human Languages',
    paraOne: 'Language is a defining feature of humanity, and a cultural universal. Human language is open—an infinite number of meanings can be produced by combining a limited number of symbols. Human language also has the capacity of displacement, using words to represent things and happenings that are not presently or locally occurring, but reside in the shared imagination of interlocutors.',
    paraTwo: 'Language is central to the communication between humans, and to the sense of identity that unites nations, cultures and ethnic groups. There are approximately six thousand different languages currently in use, including sign languages, and many thousands more that are extinct.',
    imageOne: 'https://cdn.pixabay.com/photo/2016/11/22/19/21/art-1850155__340.jpg',
    smlimgCs: 'https://cdn.pixabay.com/photo/2015/02/03/23/41/paper-623167__340.jpg',
    figcaptionOne: 'Language is central to the communication between humans',
    figcaptionTwo: 'Language is a defining feaure of humanity' ,
    voice:  function () {
        const speech = new SpeechSynthesisUtterance;
        speech.lang = 'en-US';
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = 'Estimates of the number of human languages in the world vary between 5,000 and 7,000. However, any precise estimate depends on the arbitrary distinction (dichotomy) between languages and dialect.';
    
        speechSynthesis.speak(speech);
        }

};


const culture = {
    header: 'Human Culture',
    paraOne: 'Culture is an umbrella term which encompasses the social behavior and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities, and habits of the individuals in these groups.',
    paraTwo: 'Humans acquire culture through the learning processes of enculturation and socialization, which is shown by the diversity of cultures across societies. A cultural norm codifies acceptable conduct in society; it serves as a guideline for behavior, dress, language, and demeanor in a situation, which serves as a template for expectations in a social group.',
    imageOne: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/04162012Bailes032.JPG/1024px-04162012Bailes032.JPG',
    smlimgCs: 'https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686__340.jpg',
    figcaptionOne: 'Celebrations, rituals, and festivities are important aspects of folk culture.', 
    figcaptionTwo: 'Infinite expression in infinite cultures',
    voice: function() { const speech = new SpeechSynthesisUtterance;
    speech.lang = 'en-US';
    speech.rate = .9;
    speech.pitch = 1;
    speech.volume = 1;
    speech.voice = speechSynthesis.getVoices()[1];
    speech.text = 'Humans acquire culture through the learning processes of enculturation and socialization.';

    speechSynthesis.speak(speech);
    }

}

const technology = {
    header: 'Human Technology',
    paraOne: 'Information technology subsequently led to the birth in the 1980s of the Internet, which ushered in the current Information Age. Humans started to explore space with satellites and in manned missions (1960s) going all the way to the moon. In medicine, this era brought innovations such as open-heart surgery and later stem-cell therapy along with new medications and treatments.',
    paraTwo: 'The Information Age has affected the workforce in several ways, such as compelling workers to compete in a global job market. One of the most evident concerns is the replacement of human labor by computers that can do their jobs faster and more effectively.',
    imageOne: 'https://cdn.pixabay.com/photo/2010/12/05/space-shuttle-992__340.jpg',
    smlimgCs: 'https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626__340.jpg',
    figcaptionOne: 'Humans are in the Age of Information', 
    figcaptionTwo: 'Increasingly more people are mind workers',
    voice: function() { const speech = new SpeechSynthesisUtterance;
    speech.lang = 'en-US';
    speech.rate = .9;
    speech.pitch = 1;
    speech.volume = 1;
    speech.voice = speechSynthesis.getVoices()[1];
    speech.text = 'The Information Age has affected the workforce in several ways.';

    speechSynthesis.speak(speech);
    }

}

const planet = {
    header: 'Planet Earth',
    paraOne: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of the surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere.',
    paraTwo: ' The outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. While the interior remains active with a solid iron inner core, a liquid outer core that generates its magnetic field, and a convecting mantle that drives plate tectonics.',
    imageOne: 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121__340.jpg',
    smlimgCs: 'https://cdn.pixabay.com/photo/2011/12/14/12/23/solar-system-11111__340.jpg',
    figcaptionOne: '', 
    figcaptionTwo: 'About 29% of the surface is land consisting of continens and islands',
    voice: function() { const speech = new SpeechSynthesisUtterance;
    speech.lang = 'en-US';
    speech.rate = .9;
    speech.pitch = 1;
    speech.volume = 1;
    speech.voice = speechSynthesis.getVoices()[1];
    speech.text = 'Earth is the third planet from the Sun.';

    speechSynthesis.speak(speech);
    }

}

console.log(sprak.paraOne);
console.log(culture.paraOne);
console.log(technology.paraOne);
console.log(technology.smlimgCs);

// replace content with appropiate text and image
// By using dot notation and content from object
// variables set to each paragraph and images in Content Screen

// content: Languages
document.querySelector('#langBtn').onclick = () => {
    header.textContent = sprak.header; 
    paraOne.textContent = sprak.paraOne;
    paraTwo.textContent = sprak.paraTwo;
    figcaptionOne.textContent = sprak.figcaptionOne;
    figcaptionTwo.textContent = sprak.figcaptionTwo;
    imgCS.src = sprak.imageOne;
    smlimgCs.src = sprak.smlimgCs;
    sprak.voice();


    map.flyTo({
        center: [104.1361 ,35.8593],
        zoom: 12,
        pitch: 30,
        duration: 10000
    })
    




};

// content: technology
document.querySelector('#techBtn').onclick = () => {
    header.textContent = technology.header; 
    paraOne.textContent = technology.paraOne;
    paraTwo.textContent = technology.paraTwo;
    figcaptionOne.textContent = technology.figcaptionOne;
    figcaptionTwo.textContent = technology.figcaptionTwo;
    imgCS.src = technology.imageOne;
    smlimgCs.src = technology.smlimgCs;
    technology.voice();

    // map fly to 
    map.flyTo({
        center: [38.11, 55.877],
        zoom: 12,
        pitch: 30,
        duration: 10000


    })


};


// Planet status: 
document.querySelector('#plnBtn').onclick = () => {
    header.textContent = planet.header; 
    paraOne.textContent = planet.paraOne;
    paraTwo.textContent = planet.paraTwo;
    figcaptionOne.textContent = planet.figcaptionOne;
    figcaptionTwo.textContent = planet.figcaptionTwo;
    imgCS.style.objectFit = 'cover';
    imgCS.src = planet.imageOne;
    smlimgCs.src = planet.smlimgCs;
    planet.voice();

    map.flyTo({
        center: [-60.5, 65.5],
        zoom: 5.5,
        pitch: 30,
        duration: 10000
    })
};

// Culture 
document.querySelector('#culture').onclick = () => {
    header.textContent = culture.header; 
    paraOne.textContent = culture.paraOne;
    paraTwo.textContent = culture.paraTwo;
    imgCS.src = culture.imageOne;
    smlimgCs.src = culture.smlimgCs;
    culture.voice();
    figcaptionOne.textContent = culture.figcaptionOne; 
    figcaptionTwo.textContent = culture.figcaptionTwo;

    map.flyTo({
        center: [31.233, 30.033],
        zoom: 12,
        pitch: 30,
        duration: 10000
    })
};

