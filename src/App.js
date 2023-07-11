import "../src/devlink/global.css";
import "./App.css";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { GlobalStyles } from "./devlink/GlobalStyles.js";
import { Home, Game, Cursor, FullScoreboard, GameWon } from "./devlink";
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

    setCharacterFound(initialStateCharacters);
  };

  const resetApp = () => {
    setAppScreen("Home");
    setShowGameWon(false);
    setShowFullScoreboard(false);

    setCharacterFound(initialStateCharacters);
  };

  // State and handlers for scoreboard
  const [showFullScoreboard, setShowFullScoreboard] = useState(false);
  const toggleScoreboard = () => {
    setShowFullScoreboard((prevState) => !prevState);
  };

  // Function to transform and filter records
  function recordsToDom(originalData, numOfRecords) {
    const sortedData = [...originalData].sort((a, b) => a.time - b.time);
    const topRecords = sortedData.slice(0, numOfRecords);
    const transformedData = topRecords.map((item, index) => (
      <div key={index}>
        {index + 1}. {item.name} {item.time}sec
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
      console.error(err);
    }
  };

  useEffect(() => {
    getRecordList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          />
        );
      case "Game":
        return (
          <Game
            btnCloseGame={{ onClick: resetApp }}
            timerValue={timer}
            mapClick={{ onClick: handleMapClick }}
            imgWaldo={characterFound.waldo && { style: { opacity: "1" } }}
            imgOdlaw={characterFound.odlaw && { style: { opacity: "1" } }}
            imgWizard={characterFound.wizard && { style: { opacity: "1" } }}
          />
        );
      default:
        return null;
    }
  };

  // in Game logic
  const initialStateCharacters = {
    waldo: false,
    odlaw: false,
    wizard: false,
  };

  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [characterFound, setCharacterFound] = useState(initialStateCharacters);

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
  }, [timer]);

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const [showGameWon, setShowGameWon] = useState(false);
  const toggleGameWon = () => {
    setShowGameWon((prevState) => !prevState);
  };

  const isWon = () => {
    return Object.values(characterFound).every((found) => found === true);
  };

  useEffect(() => {
    if (isWon()) {
      stopTimer();
      toggleGameWon();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterFound]);

  const [cursorColor, setCursorColor] = useState("#ffc107");

  const clickedOnCharacter = () => {
    setCursorColor("red");
    setTimeout(() => {
      setCursorColor("#ffc107");
    }, 500);
  };

  const handleMapClick = (event) => {
    const imgElement = event.target;
    const imgRect = imgElement.getBoundingClientRect();
    const clickX = event.clientX - imgRect.left;
    const clickY = event.clientY - imgRect.top;
    const relativeX = (clickX / imgRect.width) * 100;
    const relativeY = (clickY / imgRect.height) * 100;

    if (
      relativeX < 33.33 &&
      relativeX > 30 &&
      relativeY < 17.5 &&
      relativeY > 13.6
    ) {
      setCharacterFound((prevCharacterFound) => ({
        ...prevCharacterFound,
        waldo: true,
      }));
      clickedOnCharacter();
    }
    if (
      relativeX < 50.75 &&
      relativeX > 47.73 &&
      relativeY < 72.8 &&
      relativeY > 66
    ) {
      setCharacterFound((prevCharacterFound) => ({
        ...prevCharacterFound,
        odlaw: true,
      }));
      clickedOnCharacter();
    }
    if (
      relativeX < 81.4 &&
      relativeX > 78.7 &&
      relativeY < 58 &&
      relativeY > 53.1
    ) {
      setCharacterFound((prevCharacterFound) => ({
        ...prevCharacterFound,
        wizard: true,
      }));
      clickedOnCharacter();
    }
  };

  const handleBtnSaveRecord = () => {
    const inputElement = document.querySelector("#name-3");
    const inputValue = inputElement.value;

    submitRecord(inputValue, timer);
    toggleGameWon();
    resetApp();
    getRecordList();
  };

  const submitRecord = async (inputValue, timer) => {
    try {
      await addDoc(recordsCollectionRef, {
        name: inputValue,
        time: timer,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-wrapper">
      <GlobalStyles />
      <div className="main-wrapper">
        <DevLinkProvider>
          <div style={cursorNoEvents}>
            <Cursor
              cursorWrapper={{ style: { display: "flex" } }} // hidden in Webflow
              fullScoreboard={recordsToDom(records, 999)}
              cursorBorder={{ style: { borderColor: cursorColor } }}
            />
          </div>
          {renderScreen()}
          {showFullScoreboard && (
            <FullScoreboard
              popupContainerScoreboard={{ style: { display: "flex" } }} // hidden in Webflow
              fullScoreboard={recordsToDom(records, 999)}
              btnCloseScoreboard={{ onClick: toggleScoreboard }}
            />
          )}

          {showGameWon && (
            <GameWon
              popupContainerGamewon={{ style: { display: "flex" } }} // hidden in Webflow
              currentRecord={timer + "sec"}
              btnSaveRecord={{ onClick: handleBtnSaveRecord }}
              btnCloseGameWon={{ onClick: resetApp }}
            />
          )}
        </DevLinkProvider>
      </div>
    </div>
  );
}

export default App;
