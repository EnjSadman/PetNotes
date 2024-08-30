import styles from "./style.module.css";

import { changeSelectedMonth, changeSelectedYear } from "@/lib/features/selected/selected";
import { RootState } from "@/lib/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

export function MonthCalendar () {
  const allMonthsNames : string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const allDaysNames : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const allDaysOrder = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const dispatch = useDispatch();

  const CurrentDateState = useSelector((state : RootState) => state.currentDate)

  const currentDate = CurrentDateState.date;
  const currentMonth = CurrentDateState.month;
  const currentYear = CurrentDateState.year;

  const SelectedDateState = useSelector((state: RootState) => state.selectedDate)

  const selectedDate = SelectedDateState.selectedDate;
  const selectedMonth = SelectedDateState.selectedMonth;
  const selectedYear = SelectedDateState.selectedYear;

  const [allDaysCount, setAllDaysCount] = useState<number[]>();

  const DaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  }  
  const DayOfWeek = (month: number, year: number, day: number) => {
    return new Date(year, month, day).getDay();
  }

  useEffect(() => {
    const days = DaysInMonth(currentMonth, currentYear);
    const daysArr = [];
    for (let i = 1; i <= days; i++) {
      daysArr.push(i);
    }

    setAllDaysCount(daysArr);
    
  }, [selectedMonth, selectedYear])

  
  
  return (
    <>
      <div>
        {`${allMonthsNames[selectedMonth]} ${selectedYear}`}
      </div>
      <div>
            <button onClick={() => {
              if (selectedMonth !== 0) {
                dispatch(changeSelectedMonth(selectedMonth - 1))
              } else {
                dispatch(changeSelectedMonth(11));
                dispatch(changeSelectedYear(selectedYear - 1))
              }
            }}>
              prev
            </button>
          
                
            <button onClick={() => {
              if (selectedMonth !== 11) {
                dispatch(changeSelectedMonth(selectedMonth + 1))
              } else {
                dispatch(changeSelectedMonth(0))
                dispatch(changeSelectedYear(selectedYear + 1))
              }
            }}>
              next
            </button>
          {
            <>
              <div className={styles.calendar_table}>
                {
                  allDaysOrder.map((el, index )=> {
                    switch (el) {
                      case "Monday": 
                      return(
                        <div key={index} className={`${styles.monday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Tuesday": 
                      return(
                        <div key={index}  className={`${styles.tuesday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Wednesday": 
                      return(
                        <div key={index}  className={`${styles.wednesday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Thursday": 
                      return(
                        <div key={index}  className={`${styles.thursday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Friday": 
                      return(
                        <div key={index}  className={`${styles.friday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Saturday": 
                      return(
                        <div key={index}  className={`${styles.saturday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                      case "Sunday": 
                      return(
                        <div key={index}  className={`${styles.sunday} ${styles.calendar_cell}`}>
                          {el}
                        </div>
                      );
                    }
                  })
                }
              </div>
              <div className={styles.calendar_table}>
                {
                  (allDaysCount) ?
                  allDaysCount.map((el, index) => {
                    switch (allDaysNames[DayOfWeek(selectedMonth, selectedYear, el)]) {
                      case "Monday": 
                      return(
                        <div className={`${styles.monday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                          
                        </div>
                      );
                      case "Tuesday": 
                      return(
                        <div className={`${styles.tuesday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                      case "Wednesday": 
                      return(
                        <div className={`${styles.wednesday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                      case "Thursday": 
                      return(
                        <div className={`${styles.thursday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                      case "Friday": 
                      return(
                        <div className={`${styles.friday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                      case "Saturday": 
                      return(
                        <div className={`${styles.saturday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                      case "Sunday": 
                      return(
                        <div className={`${styles.sunday} ${styles.calendar_cell}`}>
                          {
                            ((selectedDate == el) && (selectedMonth == currentMonth) && (selectedYear == currentYear)) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                          }
                        </div>
                      );
                    }
                    }
                  ) : ""
                } 
              </div>
            </>
          }
      </div>
    </>
  )
}