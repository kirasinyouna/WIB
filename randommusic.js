// 定義隨機圖片和音樂的資源清單
var randomResources = [
    {
      image: './img/夜.jpg',
      music: './music/夜.mp3',
      caption: '夜に駆ける'
    },
    {
      image: './img/怪物.jpg',
      music: './music/怪物.mp3',
      caption: '怪物'
    },
    {
      image: './img/打上花火.jpg',
      music: './music/打上花火.mp3',
      caption: '打上花火'
    }
    // 可以繼續添加更多的圖片和音樂
  ];

  // 隨機選擇一個資源
  var randomIndex = Math.floor(Math.random() * randomResources.length);
  var randomResource = randomResources[randomIndex];


  // 創建圖片元素並設置圖片來源
  var randomMusicImage = document.getElementById('randomMusicImage');
  var imageElement = document.createElement('img');
  imageElement.src = randomResource.image;
  randomMusicImage.appendChild(imageElement);

  
  
  // 設置音樂來源並自動播放
  var randomMusicAudio = document.getElementById('randomMusicAudio');
  randomMusicAudio.src = randomResource.music;
  randomMusicAudio.play();  


  var randomMusicAudio = document.getElementById('randomMusicAudio');
  randomMusicAudio.src = randomResource.music;
  randomMusicAudio.play();
  