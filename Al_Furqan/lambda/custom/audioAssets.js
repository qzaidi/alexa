'use strict';


var data = require('./quran-data');

var audioData = data.Sura.map(function(y,idx) { 
    return { 
              title: y[5],
              url: 'https://server8.mp3quran.net/afs/' + ("00" + idx).slice(-3) + '.mp3'
           } 
});

var searchIndex = {
  'fateh ha': 1,
  'hamd' : 1,
  'yaseen': 36,
  'tawheed': 112,
  'ikhlaas': 112,
  'rahman': 55,
  'naas': 114,
}

module.exports = {
  audioData: audioData,
  searchIndex: searchIndex
};
