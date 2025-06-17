import Card from './Card.jsx'
import ModuleCSSButton from './Button/ModuleButtonCSS.jsx'
import InlineCSSButton from './InlineCSSButton.jsx'
import ExternalCSSButton from './ExternalCSSButton.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Card />
      <ExternalCSSButton />
      <ModuleCSSButton />
      <InlineCSSButton />
      <Student name="Nitansh" age={19} isStudent={true}/>
      <Student name="Aarika" age={14} isStudent={false}/>
    </>
  )
}

export default App
