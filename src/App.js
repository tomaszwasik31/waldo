import "../src/devlink/global.css";
import "./App.css";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { GlobalStyles } from "./devlink/GlobalStyles.js";
import { Home, Game, Cursor } from "./devlink";
import { DevLinkProvider } from "./devlink";

function App() {
  // 'custom' css to disable click on custom cursor
  const cursorNoEvents = {
    pointerEvents: "none",
  };

  const handleBtnNewGame = () => {
    setAppScreen("Game");
  };

  const handleBtnCloseGame = () => {
    setAppScreen("Home");
  };

  const handleBtnScoreBoard = () => {
    console.log("score board");
  };

  const handleBtnChooseMap = () => {
    console.log("choose map");
  };

  const [appScreen, setAppScreen] = useState("Home");

  const renderScreen = () => {
    switch (appScreen) {
      case "Home":
        return (
          <Home
            btnNewGame={{ onClick: () => handleBtnNewGame() }}
            btnScoreBoard={{ onClick: () => handleBtnScoreBoard() }}
            btnChooseMap={{ onClick: () => handleBtnChooseMap() }}
          />
        );
      case "Game":
        return <Game btnCloseGame={{ onClick: () => handleBtnCloseGame() }} />;
      default:
        return null;
    }
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
        </DevLinkProvider>
      </div>
    </div>
  );
}

export default App;

// const [records, setRecords] = useState([]);

//   const recordsCollectionRef = collection(db, "score-data");

//   //new record

//   const [newRecordName, setNewRecordName] = useState("");
//   const [newRecordTime, setNewRecordTime] = useState(0);

//   const onSubmitRecord = async () => {
//     try {
//       await addDoc(recordsCollectionRef, {
//         name: newRecordName,
//         time: newRecordTime,
//       });
//       getRecordList();
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const getRecordList = async () => {
//     //read data
//     try {
//       const data = await getDocs(recordsCollectionRef);
//       const filteredData = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setRecords(filteredData);
//     } catch (err) {
//       console.log("error");
//     }
//   };

//   useEffect(() => {
//     getRecordList();
//   });

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
