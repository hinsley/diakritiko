"use strict";

function alEsperanta(latina_teksto) {
    var esperanta_teksto = latina_teksto
        .replace(/cx/g, "ĉ")
        .replace(/gx/g, "ĝ")
        .replace(/hx/g, "ĥ")
        .replace(/jx/g, "ĵ")
        .replace(/sx/g, "ŝ")
        .replace(/ux/g, "ŭ")
        .replace(/Cx/g, "Ĉ")
        .replace(/Gx/g, "Ĝ")
        .replace(/Hx/g, "Ĥ")
        .replace(/Jx/g, "Ĵ")
        .replace(/Sx/g, "Ŝ")
        .replace(/Ux/g, "Ŭ");

    return esperanta_teksto;
}

function alLatina(esperanta_teksto) {
    var latina_teksto = esperanta_teksto
        .replace(/ĉ/g, "cx")
        .replace(/ĝ/g, "gx")
        .replace(/ĥ/g, "hx")
        .replace(/ĵ/g, "jx")
        .replace(/ŝ/g, "sx")
        .replace(/ŭ/g, "ux")
        .replace(/Ĉ/g, "Cx")
        .replace(/Ĝ/g, "Gx")
        .replace(/Ĥ/g, "Hx")
        .replace(/Ĵ/g, "Jx")
        .replace(/Ŝ/g, "Sx")
        .replace(/Ŭ/g, "Ux");

    return latina_teksto;
}

window.addEventListener("load", function() {
    var input_latina = document.getElementById("input-latina"),
        input_esperanta = document.getElementById("input-esperanta");

    input_latina.addEventListener("input", function() {
        input_esperanta.value = alEsperanta(input_latina.value);
    });

    input_esperanta.addEventListener("input", function() {
        input_latina.value = alLatina(input_esperanta.value);
    });
});