import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  date: number,
  month: number,
  year: number,
}



const initialState = {
  date: new Date(Date.now()).getDate(),
  month: new Date(Date.now()).getMonth(),
  year: new Date(Date.now()).getFullYear(),
}

const DateSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {

  }
})

export default DateSlice.reducer;