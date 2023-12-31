let total = 0;
const selectedOptions = [];

function countNumbers() {
    var furColor = document.getElementById("furColorTotal").value;
    var fleeceColor = document.getElementById("fleeceColorTotal").value;
    var minkyColor = document.getElementById("minkyColorTotal").value;
    var piercingTotal = document.getElementById("piercingsTotal").value;
    var piercingTotalSeperate = document.getElementById("piercingsTotalSeperate").value;
    const eyelids = document.getElementById('eyelids');
    const checkboxEyelid = document.getElementById('extraEyelidsBox');
    const checkboxEyelidSeperate = document.getElementById('extraEyelidsBoxSeperate');
    const checkboxEyelid2 = document.getElementById('extraEyelidsBox2');
    const checkboxEyelid2Seperate = document.getElementById('extraEyelidsBox2Seperate');

    var input = document.getElementsByName("product");
    var totalAmount = 0;
    var totaal = document.getElementById("totaal");

    // Fur kleuren
    // Define an object to store the values for each furColor
    const furColorValues = {
        4: 60,
        5: 120,
        6: 180,
        7: 240,
        8: 300,
        9: 360,
        10: 420,
    };

    // Check if the furColor exists in the furColorValues object
    if (furColor in furColorValues) {
        totalAmount += furColorValues[furColor];
        totaal.innerHTML = "€" + parseFloat(totalAmount);
    }

    const fleeceColorValues = {
        1: 10,
        2: 20,
        3: 30,
        4: 40,
        5: 50,
        6: 60,
        7: 70,
        8: 80,
        9: 90,
        10: 100,
    };

    if (fleeceColor in fleeceColorValues) {
        totalAmount += fleeceColorValues[fleeceColor];
        totaal.innerHTML = "€" + parseFloat(totalAmount);
    }

    const minkyColorValues = {
        1: 15,
        2: 30,
        3: 45,
        4: 60,
        5: 75,
        6: 90,
        7: 105,
        8: 120,
        9: 135,
        10: 150,
    };

    if (minkyColor in minkyColorValues) {
        totalAmount += minkyColorValues[minkyColor];
        totaal.innerHTML = "€" + parseFloat(totalAmount);
    }

    const piercingTotalValues = {
        1: 25,
        2: 25,
        3: 30,
        4: 35,
        5: 40,
        6: 45,
        7: 50,
        8: 55,
        9: 60,
        10: 65,
    };

    if (piercingTotal in piercingTotalValues) {
        totalAmount += piercingTotalValues[piercingTotal];
        totaal.innerHTML = "€" + parseFloat(totalAmount);
    }

    if (piercingTotalSeperate in piercingTotalValues) {
        totalAmount += piercingTotalValues[piercingTotalSeperate];
        totaal.innerHTML = "€" + parseFloat(totalAmount);
    }

    // Add every price to a total price
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            totalAmount += parseFloat(input[i].value);
        }
    }

    totaal.innerHTML = "€" + parseFloat(totalAmount).toFixed(2);
}

function listOfOptions() {
    // Make a list of all options you choose
    const checkboxes = document.querySelectorAll('input[name="product"]');
    const choices = document.getElementById("choices");
    const groups = {};

    for (let i = 0; i < checkboxes.length; i++) {
        const placeholder = checkboxes[i].placeholder;
        if (checkboxes[i].checked) {
            const groupName = checkboxes[i].dataset.group || "Uncategorized";
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(placeholder);
        }
    }

    // Handle number inputs
    const numberInputs = document.querySelectorAll('input[type="number"][data-group]');
    numberInputs.forEach((input) => {
        const value = input.value;
        if (value) {
            const groupName = input.dataset.group || "Uncategorized";

            // Special case for fur colors and fleece/minky colors
            if (groupName === "Fur colors:" || groupName === "Fleece:" || groupName === "Minky:") {
                groups["Bundle"].push(`${input.placeholder}: ${value}`);
            } else if (groupName === "Piercings:") {
                groups["Head"].push(`${input.placeholder}: ${value}`);
            } else {
                if (!groups[groupName]) {
                    groups[groupName] = [];
                }
                groups[groupName].push(`${input.placeholder}: ${value}`);
            }
        }
    });

    let result = "";

    for (const groupName in groups) {
        if (groups.hasOwnProperty(groupName)) {
            result += `<p class="groupname">${groupName}</p><ul>`;
            groups[groupName].forEach((option) => {
                result += `<li>${option}</li>`;
            });
            result += "</ul>";
        }
    }

    choices.innerHTML = `<p>You have selected:</p>${result}`;
}

$(document).ready(function() {
    // Aanvinken van SEPERATES
    $('#seperateHeads').change(function() {
        $('#headsSeperate').fadeToggle(1);
    });
    $('#seperateHandpaws').change(function() {
        $('#handpawsSeperate').fadeToggle(1);
    });
    $('#seperateFeetpaws').change(function() {
        $('#feetpawsSeperate').fadeToggle(1);
    });
    $('#seperateTail').change(function() {
        $('#tailSeperate').fadeToggle(1);
    });
    $('#seperateBody').change(function() {
        $('#bodySeperate').fadeToggle(1);
    });
    $('#seperateArmsleeves').change(function() {
        $('#armsleevesSeperate').fadeToggle(1);
    });

    // Aanvinken van PARTIAL
    $('#partial').change(function() {
        $('#heads, #handpaws, #tail, #headonlySection, #fullsuitSection, #armsleeves, #feetpaws, #feetpawsPartialOnly, #extraFeetpair, #questionExtraTail ').fadeToggle(1);
    });

    // Aanvinken van HEAD ONLY
    $('#headonly').change(function() {
        $('#heads, #partialSection, #fullsuitSection').fadeToggle(1);
    });

    // Aanvinken van FULLSUIT
    $('#fullsuit').change(function() {
        $('#heads, #body, #handpaws, #feetpaws, #feetpawsOptions, #tail, #headonlySection, #partialSection, .tailFullsuit, #extraFeetpair, #questionExtraTail').fadeToggle(1);
    });
    $('#bucketheadChoice').change(function() {
        $('#movingJawChoice').fadeToggle(1);
        $('#bucketheadOnly').prop('disabled', (i, v) => !v);
    });
    $('#movingJawChoice').change(function() {
        $('#bucketheadChoice').fadeToggle(1);
    });
    // HEAD OPTIONS SEPERATE
    $('#bucketheadChoiceSeperate').change(function() {
        $('#movingJawChoiceSeperate').fadeToggle(1);
        $('#bucketheadOnlySeperate').prop('disabled', (i, v) => !v);
    });
    $('#movingJawChoiceSeperate').change(function() {
        $('#bucketheadChoiceSeperate').fadeToggle(1);
    });

    // Aanvinken kleuren STOF
    $('#fleeceChoice').change(function() {
        $('#fleeceTotalColors, #minky').fadeToggle(1);
    });
    $('#minkyChoice').change(function() {
        $('#minkyTotalColors, #fleece').fadeToggle(1);
    });

    // Aanvinken piercings
    $('#piercingChoice').change(function() {
        $('#piercingsGroup').fadeToggle(1);
    });

    // Aanvinken piercings SEPERATE
    $('#piercingChoiceSeperate').change(function() {
        $('#piercingsGroupSeperate').fadeToggle(1);
    });
    // Aanvinken eyelids
    $('#eyelids').change(function() {
        $('#extraEyelids').fadeToggle(1);
        $('#multipleEyelidsChoice').fadeToggle(1);
    });
    // Aanvinken eyelids SEPERATE
    $('#eyelidsSeperate').change(function() {
        $('#extraEyelidsSeperate').fadeToggle(1);
        $('#multipleEyelidsChoiceSeperate').fadeToggle(1);
    });
    // Extra tongues
    $('#tongues').change(function() {
        $('#extraTongues, #extraTongues2').fadeToggle(1);
    });
    // Extra tongues SEPERATE
    $('#tonguesSeperate').change(function() {
        $('#extraTonguesSeperate, #extraTongues2Seperate').fadeToggle(1);
    });

    // VERWIJDER ALLE ANDERE OPTIES OM HET MAKKELIJKER TE MAKEN
    // Eyelids
    $('#multipleEyelidsChoice').change(function() {
        $('#fixedEyelidsChoice').fadeToggle(1);
    });
    $('#extraEyelids').change(function() {
        $('#extraEyelids2').fadeToggle(1);
    });
    // Eyelids SEPERATE
    $('#multipleEyelidsChoiceSeperate').change(function() {
        $('#fixedEyelidsChoiceSeperate').fadeToggle(1);
    });
    $('#extraEyelidsSeperate').change(function() {
        $('#extraEyelids2Seperate').fadeToggle(1);
    });

    // Paw pads
    $('#handpawsPadsChoice').change(function() {
        $('#handpawsNoPadsChoice').fadeToggle(1);
    });
    $('#handpawsNoPadsChoice').change(function() {
        $('#handpawsPadsChoice').fadeToggle(1);
    });

    // Paw pads SEPERATE
    $('#handpawsPadsChoiceSeperate').change(function() {
        $('#handpawsNoPadsChoiceSeperate').fadeToggle(1);
    });
    $('#handpawsNoPadsChoiceSeperate').change(function() {
        $('#handpawsPadsChoiceSeperate').fadeToggle(1);
    });

    // Hair
    $('#noHairChoice').change(function() {
        $('#hairPoofChoice').fadeToggle(1);
        $('#longHairChoice').fadeToggle(1);
        $('#kanekalonHairChoice').fadeToggle(1);
    });
    $('#hairPoofChoice').change(function() {
        $('#noHairChoice').fadeToggle(1);
        $('#longHairChoice').fadeToggle(1);
        $('#kanekalonHairChoice').fadeToggle(1);
    });
    $('#longHairChoice').change(function() {
        $('#noHairChoice').fadeToggle(1);
        $('#hairPoofChoice').fadeToggle(1);
        $('#kanekalonHairChoice').fadeToggle(1);
    });
    $('#kanekalonHairChoice').change(function() {
        $('#noHairChoice').fadeToggle(1);
        $('#hairPoofChoice').fadeToggle(1);
        $('#longHairChoice').fadeToggle(1);
    });

    // Hair SEPERATE
    $('#noHairChoiceSeperate').change(function() {
        $('#hairPoofChoiceSeperate').fadeToggle(1);
        $('#longHairChoiceSeperate').fadeToggle(1);
        $('#kanekalonHairChoiceSeperate').fadeToggle(1);
    });
    $('#hairPoofChoiceSeperate').change(function() {
        $('#noHairChoiceSeperate').fadeToggle(1);
        $('#longHairChoiceSeperate').fadeToggle(1);
        $('#kanekalonHairChoiceSeperate').fadeToggle(1);
    });
    $('#longHairChoiceSeperate').change(function() {
        $('#noHairChoiceSeperate').fadeToggle(1);
        $('#hairPoofChoiceSeperate').fadeToggle(1);
        $('#kanekalonHairChoiceSeperate').fadeToggle(1);
    });
    $('#kanekalonHairChoiceSeperate').change(function() {
        $('#noHairChoiceSeperate').fadeToggle(1);
        $('#hairPoofChoiceSeperate').fadeToggle(1);
        $('#longHairChoiceSeperate').fadeToggle(1);
    });

    // Body type
    $('#plantigradeChoice').change(function() {
        $('#digitigradeChoice').fadeToggle(1);
        $('#customBodyChoice').fadeToggle(1);
    });
    $('#digitigradeChoice').change(function() {
        $('#plantigradeChoice').fadeToggle(1);
        $('#customBodyChoice').fadeToggle(1);
    });
    $('#customBodyChoice').change(function() {
        $('#plantigradeChoice').fadeToggle(1);
        $('#digitigradeChoice').fadeToggle(1);
    });

    // Body type SEPERATE
    $('#plantigradeChoiceSeperate').change(function() {
        $('#digitigradeChoiceSeperate').fadeToggle(1);
        $('#customBodyChoiceSeperate').fadeToggle(1);
    });
    $('#digitigradeChoiceSeperate').change(function() {
        $('#plantigradeChoiceSeperate').fadeToggle(1);
        $('#customBodyChoiceSeperate').fadeToggle(1);
    });
    $('#customBodyChoiceSeperate').change(function() {
        $('#plantigradeChoiceSeperate').fadeToggle(1);
        $('#digitigradeChoiceSeperate').fadeToggle(1);
    });

    // Feetpaws type
    $('#indoor').change(function() {
        $('#outdoor').fadeToggle(1);
        $('#shoesBase').fadeToggle(1);
    });

    // Feetpaws type EXTRA
    $('#indoorExtra').change(function() {
        $('#outdoorExtra').fadeToggle(1);
        $('#shoesBaseExtra').fadeToggle(1);
    });

    // Feetpaws type SEPERATE
    $('#indoorSeperate').change(function() {
        $('#outdoorSeperate').fadeToggle(1);
        $('#shoesBaseSeperate').fadeToggle(1);
    });

    // Feetpaws type EXTRA SEPERATE
    $('#indoorExtra').change(function() {
        $('#outdoorExtraSeperate').fadeToggle(1);
        $('#shoesBaseExtraSeperate').fadeToggle(1);
    });

    // Feetpaws base
    $('#outdoor').change(function() {
        $('#indoor').fadeToggle(1);

        $('#slippersBase').change(function() {
            $('#shoesBase').fadeToggle(1);
        });
        $('#shoesBase').change(function() {
            $('#slippersBase').fadeToggle(1);
        });
    });

    // Feetpaws base
    $('#outdoorExtra').change(function() {
        $('#indoorExtra').fadeToggle(1);

        $('#slippersBaseExtra').change(function() {
            $('#shoesBaseExtra').fadeToggle(1);
        });
        $('#shoesBaseExtra').change(function() {
            $('#slippersBaseExtra').fadeToggle(1);
        });
    });

    // Feetpaws base SEPERATE
    $('#outdoorSeperate').change(function() {
        $('#indoorSeperate').fadeToggle(1);

        $('#slippersBaseSeperate').change(function() {
            $('#shoesBaseSeperate').fadeToggle(1);
        });
        $('#shoesBaseSeperate').change(function() {
            $('#slippersBaseSeperate').fadeToggle(1);
        });
    });

    // Feetpaws base EXTRA SEPERATE
    $('#outdoorExtraSeperate').change(function() {
        $('#indoorExtraSeperate').fadeToggle(1);

        $('#slippersBaseExtraSeperate').change(function() {
            $('#shoesBaseExtraSeperate').fadeToggle(1);
        });
        $('#shoesBaseExtraSeperate').change(function() {
            $('#slippersBaseExtraSeperate').fadeToggle(1);
        });
    });

    $('#feetpawsExtraYes').change(function() {
        $('#feetpawsExtra').fadeToggle(1);
    });

    $('#feetpawsExtraYesSeperate').change(function() {
        $('#feetpawsExtraSeperate').fadeToggle(1);
    });

    $('#feetpawsPartialYes').change(function() {
        $('#feetpawsOptions').fadeToggle(1);
    });

    $('#feetpawsPartialYesSeperate').change(function() {
        $('#feetpawsOptionsSeperate').fadeToggle(1);
    });

    // EXTRAS
    $('#tailExtraYes').change(function() {
        $('#tailExtra').fadeToggle(1);
    });

    $('#armsleevesYes').change(function() {
        $('#armsleevesOptions').fadeToggle(1);
    });

    $('#feetpawsYes').change(function() {
        $('#feetpawsOptions').fadeToggle(1);
    });

    // EXTRAS
    $('#tailExtraYesSeperate').change(function() {
        $('#tailExtraSeperate').fadeToggle(1);
    });

    $('#armsleevesYesSeperate').change(function() {
        $('#armsleevesOptionsSeperate').fadeToggle(1);
    });

    $('#feetpawsYesSeperate').change(function() {
        $('#feetpawsOptionsSeperate').fadeToggle(1);
    });
});

function uncheckAll() {
    window.location.reload();
}

function uncheckHeadOnly() {
    const checkbox = document.getElementById("headonly");

    if (checkbox.checked == false) {
        window.location.reload();
    };
}

function uncheckPartial() {
    const checkbox = document.getElementById("partial");

    if (checkbox.checked == false) {
        window.location.reload();
    };
}

function uncheckFullsuit() {
    const checkbox = document.getElementById("fullsuit");

    if (checkbox.checked == false) {
        window.location.reload();
    };
}

// function uncheckFullsuit() {
//     const checkboxFullsuit = document.getElementById("fullsuit");
//     const furColorInput = document.getElementById("furColorTotal");
//     const fleeceColorInput = document.getElementById("fleeceColorTotal");
//     const minkyColorInput = document.getElementById("minkyColorTotal");
//     const piercingInput = document.getElementById("piercingsTotal");

//     if (!checkboxFullsuit.checked) {
//         // Uncheck all options related to Fullsuit
//         const fullsuitOptions = document.querySelectorAll('input[data-group="Head:"], input[data-group="Handpaws:"]');
//         fullsuitOptions.forEach((option) => {
//             option.checked = false;
//         });

//         // Remove Fullsuit options from the selectedOptions array
//         selectedOptions.forEach((option, index) => {
//             if (option.includes("Fullsuit:")) {
//                 selectedOptions.splice(index, 1);
//             }
//         });

//         // Update the display of selected options
//         listOfOptions();
//     }

//     // Calculate the total based on fur colors, fleece numbers, and minky numbers
//     total = 0;
//     if (furColorInput.value) {
//         total += furColorValues[furColorInput.value];
//     }
//     if (fleeceColorInput.value) {
//         total += fleeceColorValues[fleeceColorInput.value];
//     }
//     if (minkyColorInput.value) {
//         total += minkyColorValues[minkyColorInput.value];
//     }
//     if (piercingInput.value) {
//         total += piercingValues[piercingInput.value];
//     }

//     // Update the total display
//     const totaal = document.getElementById("totaal");
//     totaal.innerHTML = "€" + parseFloat(total).toFixed(2);
// }