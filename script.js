const reels = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } ,   {
        username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./reels/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./reels/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./reels/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    
];


const videos = document.querySelectorAll("video");

function playCurrentVideo() {
    videos.forEach((video, i) => {
        if (i === currentIndex) {
            video.play();
        } else {
            video.pause();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && currentIndex < reels.length - 1) {
        currentIndex++;
        scrollToReel(currentIndex);
        playCurrentVideo();
    }

    if (e.key === "ArrowUp" && currentIndex > 0) {
        currentIndex--;
        scrollToReel(currentIndex);
        playCurrentVideo();
    }
});

var sum=''  
reel.forEach(function (elem){
    sum =sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D">
                            <h4>Beylock ross</h4>
                            <button>Follow</button>
                        </div>
                         <h3>E commerce brand Ads</h3>

                        <div class="right">
                                <div class="like">
                                    <h4 class="like-icon icon"><i class="ri-heart-3-line"></i></h4>
                                    <h6>200</h6>
                                </div>

                                <div class="comment">
                                    <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                                    <h6>54</h6>
                                </div>

                                <div class="Share">
                                    <h4 class="Share-icon icon"><i class="ri-share-forward-fill"></i></h4>
                                    <h6>10+</h6>
                                </div>

                                <div class="Remix">
                                    <h4 class="Remix-icon icon"><i class="ri-remix-line"></i></h4>
                                </div>
                        </div>
                    </div>
                </div>`
})
