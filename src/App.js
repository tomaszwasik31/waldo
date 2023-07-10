import "../src/devlink/global.css";
import "./App.css";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { GlobalStyles } from "./devlink/GlobalStyles.js";
import { Home, Game, Cursor, FullScoreboard } from "./devlink";
import { DevLinkProvider } from "./devlink";

function App() {
  const cursorNoEvents = {
    pointerEvents: "none",
  };

  // State and handlers for game screen
  const [appScreen, setAppScreen] = useState("Home");
  const handleBtnNewGame = () => {
    setAppScreen("Game");
    setTimer(0);
  };
  const handleBtnCloseGame = () => {
    setAppScreen("Home");
  };

  // State and handlers for scoreboard
  const [showFullScoreboard, setShowFullScoreboard] = useState(false);
  const toggleScoreboard = () => {
    setShowFullScoreboard((prevState) => !prevState);
  };

  // State and handlers for choosing map
  const handleBtnChooseMap = () => {
    console.log("choose map");
  };

  // Function to transform and filter records
  function recordsToDom(originalData, numOfRecords) {
    const sortedData = [...originalData].sort((a, b) => a.time - b.time);
    const topRecords = sortedData.slice(0, numOfRecords);
    const transformedData = topRecords.map((item, index) => (
      <div key={index}>
        {index + 1}. {item.name} {item.time}
      </div>
    ));
    return transformedData;
  }

  // State and useEffect for records
  const [records, setRecords] = useState([]);

  const recordsCollectionRef = collection(db, "score-data");

  const getRecordList = async () => {
    try {
      const data = await getDocs(recordsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRecords(filteredData);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    getRecordList();
  }, []);

  // Render the appropriate screen
  const renderScreen = () => {
    switch (appScreen) {
      case "Home":
        return (
          <Home
            homeScoreRecords={recordsToDom(records, 3)}
            btnNewGame={{ onClick: handleBtnNewGame }}
            btnScoreBoard={{ onClick: toggleScoreboard }}
            btnChooseMap={{ onClick: handleBtnChooseMap }}
          />
        );
      case "Game":
        return (
          <Game
            btnCloseGame={{ onClick: handleBtnCloseGame }}
            timerValue={timer}
            mapClick={{ onClick: handleMapClick }}
          />
        );
      default:
        return null;
    }
  };

  // in Game logic

  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Start the timer
    const id = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    setIntervalId(id);

    // Clean up the interval when the component is unmounted or re-rendered
    return () => {
      clearInterval(id);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalId);
    console.log(timer);
  };

  const handleMapClick = (event) => {
    const imgElement = event.target;
    const imgRect = imgElement.getBoundingClientRect();
    const clickX = event.clientX - imgRect.left;
    const clickY = event.clientY - imgRect.top;
    const relativeX = (clickX / imgRect.width) * 100;
    const relativeY = (clickY / imgRect.height) * 100;

    if(relativeX < 32.77 && relativeX > 30.23){
      console.log('yes');
    }
    console.log(`Clicked position: (${relativeX}%, ${relativeY}%)`);
    // stopTimer();
  };

  return (
    <div className="page-wrapper">
      <GlobalStyles />
      <div className="main-wrapper">
        <DevLinkProvider>
          <div style={cursorNoEvents}>
            <Cursor />
          </div>
          {renderScreen()}
          {showFullScoreboard && (
            <FullScoreboard
              fullScoreboard={recordsToDom(records, 999)}
              btnCloseScoreboard={{ onClick: toggleScoreboard }}
            />
          )}
        </DevLinkProvider>
      </div>
    </div>
  );
}

export default App;

//new record

// const [newRecordName, setNewRecordName] = useState("");
// const [newRecordTime, setNewRecordTime] = useState(0);

// const onSubmitRecord = async () => {
//   try {
//     await addDoc(recordsCollectionRef, {
//       name: newRecordName,
//       time: newRecordTime,
//     });
//     getRecordList();

//   } catch (err) {
//     console.error(err);
//   }
// };

{
  /* <div className="App">
<h1>Waldo app</h1>
<input
  type="text"
  placeholder="name"
  onChange={(e) => setNewRecordName(e.target.value)}
/>
<input
  type="number"
  placeholder="time"
  onChange={(e) => setNewRecordTime(Number(e.target.value))}
/>
<button onClick={onSubmitRecord}>Submit score</button>

{records.map((record) => (
  <div key={record.id}>
    <p>{record.name}</p>
    <p>{record.time}</p>
  </div>
))}
</div> */
}
