// Youtube API - Reading document

// collecting Array of Object

// Appending the Data in DOM

// My API Key : AIzaSyDTr9EoUscFUXB6t-8AT76A1-bUam3C_iQ

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=standup%20comedy&key=[YOUR_API_KEY]

// ! Possible mistakes
//1. async await not in pair
// 2. https
// 3. res.json()
// 4. seperate parameters using &
// 5. wrong destination
// 6. spelling mistake

// ! making function to append data

// we want to embed our video to our app - means we want to add video to our app -
// embed - <iframe width="560" height="315" src="https://www.youtube.com/embed/90JsrQwE5CA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// embed url - src="https://www.youtube.com/embed/90JsrQwE5CA"

const resultDiv = document.getElementById("results");

const searchVideos = async () => {
  try {
    let inp = document.getElementById("search").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyDTr9EoUscFUXB6t-8AT76A1-bUam3C_iQ&maxResults=25`
    );

    let data = await res.json();

    let videoArr = data.items;

    appendVideos(videoArr);

    console.log("data:", data);
  } catch (error) {
    console.log("error:", error);
  }
};

const appendVideos = (videoArr) => {
  resultDiv.innerHTML = null;

  videoArr.forEach(
    ({
      snippet,
      snippet: {
        thumbnails: {
          high: { url },
        },
      },
    }) => {
      let main = document.createElement("div");
      main.setAttribute("id", "wrapper");

      let title = document.createElement("p");
      title.textContent = snippet.title;

      let iframe = document.createElement("img");
      iframe.src = url;
      iframe.style.height = "195px";
      iframe.style.width = "295px";

      main.append(iframe, title);

      resultDiv.append(main);
    }
  );
};


function runProgram(input=''){
  
    
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}