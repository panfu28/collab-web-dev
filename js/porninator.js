//get random URL for a Danbooru image with chosen tags, set it as the src attribute of passed element,
//and set it as href attribute of passed <a></a> element. also manages loading and error screen.
//i couldnt find a way to have a function that just returns the link itself, i wish i had fucking pointers
function getRandomDanbooru(element, tag1, tag2, aTag) {
    tag1 = tag1.replace(/ /g, "_");
    tag2 = tag2.replace(/ /g, "_");
    function setImageLink(element, link) {element.attr("src", link);}
    function setPostLink(element, postId) {element.attr("href", "https://danbooru.donmai.us/posts/" + postId);}

    setImageLink($("#porninator-overlay"), "img/loading.png");
    $("#porninator-overlay").show();
    var response = $.getJSON('https://danbooru.donmai.us/posts/random.json?tags=' + tag1 + '+' + tag2, function() {
          var link = response.responseJSON.file_url;
          var postId = response.responseJSON.id;
          setImageLink(element, link);
          if (aTag !== undefined) {setPostLink(aTag, postId);}
    }).fail(function() {setImageLink($("#porninator-overlay"), "img/error.png");});
}
