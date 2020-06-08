const digimonApp = {};

let images = {
    0: [
        {
            image: './styles/images/digiEgg1.jpg',
            stage: 'Stage: DigiEgg'
        },
        {
            image: './styles/images/digiEgg2.jpg',
            stage: 'Stage: DigiEgg'
        },
        {
            image: './styles/images/digiEgg3.jpg',
            stage: 'Stage: DigiEgg'
        }
    ],
    1: [
        {
            name: 'Botamon',
            image: './styles/images/fresh1.jpg',
            stage: 'Stage: Fresh'
        },
        {
            name: 'Punimon',
            image: './styles/images/fresh2.jpg',
            stage: 'Stage: Fresh'
        },
        {
            name: 'Bubamon',
            image: './styles/images/fresh3.jpg',
            stage: 'Stage: Fresh'
        }
    ],
    2: [
        {
            name: 'Koromon',
            image: './styles/images/inTraining1.jpg',
            stage: 'Stage: In-Training'
        },
        {
            name: 'Tsunemon',
            image: './styles/images/inTraining2.jpg',
            stage: 'Stage: In-Training'
        },
        {
            name: 'Mochimon',
            image: './styles/images/inTraining3.jpg',
            stage: 'Stage: In-Training'
        }
    ],
    3: [
        {
            name: 'Agumon',
            image: './styles/images/rookie1.jpg',
            stage: 'Stage: Rookie'
        },
        {
            name: 'Gabumon',
            image: './styles/images/rookie2.jpg',
            stage: 'Stage: Rookie'
        },
        {
            name: 'Tentomon',
            image: './styles/images/rookie3.jpg',
            stage: 'Stage: Rookie'
        }
    ],
    4: [
        {
            name: 'Greymon',
            image: './styles/images/champion1.jpg',
            stage: 'Stage: Champion'
        },
        {
            name: 'Garurumon',
            image: './styles/images/champion2.jpg',
            stage: 'Stage: Champion'
        },
        {
            name: 'Kabuterimon',
            image: './styles/images/champion3.jpg',
            stage: 'Stage: Champion'
        }
    ],
    5: [
        {
            name: 'Metalgreymon',
            image: './styles/images/ultimate1.jpg',
            stage: 'Stage: Ultimate'
        },
        {
            name: 'Weregarurumon',
            image: './styles/images/ultimate2.jpg',
            stage: 'Stage: Ultimate'
        },
        {
            name: 'Megakabuterimon',
            image: './styles/images/ultimate3.jpg',
            stage: 'Stage: Ultimate'
        }
    ],
    6: [
        {
            name: 'Wargreymon',
            image: './styles/images/mega1.jpg',
            stage: 'Stage: Mega'
        },
        {
            name: 'Metalgarurumon',
            image: './styles/images/mega2.jpg',
            stage: 'Stage: Mega'
        },
        {
            name: 'Herculeskabuterimon',
            image: './styles/images/mega3.jpg',
            stage: 'Stage: Mega'
        }
    ]
};

digiModify = (i) => {

    // populate a box within each div
    $('div').css('border', '5px solid #ff8407')
    .css('height', '225px')
    .css('width', '225px')
    .css('margin', '50px 5px 50px');

    // run random number generators for each div
    let randomNumber = Math.floor(Math.random() * 3);

    // access database of images and names for each class and get the respective ones for the number generated
    let childSelector = i + 1;
    let populater = 'main div:nth-child(' + [childSelector] + ')';

    // clear div of any previous images and names
    $(populater).empty();

    let imageMaker = images[i][randomNumber]['image'];
    let stage = images[i][randomNumber]['stage'];
    let titleMaker = images[i][randomNumber]['name'];
    
    // append the image into the proper div
    $(populater).append(`<img src= ${imageMaker} alt='An image of ${titleMaker}' height='215.4px' width='215.4px'>`)

    if($('.digiCodeOn').val() === "DigiCode"){
        // // append stage name below div
    $(populater).append(`<p class='changeScript'> ${stage} </p>`)
        // // append the name below the stage
    .append(`<p class='changeScript'> ${titleMaker} </p>`);
    } else {
        $(populater).append(`<p class='changeScript digiCodeStyle'> ${stage} </p>`)
        .append(`<p class='changeScript digiCodeStyle'> ${titleMaker} </p>`);
    }

    // below is for the first div, the DIGIEGG, which is connected to the second div for which i = 1, same steps as above are followed
    if (i === 1) {
        let childSelectorDigiEgg = i;
        let populaterDigiEgg = 'main div:nth-child(' + [childSelectorDigiEgg] + ')';
        $(populaterDigiEgg).empty();
        let imageMakerDigiEgg = images[i - 1][randomNumber]['image'];
        $(populaterDigiEgg).append(`<img src= ${imageMakerDigiEgg} alt="An image of ${titleMaker}'s Digiegg" height='215.4px' width='215.4px'>`)
        let stageDigiEgg = images[i - 1][randomNumber]['stage'];
        $(populaterDigiEgg).append(`<p class='changeScript'> ${stageDigiEgg} </p>`);
    }
}

digimonApp.init = () => {

    // on button submit for Digimon randomizer
    $('.digiRoll').on('click', function () {
        for (let i = 1; i < 7; i++) {
            digiModify(i);
        }
    })

    // button submit for language change
    $('.digiCodeOn').on('click',function(){
        $(".changeScript").toggleClass("digiCodeStyle");

        if($(this).val() === "DigiCode"){
            $(this).val("English");  
        } else {
            $(this).val("DigiCode");
        }
    });
}

$(function () {
    digimonApp.init();
})
