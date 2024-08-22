"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

export default function Home() {

  const DaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  }  

  const DayOfWeek = (month: number, year: number, day: number) => {
    return new Date(year, month, day).getDay();
  }

  const allMonthsNames : string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const allDaysNames : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [allDaysCount, setAllDaysCount] = useState<number[]>();

  const [currentDate, setCurrentDate] = useState<number>();

  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>()

  const [numberOfDays, setNumberOfDays] = useState<number>();

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState<number>();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>();

  useEffect(() => {
    const date = Date.now()
    setCurrentDate(date);
    setMonth(new Date(date).getMonth());
    setYear(new Date(date).getFullYear());
    setNumberOfDays(DaysInMonth(new Date(date).getMonth(), new Date(date).getFullYear()));
    setCurrentDayOfWeek(DayOfWeek(new Date(date).getMonth(), new Date(date).getFullYear(), new Date(date).getDate()))
    setAllDaysCount(Array.from({length: DaysInMonth(new Date(date).getMonth(), new Date(date).getFullYear())}, (_, i) => i + 1))
    
  }, []);

  return (
    <main className={styles.main}>
      <div>
        {
          (month) ? allMonthsNames[month] : ""
        }
        {
          (currentDayOfWeek) ? allDaysNames[currentDayOfWeek] : ""
        }
        {
          <>
            <div className={styles.calendar_table}>
              {
                allDaysNames.map(el => {
                  switch (el) {
                    case "Monday": 
                    return(
                      <div className={`${styles.monday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Tuesday": 
                    return(
                      <div className={`${styles.tuesday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Wednesday": 
                    return(
                      <div className={`${styles.wednesday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Thursday": 
                    return(
                      <div className={`${styles.thursday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Friday": 
                    return(
                      <div className={`${styles.friday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Saturday": 
                    return(
                      <div className={`${styles.saturday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                    case "Sunday": 
                    return(
                      <div className={`${styles.sunday} ${styles.calendar_cell}`}>
                        {el}
                      </div>
                    );
                  }
                })
              }
            </div>
            <div className={styles.calendar_table}>
              {
                (allDaysCount && month && year && currentDate) ?
                allDaysCount.map((el, index) => {
                  switch (allDaysNames[DayOfWeek(month, year, el)]) {
                    case "Monday": 
                    return(
                      <div className={`${styles.monday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                        
                      </div>
                    );
                    case "Tuesday": 
                    return(
                      <div className={`${styles.tuesday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                      </div>
                    );
                    case "Wednesday": 
                    return(
                      <div className={`${styles.wednesday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                      </div>
                    );
                    case "Thursday": 
                    return(
                      <div className={`${styles.thursday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                      </div>
                    );
                    case "Friday": 
                    return(
                      <div className={`${styles.friday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                      </div>
                    );
                    case "Saturday": 
                    return(
                      <div className={`${styles.saturday} ${styles.calendar_cell}`}>
                        {
                          (new Date(currentDate).getDate() == el) ? <div className={styles.current_date}>{el}</div> : <div>{el}</div> 
                        }
                      </div>
                    );
                    case "Sunday": 
                    return(
                      <div className={`${styles.sunday} ${styles.calendar_cell}`}>
                        {el}
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
      <Sidebar />
    </main>
  );
}
