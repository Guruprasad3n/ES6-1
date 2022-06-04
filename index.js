/*

let arr =[1,2,3,4]

console.log(...arr);

let arr = [1,2,3,4]
let arr1 = [1,2,3,4,5]

let newArray = [...arr, ...arr1]

console.log(newArray)


function fun(a, c,...b){
    console.log(a)
    console.log(b)
    console.log(c)

}


fun("Box1", "Box2,", "Box3", "Box4")
*/



//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]'


//curl \
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=[YOUR_API_KEY]'
// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
// --header 'Accept: application/json' \
// --




/*
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/tvm1KsOiGUI"  // Video Id
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; 
autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe>
*/










const api = "AIzaSyAEYRcU5tcwTL8B3hNyvUG_VT21y1iU8c8";
let search = async () => {

    let input = document.getElementById("query").value


    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${api}`

    let res = await fetch(url);

    let data = await res.json()
    console.log(data)
    appendData(data.items)
}


let containet = document.getElementById("results")

let appendData = (data) => {


    containet.innerHTML = null;

    // console.log(data)

    data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
    // data.forEach((ele) => {
        // console.log(title)
        // console.log(videoId)

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = thumbnails.medium.url;
        image.addEventListener("click", ()=>{
            window.localStorage.setItem("video", JSON.stringify(video1))
            window.location.href ="video.html"

        })

        let iframe = document.createElement("iframe")
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.allow = "fullscreen";

        let h3 = document.createElement("h3");
        h3.innerText = title;

        let video1 = {
            title,
            videoId
        };

        div.append(image, h3)
        containet.append(div)


        // div.onclick=()=>{
        //     playVideo();
        // }
        // div.append(iframe,h3)



    });

}

// let abc = JSON.parse(localStorage.getItem("video")) || []
// let myFun = (el) => {
    // el.pusg(abc)

    // localStorage.setItem("video", JSON.stringify(abc));
    // window.location.href = "video.html"
// }


//     function myFun(elem){
//         let vid = JSON.parse(localStorage.getItem("video"))||[];
//     vid.push(elem);
//     localStorage.setItem("video", JSON.stringify(vid))
//     window.location.href = "video.html"
// };
































