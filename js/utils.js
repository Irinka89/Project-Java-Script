import { eventsStore } from "./data.js"

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

    if (data.type === 'online') {
      const onlineElem = document.createElement('button')
      onlineElem.classList.add('onlineElem')
      imgBlock.appendChild(onlineElem)

      const camera = document.createElement('img')
      camera.classList.add('onlineEvent__camera')
      camera.src = './img/camera.svg'
      onlineElem.appendChild(camera)

      const onlineEvP = document.createElement('span'); 
      onlineEvP.textContent = "Online Event";
      onlineElem.appendChild(onlineEvP);


    }

    const page2Descr = document.createElement('div')
    page2Descr.classList.add('page2Descr')
    element.appendChild(page2Descr)

    const dateElem = document.createElement('p')
    dateElem.classList.add('page2Descr__date')
    dateElem.textContent = formatDate(data.date)
    page2Descr.appendChild(dateElem)
    
    const title = document.createElement('h2')
    title.textContent = data.title
    page2Descr.appendChild(title)

    const category = document.createElement('p')
    category.classList.add('page2Descr__category')
    category.textContent = data.category + ' (' + data.distance + ' km)';
    page2Descr.appendChild(category)

    if(data.type === 'online') {
      const onlEventMedia = document.createElement('div')
      onlEventMedia.classList.add('onlEventMedia')
      page2Descr.appendChild(onlEventMedia)

      const onlEventMediaP = document.createElement('p')
      onlEventMediaP.textContent = "Online Event";
      onlEventMedia.appendChild(onlEventMediaP)

      const img = document.createElement('img');
      img.src = "./img/camera2page.svg";
      img.classList.add('onlineEvent__camera');
      onlEventMedia.appendChild(img)
    }

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
    while (eventsBox.firstChild) {
      eventsBox.removeChild(eventsBox.firstChild);
  }
    arr.forEach((eventData) => {
      const element = createEventElement(eventData)
      eventsBox.append(element)
    })
  }

  export function formatDate(date) {
    const newDate = new Date(date);
    const optionsDays = {
      weekday: "short",
      month: "short",
      day: "2-digit",
    };
    const optionsHours = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
      timeZoneName: "short",
    };
    const formatedDays = new Intl.DateTimeFormat("en-US", optionsDays).format(newDate);
    const formatedHours = new Intl.DateTimeFormat("en-US", optionsHours).format(newDate);
    return `${formatedDays} · ${formatedHours} `;
  }
