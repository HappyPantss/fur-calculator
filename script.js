// function hideOrShow() {
//     var x = document.getElementById("fleeceChoice");
//     var y = document.getElementById("fleeceTotalColors");
//     var z = document.getElementById("minky");
//     var z = document.getElementById("minky");
//     if (x.checked) {
//         y.style.display = "block";
//         z.style.display = "none";
//     } else {
//         y.style.display = "none";
//         z.style.display = "block";
//     }
// }

let total = 0;
const selectedOptions = [];

function countNumbers() {
    var furColor = document.getElementById("furColorTotal").value;
    var fleeceColor = document.getElementById("fleeceColorTotal").value;
    var minkyColor = document.getElementById("minkyColorTotal").value;
    var piercingTotal = document.getElementById("piercingsTotal").value;
    const eyelids = document.getElementById('eyelids');
    const checkboxEyelid = document.getElementById('extraEyelidsBox');
    const checkboxEyelid2 = document.getElementById('extraEyelidsBox2');

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

    // if (fleeceColor in fleeceColorValues) {
    //     totalAmount += fleeceColorValues[fleeceColor];
    //     // totaal.innerHTML = "€" + parseFloat(totalAmount);
    //     console.log("fleeceColor total:", parseFloat(totalAmount));
    //     console.log("fleeceColor:", fleeceColor);
    //     console.log("fleeceColorValues:", fleeceColorValues);
    // }

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

    // // Get the selected values of Fur Color and Fleece Colors
    // const furColorInput = document.getElementById("furColorTotal");
    // const furColorValue = furColorInput.value;

    // if (furColorValue) {
    //     groups["Fur colors:"] = [furColorValue];
    // }

    // const fleeceColorInput = document.getElementById("fleeceColorTotal");
    // const fleeceColorValue = fleeceColorInput.value;

    // if (fleeceColorValue) {
    //     groups["Fleece colors:"] = [fleeceColorValue];
    // }

    // const minkyColorInput = document.getElementById("minkyColorTotal");
    // const minkyColorValue = minkyColorInput.value;

    // if (minkyColorValue) {
    //     groups["Minky colors:"] = [minkyColorValue];
    // }

    // const piercingsInput = document.getElementById("piercingsTotal");
    // const piercingsValue = piercingsInput.value;

    // if (piercingsValue) {
    //     groups["Piercings total:"] = [piercingsValue];
    // }

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

    // const numberOption = `<li>Fur Color: ${furColorValue}</li><li>Fleece Colors: ${fleeceColorValue}</li>`;


    choices.innerHTML = `<p>You have selected:</p>${result}`;
    // choices.innerHTML += `<ul>${numberOption}</ul>`
    // console.log(numberOption)

}

// function furColors() {
//     var inputs = document.getElementsByName("product");
//     var total = 0;
//     // var standardTotal = [1, 2, 3];
//     var totaal = document.getElementById("totaal");
//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].checked) {
//             total += parseFloat(inputs[i].value);
//         }
//     }
//     if (parseFloat(total) === 1) { // Use '===' for comparison
//         console.log(total);
//         totaal.innerHTML = total + 60;
//     }
// }

$(document).ready(function() {
    // Aanvinken van PARTIAL
    $('#partial').change(function() {
        $('#heads, #handpaws, #tail, #headonlySection, #fullsuitSection, #armsleeves, #feetpaws, #feetpawsPartialOnly').fadeToggle(1);
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
    // Aanvinken eyelids
    $('#eyelids').change(function() {
        $('#extraEyelids').fadeToggle(1);
        $('#multipleEyelidsChoice').fadeToggle(1);
    });
    // Extra tongues
    $('#tongues').change(function() {
        $('#extraTongues, #extraTongues2').fadeToggle(1);
    });

    // VERWIJDER ALLE ANDERE OPTIES OM HET MAKKELIJKER TE MAKEN
    // Eyelids
    $('#multipleEyelidsChoice').change(function() {
        $('#fixedEyelidsChoice').fadeToggle(1);
    });
    $('#extraEyelids').change(function() {
        $('#extraEyelids2').fadeToggle(1);
    });

    // Paw pads
    $('#handpawsPadsChoice').change(function() {
        $('#handpawsNoPadsChoice').fadeToggle(1);
    });
    $('#handpawsNoPadsChoice').change(function() {
        $('#handpawsPadsChoice').fadeToggle(1);
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

    // Feetpaws type
    $('#indoor').change(function() {
        $('#outdoor').fadeToggle(1);
        $('#shoesBase').fadeToggle(1);
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

    $('#feetpawsExtraYes').change(function() {
        $('#feetpawsExtra').fadeToggle(1);
    });


    $('#tailExtraYes').change(function() {
        $('#tailExtra').fadeToggle(1);
    });

    $('#armsleevesYes').change(function() {
        $('#armsleevesOptions').fadeToggle(1);
    });

    // $('#extraTongues').change(function() {
    //     $('#extraTongues2').fadeToggle(1);
    // });
    // $('#extraEyelidsBox2').change(function() {
    //     $('#extraEyelids').fadeToggle(1);
    //     $('#extraEyelidsBox').prop("checked", false);
    // });
});

function uncheckAll() {
    const checkboxes = document.querySelectorAll('input[name="product"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    total = 0;
    const totaal = document.getElementById("totaal");
    totaal.innerHTML = "€" + parseFloat(total).toFixed(2);

    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.style.display = "none";
    });

    const furColorInput = document.getElementById("furColorTotal");
    furColorInput.value = ""; // Reset the number input

    selectedOptions.length = 0; // Clear the selectedOptions array

    listOfOptions(); // Update the options display after unchecking
}