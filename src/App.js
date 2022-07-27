import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
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
        </tr>
        {contacts.map((elem) => {
          return (
            <tr key={elem._id}>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
