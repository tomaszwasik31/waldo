import "./App.css";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [records, setRecords] = useState([]);

  const recordsCollectionRef = collection(db, "score-data");

  //new record

  const [newRecordName, setNewRecordName] = useState("");
  const [newRecordTime, setNewRecordTime] = useState(0);

  const onSubmitRecord = async () => {
    try {
      await addDoc(recordsCollectionRef, {
        name: newRecordName,
        time: newRecordTime,
      });
      getRecordList();
    } catch (err) {
      console.error(err);
    }
  };
  const getRecordList = async () => {
    //read data
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

  return (
    <div className="App">
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
        <>
          <p>{record.name}</p>
          <p>{record.time}</p>
        </>
      ))}
    </div>
  );
}

export default App;
