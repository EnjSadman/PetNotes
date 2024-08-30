"use client"

import styles from "./page.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedMonth } from "@/lib/features/selected/selected";
import { MonthCalendar } from "./components/MonthCalendar/MonthCalendar";

export default function Home() {

  const dispatch = useDispatch();

  const [numberOfDays, setNumberOfDays] = useState<number>();

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState<number>();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>();

  return (
    <main className={styles.main}>
      <MonthCalendar />
      <Sidebar />
    </main>
  );
}
