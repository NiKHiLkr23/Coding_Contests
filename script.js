let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {

    imagegallery = {
        "CodeChef": "images/codechef.webp",
        "AtCoder": "images/atcoder1.png",
        "HackerRank": "images/f2f38a80-8182-11ea-8059-91f14f9a3274.png",
        "HackerEarth": "images/HackerEarth_logo.png",
        "CodeForces": "images/Codeforces API.jpg",
        "LeetCode": "images/LeetCode_Sharing.png",
        "Kick Start": "images/random.png"
    }

    ihtml = ''
    for (item in contests) {
        ihtml += `
        <div class="card mx-2 my-2" style="width: 18rem;">
            <img src="..." class="card-img-top backimage" alt="..." >
            <div class="card-body ">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-text"> <b>WEBSITE</b>  ${contests[item].site}</p>
                <p><b>Starts at:</b> ${new Date(contests[item].start_time)}</p>
                <p><b>Ends at:</b> ${new Date(contests[item].end_time)}</p>
                <a href="${contests[item].url}" class="btn btn-outline-primary ">Go to contest page.</a>
            </div>
        </div>
        `

    }
    let cc = document.getElementById("cardContainer")
    cc.innerHTML = ihtml

    let image = document.querySelectorAll("img[src='...']")
    for (let iterator = 0; iterator < image.length; iterator++) {
        if (!contests[iterator].site in imagegallery){
        image[iterator].src = "images/random.png"
        }
        else{
        image[iterator].src = imagegallery[contests[iterator].site]
        }

    }

})









