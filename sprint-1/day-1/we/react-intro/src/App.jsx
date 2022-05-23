import { useState } from "react";
import "./styles.css";

const App = ()=> {
  const initstate = [
    {
      id: 1,
      name: "suman",
      phone: 9937903731
    },
    {
      id: 2,
      name: "jeki",
      phone: 8328804957
    }
  ];
  const [contactList, setContactList] = useState(initstate);
  return (
    <div className="App">
      <AddContact contactList={contactList} setContactList={setContactList}/>
      {contactList.map((elem) => {
        return <ContactCard name={elem.name} />;
      })}
    </div>
  );
}
const ContactCard = ({ name }) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "5px" }}>
      <p>{name}</p>
    </div>
  );
};
const AddContact = ({contactList,setContactList}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [user,setUser]= useState([]);

  const handleClick = () => {

    const payload= {
      name:name,
      phone: phone
    }
    setContactList([...contactList, payload])

    setName("")
    setPhone("")
  };
  console.log(contactList,"users")
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="phone no"
          value={phone}
          onInput={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>ADD</button>
      </div>
    </div>
  );
};

export default App