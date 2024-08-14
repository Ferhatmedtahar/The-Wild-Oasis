"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function UseReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("context used out of the context");
  }
  return context;
}
export { ReservationProvider, UseReservation };
