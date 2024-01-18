import { useState } from "react";
import InputField from "../InputField/InputField";
import './EventsDemo.css';
import Button from "../Button/Button";



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
        setFirstName('');
        setLastName('');
      }
    };

    return (
        <div className="container">
        <h1>Form Handler</h1>

        <form className="input-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <InputField id="firstName" label="First Name" type="text" value={stateFirstName} onChange={changeFirstNameHandler}/>
            <InputField id="lastName" label="Last Name" type="text" value={stateLastName} onChange={changeLastNameHandler}/>
          </div>
          <Button id="idSubmit" text="Add"/>
        </form>
        <div className="items-container">
          <ol>
          {stateNamesList.map((name, index) => (<li key={index}>{name}</li>))}
          </ol>
        </div>
      </div>
    );
};

export default EventsDemo;