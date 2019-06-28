$(function () {
    populateButtons(searchArray, 'searchButton','#buttonsArea');
    console.log('page loaded');
});
const searchArray = ["Dog", "Cat", "Bears", "Pokemon", "Wizard"];

function populateButtons (searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty;
    for(let i=0; i<searchArray.length;i++){
        const a =$('<button>');
        a.addClass(classToAdd );
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}