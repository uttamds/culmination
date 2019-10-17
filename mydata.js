var counter = 1;


function foo() {
    if (counter <= 3) {
        var ourRequest = new XMLHttpRequest;
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
        ourRequest.onload = function () {
            console.log(ourRequest.responseText);
            renderHTML(JSON.parse(ourRequest.responseText))
        }
        ourRequest.send();
        counter++;
    }
    else
    {
        document.getElementById("button1").disabled = true;
    }
}


function renderHTML(data) {
    var x;
    for (x = 0; x < data.length; x++) {
        var tt = "";
        tt = "<p>" + data[x].name + " the " + data[x].species + " likes " + "</p>";
        for (i = 0; i < data[x].foods.likes.length; i++)
            tt += data[x].foods.likes[i] + " ";
        document.getElementById("showdata").insertAdjacentHTML("beforeend", tt)
    }
}
