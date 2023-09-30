import React, { useState } from "react";
import DataH from "./DataH";
import "./data.css";

const Date = () => {
  const [holidays, setHolidays] = useState(DataH);

  const deleteItem = (id) => {
    const newArray = holidays.filter((holiday) => holiday.id !== id);
    setHolidays(newArray);
  };

  return (
    <div>
      <section className="container">
        <h3> Ulusal Bayramlarımız </h3>
        {holidays.map((holiday) => {
          return (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
              <button onClick={() => deleteItem(holiday.id)}>X</button>
            </div>
          );
        })}

        <button onClick={() => setHolidays([])}>Hepsini Sil</button>
      </section>
    </div>
  );
};

export default Date;
