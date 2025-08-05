const tabby = document.querySelector('.tabby')
const tabsList = tabby.querySelector('.tabs')
const tabs = [...tabby.querySelectorAll('.tab')]//creates an array of tabs, use the spread operator
const tabContents = [...tabby.querySelectorAll('.tab-content')] //creates an array of tab contents, use the spread operator


tabsList.addEventListener('click', e => {
        //use event target to find the clicked tab
        const tab = e.target
        console.log(tab)
        //Get the corresponding tab-content through data-target attribute (data-theme)
        const target = tab.dataset.theme
        const tabContent= tabby.querySelector('#' + target)
      
        //remove is-selected from all the tabs
        //must be an array to loop using forEach
        tabs.forEach(t => t.classList.remove('is-selected'))
        //add is-selected to the clicked tab
        tab.classList.add('is-selected')

        //remove is-selected from all target tabContent
        //must be an array to loop using forEach
        tabContents.forEach(c => c.classList.remove('is-selected'))
        //add is-selected to the target tabContent
        tabContent.classList.add('is-selected')
})