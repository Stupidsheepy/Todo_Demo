import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare, faCalendarDays } from '@fortawesome/free-regular-svg-icons'
library.add(faUserSecret, faSquare, faCheckSquare, faCalendarDays, faChevronDown, faChevronRight)
createApp(App)
    .component('todo-icon', FontAwesomeIcon)
    .mount('#app')
