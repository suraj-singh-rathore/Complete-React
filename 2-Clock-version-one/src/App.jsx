import ClockHeading from './Components/ClockHeading';
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';

import './App.css'

function Clock(){

  return (
    <center>
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
    </center>
  )
}

export default Clock;