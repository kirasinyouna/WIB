            // 圖片路徑和對應的YouTube歌曲ID
            var songs = [
                { imagePath: "隨機歌曲/夜.jpg", youtubeId: "x8VYWazR5mE" },
                { imagePath: "隨機歌曲/怪物.jpg", youtubeId: "dy90tA3TT1c" },
                { imagePath: "隨機歌曲/ANO.jpg", youtubeId: "-lec--FlSJ4" },
                { imagePath: "隨機歌曲/boku.jpg", youtubeId: "_LzAfYUd70E" },
                { imagePath: "隨機歌曲/BYEBYE.jpg", youtubeId: "G2Dl0q0XHx8" },
                { imagePath: "隨機歌曲/DEVIL.jpg", youtubeId: "UyAcwI-vP64" },
                { imagePath: "隨機歌曲/fridaynight.jpg", youtubeId: "4Pls29qqg6Y" },
                { imagePath: "隨機歌曲/HND.jpg", youtubeId: "pRlzN2I9Knw" },
                { imagePath: "隨機歌曲/horoyoi.jpg", youtubeId: "1jPyWdBPVfI" },
                { imagePath: "隨機歌曲/kirari.jpg", youtubeId: "TcLLpZBWsck" },
                { imagePath: "隨機歌曲/LIMBO.jpg", youtubeId: "-P-SgEFh-SY" },
                { imagePath: "隨機歌曲/mela.jpg", youtubeId: "aRDURmIYBZ4" },
                { imagePath: "隨機歌曲/nezu.jpg", youtubeId: "-FWIhd1J1K0" },
                { imagePath: "隨機歌曲/overdose.jpg", youtubeId: "H08YWE4CIFQ" },
                { imagePath: "隨機歌曲/YELLOW.jpg", youtubeId: "1_lap6dzSUc" },
                { imagePath: "隨機歌曲/三色.jpg", youtubeId: "iOQawGuWnIQ" },
                { imagePath: "隨機歌曲/六兆年.png", youtubeId: "Om3MTou2kPg" },
                { imagePath: "隨機歌曲/可愛.jpg", youtubeId: "K4xLi8IF1FM" },
                { imagePath: "隨機歌曲/哭阿.jpg", youtubeId: "T0D--ZghQ-s" },
                { imagePath: "隨機歌曲/喜歡.jpg", youtubeId: "g8ENtHe2hMU" },
                { imagePath: "隨機歌曲/夢.jpg", youtubeId: "sAuEeM_6zpk" },
                { imagePath: "隨機歌曲/子.jpg", youtubeId: "7HgJIAUtICU" },
                { imagePath: "隨機歌曲/幾度悲傷.jpg", youtubeId: "cjkkFFF2N0k" },
                { imagePath: "隨機歌曲/愛傳.jpg", youtubeId: "9qRCARM_LfE" },
                { imagePath: "隨機歌曲/打上花火.jpg", youtubeId: "-tKVN2mAKRI" },
                { imagePath: "隨機歌曲/斜陽.jpg", youtubeId: "bqigIHMComE" },
                { imagePath: "隨機歌曲/春待.jpg", youtubeId: "FVZJJ2v1Zys" },
                { imagePath: "隨機歌曲/死.jpg", youtubeId: "y_IqIi3tQDs" },
                { imagePath: "隨機歌曲/煙.jpg", youtubeId: "V_iQu-Q7xBc" },
                { imagePath: "隨機歌曲/白日夢.jpg", youtubeId: "9k_csTdypRQ" },
                { imagePath: "隨機歌曲/瞳.jpg", youtubeId: "XEEXE8Ei5SA" },
                { imagePath: "隨機歌曲/色彩.jpg", youtubeId: "E9Dru15yq9w" },
                { imagePath: "隨機歌曲/花亡霊.jpg", youtubeId: "9lVPAWLWtWc" },
                { imagePath: "隨機歌曲/花塔.jpg", youtubeId: "Rwzy6Qt8gq8" },
                { imagePath: "隨機歌曲/血流.jpg", youtubeId: "munngDZLwO4" },
                { imagePath: "隨機歌曲/都落.jpg", youtubeId: "pHdJmDFYqTU" },
                { imagePath: "隨機歌曲/雪解.jpg", youtubeId: "aLTQmyIGoXg" },
                { imagePath: "隨機歌曲/食蟲植物.jpg", youtubeId: "F9eCSWEJYjk" },
                { imagePath: "隨機歌曲/單焦點.jpg", youtubeId: "TuAT5wCPo4c" },
                { imagePath: "隨機歌曲/三原色.jpg", youtubeId: "nhOhFOoURnE" },
                { imagePath: "隨機歌曲/希望論.jpg", youtubeId: "ikqA7l2QHc4" },
                { imagePath: "隨機歌曲/PAKU.jpg", youtubeId: "aSvp9Fj9OL8" },
                { imagePath: "隨機歌曲/水平線.jpg", youtubeId: "iqEr3P78fz8" },
                { imagePath: "隨機歌曲/鸚鵡.jpg", youtubeId: "j83OVgv6woA" },
                { imagePath: "隨機歌曲/SOB.jpg", youtubeId: "MhFr2LnikQk" },
            ];
    
            // 隨機選擇四張圖片
            var randomSongs = [];
            while (randomSongs.length < 4) {
                var randomIndex = Math.floor(Math.random() * songs.length);
                if (randomSongs.indexOf(songs[randomIndex]) === -1) {
                    randomSongs.push(songs[randomIndex]);
                }
            }
    
            // 將選擇的圖片顯示在網頁上
            var songContainer = document.getElementById("songContainer");
            for (var i = 0; i < randomSongs.length; i++) {
                var songDiv = document.createElement("div");
                songDiv.className = "song";
                var image = document.createElement("img");
                image.src = randomSongs[i].imagePath;
                image.setAttribute("data-youtube-id", randomSongs[i].youtubeId);
                image.addEventListener("click", openSong);
                songDiv.appendChild(image);
                songContainer.appendChild(songDiv);
            }
    
            // 點擊圖片時在新視窗中開啟相應的YouTube歌曲
            function openSong(event) {
                var youtubeId = event.target.getAttribute("data-youtube-id");
                if (youtubeId) {
                    window.open("https://www.youtube.com/watch?v=" + youtubeId);
                }
            }