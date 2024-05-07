export const createEventElement = (data) => {
    const element = document.createElement('div')
    element.classList.add('element__2page__block')

    const imgBlock = document.createElement('div')
    imgBlock.classList.add('element__2page__block__imgBlock')
    element.appendChild(imgBlock)

    const img = document.createElement('img')
    img.classList.add('element__2page__block__img')
    img.src = data.image
    imgBlock.appendChild(img)

    const page2Descr = document.createElement('div')
    page2Descr.classList.add('page2Descr')
    element.appendChild(page2Descr)

    const dateElem = document.createElement('p')
    dateElem.classList.add('page2Descr__date')
    dateElem.textContent = data.date
    page2Descr.appendChild(dateElem)
    
    const title = document.createElement('h2')
    title.textContent = data.title
    page2Descr.appendChild(title)

    const category = document.createElement('p')
    category.classList.add('page2Descr__category')
    category.textContent = data.category + ' (' + data.distance + ' km)';
    page2Descr.appendChild(category)

    const attendees = document.createElement('p')
    attendees.classList.add('page2Descr__attendees')
    if (data.attendees !== undefined) {
      attendees.textContent = data.attendees + " attendees";
    }
    page2Descr.appendChild(attendees)

    return element
  }
  
  export const eventsBox = document.querySelector('.events')
  
  export const renderEvents = (arr) => {
    eventsBox.innerHTML = ''
    arr.forEach((eventData) => {
      const element = createEventElement(eventData)
      eventsBox.append(element)
    })
  }