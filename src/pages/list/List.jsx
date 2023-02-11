import React, { useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [accomodation, setAccomodation] = useState(location.state.options);
  const [openCalender, setOpenCalender] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label>Destination</label>
                <input placeholder={destination} />
              </div>

              <div className="listItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenCalender(!openCalender)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

                {openCalender && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>

              <div className="listItem">
                <label>Option</label>
                <div className="listOptions">
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Min. price <small>per night</small>
                    </span>
                    <input type="number" className="listOptionInput" />
                  </div>

                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Max. price <small>per night</small>
                    </span>
                    <input type="number" className="listOptionInput" />
                  </div>

                  <div className="listOptionItem">
                    <span className="listOptionText">Adult</span>
                    <input
                      type="number"
                      className="listOptionInput"
                      placeholder={accomodation.adult}
                      min={1}
                    />
                  </div>

                  <div className="listOptionItem">
                    <span className="listOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="listOptionInput"
                      placeholder={accomodation.children}
                    />
                  </div>

                  <div className="listOptionItem">
                    <span className="listOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="listOptionInput"
                      placeholder={accomodation.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
