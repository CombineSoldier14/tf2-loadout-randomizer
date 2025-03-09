var loadout;

fetch('weapons.json')
        .then((response) => response.json())
        .then(json => {loadout = json});

var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[ keys.length * Math.random() << 0]];
    };

function getLoadout() {
    document.getElementById("tf2class").innerHTML = "";
    document.getElementById("primary").innerHTML = "";
    document.getElementById("secondary").innerHTML = "";
    document.getElementById("melee").innerHTML = "";
    document.getElementById("sapper").innerHTML = "";

    var tf2class = document.getElementById("class-select")
        .options[document.getElementById("class-select").selectedIndex]
        .value;

    var primary = randomProperty(loadout[tf2class]["primary"])["name"];
    var secondary = randomProperty(loadout[tf2class]["secondary"])["name"];
    var melee = randomProperty(loadout[tf2class]["melee"])["name"];

    document.getElementById("tf2class").appendChild(document.createTextNode("Random loadout for " + tf2class + ":"));
    document.getElementById("primary").appendChild(document.createTextNode("Primary: " + primary));
    document.getElementById("secondary").appendChild(document.createTextNode("Secondary: " + secondary));
    document.getElementById("melee").appendChild(document.createTextNode("Melee: " + melee));

    if(tf2class == "spy") {
        var sapper = randomProperty(loadout[tf2class]["sapper"])["name"];
        document.getElementById("sapper").appendChild(document.createTextNode("Sapper: " + sapper));
    }
}