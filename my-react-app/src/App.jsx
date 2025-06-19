import Card from './Card.jsx'
import ModuleCSSButton from './Button/ModuleButtonCSS.jsx'
import InlineCSSButton from './InlineCSSButton.jsx'
import ExternalCSSButton from './ExternalCSSButton.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import List2 from './List2.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "banana", calories: 100}, 
    {id: 3, name: "orange", calories: 105}];

  const vegetables = [{id: 4, name: "aarushi", calories: 2}, 
                      {id: 5, name: "nitansh", calories: 3}, 
                      {id: 6, name: "bye", calories: 45}];
  return (
    <>
      <Card />
      <ExternalCSSButton />
      <ModuleCSSButton />
      <InlineCSSButton />
      <Student name="Nitansh" age={19} isStudent={true}/>
      <Student name="Aarika" age={14} isStudent={false}/>
      <UserGreeting isLoggedIn={false} username="Nitansh"></UserGreeting>
      <List />
      <List2 items={fruits} category="Fruits" />
      <List2 items={vegetables} category="Vegetables"/>
    </>
  )
}

export default App
