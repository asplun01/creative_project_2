document.getElementById("gifSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("gifInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=J5vGzbhDOrAP2FlYfTrilTg8wEODjzvc" + "&limits=5";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      let text = "";
      for (let i = 0; i < json.data.length; i++) {
        text = "";
        text += json.data[i].title;
        console.log(text);
        results += '<div class="result">'
        results += '<img src="' + json.data[i].images.original.url + '"crossOrigin="anonymous"/>';
        results += '<p>' + text + '<br><br>' + json.data[i].import_datetime + '<br><br>' + json.data[i].url + '</p>';
        results += '</div>';

      }
      console.log(results);
      document.getElementById("gifResults").innerHTML = results;
    });
});
