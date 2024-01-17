import { useState } from "react";
import InputField from "../InputField/InputField";



interface EventsDemoProps
{
  e?: Event;
  firstName?: string;
  lastName?: string;
  namesList?: string[];
  key?: string;
}
const EventsDemo : React.FC<EventsDemoProps> = ({e, firstName,lastName, namesList, key}) =>{

  var [stateFirstName, setFirstName] = useState<string>('');
  var [stateLastName, setLastName] = useState<string>('');
var [stateNamesList, setNamesList] = useState<string[]>([]);

    let changeFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    let changeLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
   
    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (stateFirstName !== '' && stateLastName !== '') {
        setNamesList((prevState) => [...prevState, stateFirstName + ' '+ stateLastName]);
      }
      setFirstName('');
      setLastName('');
    };

    return (
        <div>
        <h1>Form Handler</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <InputField id="firstName" label="First Name" type="text" value={stateFirstName} onChange={changeFirstNameHandler}/>
            <InputField id="lastName" label="Last Name" type="text" value={stateLastName} onChange={changeLastNameHandler}/>
          </div>
          <InputField id="submitForm" type="submit" value="Submit" />
        </form>
        <div>
          <ul>
          {stateNamesList.map((name, index) => (<li key={index}>{name}</li>))}
          </ul>
        </div>
      </div>
    );
};

export default EventsDemo;