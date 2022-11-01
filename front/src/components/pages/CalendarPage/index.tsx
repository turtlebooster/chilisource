import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { StyledCalendar } from './style';
const index = () => {
  return (
    <>
      <div>CalendarPage</div>
      <StyledCalendar>
        <FullCalendar plugins={[dayGridPlugin]} initialView={'dayGridMonth'} />
      </StyledCalendar>
    </>
  );
};

export default index;
