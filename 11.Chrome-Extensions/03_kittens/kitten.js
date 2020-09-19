console.log('kittens of the world, unite as one!');

let filenames = [
    "elizabeth-r-PCLspnx6D0Q-unsplash.jpg",
    "isabela-ferreira-MQMVPYh3bhk-unsplash.jpg",
    "mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg",
    "sereja-ris-g3B53PbBfwU-unsplash.jpg",
    "tony-wang-00MAHmixauc-unsplash.jpg"
];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs){
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'kittens/'+ filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(imgElt.src);

}