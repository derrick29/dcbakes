$(document).ready(() => {

    //Category Header Hover Dropdown
    let categoryHeader = document.getElementById('catHeader');
    let categoryDrp = document.getElementById('drpCategory');
    categoryHeader.addEventListener('mouseover', e => {
        document.getElementById('drpCategory').classList.remove('hdn');
    });
    categoryHeader.addEventListener('mouseout', e => {
        document.getElementById('drpCategory').classList.add('hdn');
    });
    categoryDrp.addEventListener('mouseover', e => {
        document.getElementById('drpCategory').classList.remove('hdn');
    });
    categoryDrp.addEventListener('mouseout', e => {
        document.getElementById('drpCategory').classList.add('hdn');
    });

});