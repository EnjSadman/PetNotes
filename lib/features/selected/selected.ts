import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  //isSelected: boolean, //this is future for choosing date on monthly calendar
  date: number,
  month: number,
  year: number,
}



const initialState = {
  //isSelected: false,
  selectedDate: new Date(Date.now()).getDate(),
  selectedMonth: new Date(Date.now()).getMonth(),
  selectedYear: new Date(Date.now()).getFullYear(),
}

const SelectedDateSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    changeSelectedDay:(state, action) => {
      state.selectedDate = action.payload;
      //state.isSelected = true;
    },
    changeSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    changeSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },

  }
})

export const {changeSelectedDay, changeSelectedMonth, changeSelectedYear} = SelectedDateSlice.actions;

export default SelectedDateSlice.reducer;