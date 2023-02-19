import { useState } from 'react';
import './style.css';

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

const Toast = (props) => {
  return <div className={`toast ${props.type}`}>{props.message}</div>;
};

function App() {
  let [notif, setNotif] = useState([]);

  const createNotification = () => {
    const id = Date.now();
    const type = getRandomType();
    const message = getRandomMessage();
    setNotif((prevState) => {
      return [...prevState, { id, type, message }];
    });
    setTimeout(() => {
      setNotif((prevState) => {
        const updateNotif = prevState.filter((notif) => notif.id != id);

        return updateNotif;
      });
    }, 3000);
  };

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const getRandomType = () => {
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <div className="App">
      <button className="btn" id="button" onClick={createNotification}>
        Show Notification
      </button>
      <div id="toasts">
        {notif.map((info) => {
          return <Toast key={info.id} {...info} />;
        })}
      </div>
    </div>
  );
}

export default App;
