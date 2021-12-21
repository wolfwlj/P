// 'Kalender' Code

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventBesInput = document.getElementById('eventBesInput');
const eventDeelInput = document.getElementById('eventDeelInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const divMaken = document.getElementById('create');
const createdDiv = document.getElementById('createdDiv');



function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.titel;
    document.getElementById('eventText2').innerText = eventForDay.beschrijving;  
    document.getElementById('eventText3').innerText = eventForDay.Deelnemers ;

    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('nl-NL', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${i - paddingDays}/${month + 1}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.titel;
        daySquare.appendChild(eventDiv);
        

        

        for (let i = 0; i <= 0; i++) {
          const creation = document.createElement('div');
          creation.classList.add ('createLook');
          creation.innerText = eventForDay.titel;
          creation.draggable = 'true';
          createdDiv.appendChild(creation);
        }
        
      }

      daySquare.addEventListener('click', () => openModal(dayString) );
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  eventBesInput.classList.remove('error');
  eventDeelInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  eventBesInput.value = '';
  eventDeelInput.value = '';
  clicked = null;
  load();
  location.reload();
  return false;
}

function saveEvent() {
  if (eventTitleInput.value && eventBesInput.value && eventDeelInput.value) {
   
   
    eventTitleInput.classList.remove('error');
    eventBesInput.classList.remove('error');
    eventDeelInput.classList.remove('error');

    events.push({
      date: clicked,  
      titel: eventTitleInput.value,
      beschrijving:eventBesInput.value,
      Deelnemers:eventDeelInput.value,
    });


    localStorage.setItem('events', JSON.stringify(events));
   
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
    eventBesInput.classList.add('error');
    eventDeelInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));

  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();

  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
    
    
  });
  
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}





// 'Create' Code



//divMaken.addEventListener('click', divAppear);

//function divAppear(){

  //for (let i = 0; i < 1; i++) {
    
   // createdDiv.appendChild(creation);
   // creation.className = 'createLook';
   // creation.draggable = 'true';
    //creation.innerText = eventForDay.titel;
//}


 
//}


//console.log(localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []);
//console.log(localStorage.getItem('events2') ? JSON.parse(localStorage.getItem('events2')) : []);

initButtons();
load();