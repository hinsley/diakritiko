"use strict";

function alEsperanta(latina_teksto) {
    var esperanta_teksto = latina_teksto;

    esperanta_teksto = esperanta_teksto.split("cx").join("ĉ");
    esperanta_teksto = esperanta_teksto.split("gx").join("ĝ");
    esperanta_teksto = esperanta_teksto.split("hx").join("ĥ");
    esperanta_teksto = esperanta_teksto.split("jx").join("ĵ");
    esperanta_teksto = esperanta_teksto.split("sx").join("ŝ");
    esperanta_teksto = esperanta_teksto.split("ux").join("ŭ");
    esperanta_teksto = esperanta_teksto.split("Cx").join("Ĉ");
    esperanta_teksto = esperanta_teksto.split("Gx").join("Ĝ");
    esperanta_teksto = esperanta_teksto.split("Hx").join("Ĥ");
    esperanta_teksto = esperanta_teksto.split("Jx").join("Ĵ");
    esperanta_teksto = esperanta_teksto.split("Sx").join("Ŝ");
    esperanta_teksto = esperanta_teksto.split("Ux").join("Ŭ");

    console.log(esperanta_teksto);

    return esperanta_teksto;
}

function alLatina(esperanta_teksto) {
    var latina_teksto = "";

    for (var i in esperanta_teksto) {
        var letero = esperanta_teksto[i];

        switch(letero) {
            case "ĉ":
                latina_teksto += "cx";
                break;
            case "ĝ":
                latina_teksto += "gx";
                break;
            case "ĥ":
                latina_teksto += "hx";
                break;
            case "ĵ":
                latina_teksto += "jx";
                break;
            case "ŝ":
                latina_teksto += "sx";
                break;
            case "ŭ":
                latina_teksto += "ux";
                break;
            case "Ĉ":
                latina_teksto += "Cx";
                break;
            case "Ĝ":
                latina_teksto += "Gx";
                break;
            case "Ĥ":
                latina_teksto += "Hx";
                break;
            case "Ĵ":
                latina_teksto += "Jx";
                break;
            case "Ŝ":
                latina_teksto += "Sx";
                break;
            case "Ŭ":
                latina_teksto += "Ux";
                break;
            default:
                latina_teksto += letero;
        }
    }

    return latina_teksto;
}

window.addEventListener("load", function() {
    var input_latina = document.getElementById("input-latina"),
        input_esperanta = document.getElementById("input-esperanta");

    input_latina.addEventListener("change", function() {
        input_esperanta.value = alEsperanta(input_latina.value);
    });

    input_esperanta.addEventListener("change", function() {
        input_latina.value = alLatina(input_esperanta.value);
    });
});