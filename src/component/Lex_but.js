import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function Lex_but() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div style={{}}>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        sx={{
          width: 100,
          color: "success.main",
          innerHeight: 100
        }}
      >
        {/* <DatePicker value={selectedDate} onChange={handleDateChange} sx={{height:'100px',width:'100px'}}/> */}
        <DatePicker
          autoOk
          label="#f9a980"
          variant="static"
          openTo="date"
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            width: 100,
            color: "success.main"
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Lex_but;
