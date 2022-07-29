import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const remainingRanContactIndex = Math.floor(
        Math.random() * remainingContacts.length
      );
      const newContactList = [...contacts];
      const newRemainingContacts = [...remainingContacts];
      newContactList.push(newRemainingContacts[remainingRanContactIndex]);
      newRemainingContacts.splice(remainingRanContactIndex, 1);
      setContacts(newContactList);
      setRemainingContacts(newRemainingContacts);
    }
  };

  const sortByName = () => {
    const ordered = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(ordered);
  };

  const sortByPopularity = () => {
    const ordered = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(ordered);
  };

  const handleDelete = (id) => {
    const remaining = contacts.filter((elem) => elem.id !== id);
    setContacts(remaining);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>
              Won <br />
              Oscar
            </th>
            <th>
              Won <br />
              Emmy
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>
                  <img
                    src={elem.pictureUrl}
                    className="Picture"
                    alt="Pic of Contact"
                  />
                </td>
                <td>{elem.name}</td>
                <td>{elem.popularity.toFixed(2)}</td>
                <td>{elem.wonOscar && "🏆"}</td>
                <td>{elem.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={() => handleDelete(elem.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
