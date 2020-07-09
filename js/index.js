const checkbox = document.querySelector('#check');


checkbox.addEventListener('click', () => {
    const body = document.querySelector('body');
    let darkTitle = document.querySelector('.top-title-bg');
    let totalCount = document.querySelectorAll('.total-count');
    let overviewDetails = document.querySelectorAll('.overview-details');
    const switchText = document.querySelector('.switch-text');
    const overviewHeading = document.querySelector('.overview-heading');
    if(checkbox.checked) {
        body.classList.add('dark-body')
        darkTitle.classList.add('dark-title-bg');
        overviewHeading.style.color = 'white';
        switchText.style.color = 'white';
        for(let i = 0; i < totalCount.length; i++) {
            totalCount[i].classList.add('total-count-dark')
        }
        for(let i = 0; i < overviewDetails.length; i++) {
            overviewDetails[i].classList.add('overview-details-dark');
        }
    } else {
        body.classList.remove('dark-body')
        darkTitle.classList.remove('dark-title-bg');
        overviewHeading.style.color = 'black';
        switchText.style.color = 'white';
        for(let i = 0; i < totalCount.length; i++) {
            totalCount[i].classList.remove('total-count-dark');
        }
        for(let i = 0; i < overviewDetails.length; i++) {
            overviewDetails[i].classList.remove('overview-details-dark');
        }
    }
})