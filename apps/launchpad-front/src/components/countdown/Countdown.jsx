import React, { useEffect, useState } from "react";
import "./countdown.css";
// import ProgressBarMenu from "../progressBarMenu/progressBarMenu";
import moment from "moment";

function Countdown(props) {
  const { item } = props;
  const [statusDate] = useState(() => {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const launchTime = Math.floor(
      new Date(item.attributes.LaunchDate).getTime() / 1000
    );
    const endedTime = Math.floor(
      new Date(item.attributes.EndDate).getTime() / 1000
    );
    if (launchTime >= currentTime) {
      return 'ComingSoon';
    } else if (endedTime >= currentTime) {
      return 'OnSale';
    } else {
      return 'Ended';
    }
  });
  const [targetDate] = useState(() => {
    if (statusDate === 'ComingSoon') {
      return moment(item.attributes.LaunchDate).format('MM/DD/YYYY');
    } else if (statusDate === 'OnSale') {
      return moment(item.attributes.EndDate).format('MM/DD/YYYY');
    } else {
      return '';
    }
  });
  // moment(item.attributes.LaunchDate).format("MM/DD/YYYY")

  const calculateTimeLeft = () => {
    let diff = new Date(targetDate) - new Date();

    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`${item.attributes.StatusType[1] === "Ended" ? "countdownBoxEnded" : "countdownBox"} py-3 rounded`}>
      {
        item.attributes.StatusType[1] === "Ended" ?
        <p className="presaleTitle">Presale Has Ended</p> : 
        <></>
      }
      {item.attributes.StatusType[1] !== "Ended" ? (
        <>
        <p className="presaleTitle">Presale {item.attributes.StatusType[1] === "ComingSoon" ? "Starts" : "Ends"} in</p>
          <div className="daysAndTime">
            <div className="HMS">
              <div className="time">
                <p className="number">
                  {timeLeft.days.toString().length < 2
                    ? "0" + timeLeft.days
                    : timeLeft.days}
                </p>
              </div>
              <p className="number">:</p>
              <div className="time">
                <p className="number">
                  {timeLeft.hours.toString().length < 2
                    ? "0" + timeLeft.hours
                    : timeLeft.hours}
                </p>
              </div>
              <p className="number">:</p>
              <div className="time">
                <p className="number">
                  {timeLeft.minutes.toString().length < 2
                    ? "0" + timeLeft.minutes
                    : timeLeft.minutes}
                </p>
              </div>
              <p className="number">:</p>
              <div className="time">
                <p className="number">
                  {timeLeft.seconds.toString().length < 2
                    ? "0" + timeLeft.seconds
                    : timeLeft.seconds}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Countdown;
