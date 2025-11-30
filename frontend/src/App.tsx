import './App.css'
// import { Button } from './components/ui/Button'
// import { PlusIcon } from './components/Icons/PlusIcon'
// import { ShareIcon } from './components/Icons/ShareIcon'
import { Card } from './components/ui/Cards'
function App() {
  return<>
    { /* <Button Variant='primary' FrontIcon={<PlusIcon Sizes='md'/>} Size='lg' Text='Add Content'></Button>
    <Button Variant='secondary' FrontIcon={<ShareIcon Sizes='sm'/>} Size='lg' Text='Share Brain'></Button> */ }
    <div className='flex'>
      <Card Variant='md'></Card>
      <Card Variant='lg'></Card>
    </div>
  </>
}

export default App
