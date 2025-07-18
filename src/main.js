// select all tab buttons and covert to an array
const tabs = Array.from(document.querySelectorAll(".tab"))
// select the tabby
const tabby = document.querySelector('.tabby')
//select the tab contents
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))


// add a click event listener to each tabl button

tabs.forEach(tab => {
   tab.addEventListener('click', e => {
    const theme = tab.dataset.theme
    const tabContent = tabby.querySelector('#' + theme)

    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
   })
})


