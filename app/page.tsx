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

  const [numberOfDays, setNumberOfDays] = useState<number>();

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState<number>();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>();

  useEffect(() => {
    const date = Date.now()
    setCurrentDate(date);
    setMonth(new Date(date).getMonth());
    setNumberOfDays(DaysInMonth(new Date(date).getMonth(), new Date(date).getFullYear()));
    setCurrentDayOfWeek(DayOfWeek(new Date(date).getMonth(), new Date(date).getFullYear(), new Date(date).getDate()))
    setAllDaysCount(Array.from({length: DaysInMonth(new Date(date).getMonth(), new Date(date).getFullYear())}, (_, i) => i + 1))
    
  }, []);
  return (
    <main className={styles.main}>
      <div>
        {
          <div>
            {
              (month) ? allMonthsNames[month] : ""
            }
            {
              (currentDayOfWeek) ? allDaysNames[currentDayOfWeek] : ""
            }
            {
              (allDaysCount) ?
              allDaysCount.map((el, index) => {
                return(
                  <div>123</div>
                )
              }) : ""
            } 
          </div>
        }
      </div>
      <Sidebar />
    </main>
  );
}
