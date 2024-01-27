import React, {useEffect, useState} from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import '../../../styles/student-registration.css';
import FormData from '../../ComponentsProps';




const StudentRegistration : React.FC = () => {

    const API_Endpoint = 'http://localhost:5000/Student';

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date("1999-10-18T17:35"));
    const [data, setData] = useState(FormData.StudentData);

    let changeFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    let changeMiddleNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(e.target.value);
    };
    let changeLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    let changeBirthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(new Date(e.target.value));
    };

    useEffect(() =>{
        fetch(API_Endpoint)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setData(data);
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);


      let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await fetch(API_Endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentRequestDto: {
                        firstName,
                        middleName,
                        lastName,
                        birthDate: birthDate.toISOString(),
                    }
                }),
            });
    
            if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            // Handle successful response as needed
            } else {
            // Handle error response
            alert("Failed to submit form:\n "+response.status+" \n"+response.statusText);
            }
        } catch (error) {
            alert('Error while submitting form:'+error);
        }
      };

    return (
        <div className="container">
            <h1>Student Registration Form</h1>
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <InputField
                        id="firstName"
                        type="text"
                        name="firstName"
                        label="First Name"
                        value={firstName}
                        onChange={changeFirstNameHandler}
                    />
                    <InputField
                        id="middleName"
                        type="text"
                        name="middleName"
                        label="Middle Name"
                        value={middleName}
                        onChange={changeMiddleNameHandler}
                    />
                    <InputField
                        id="lastName"
                        type="text"
                        name="lastName"
                        label="Last Name"
                        value={lastName}
                        onChange={changeLastNameHandler}
                    />
                    <InputField
                        id="birthDate"
                        type="datetime-local"
                        name="birthDate"
                        label="Birth Date"
                        value={birthDate.toISOString().slice(0,16)}
                        onChange={changeBirthDateHandler}
                    />
                </div>
                <Button id="submitButton" type="submit" text="Submit" />
            </form>
            <div className="items-container">
                <h2>List of Students</h2>
                <ol>
                    {data.value.length > 0? data.value.map((student) => (<li key={student.Id}>{`${student.firstName} ${student.middleName} ${student.lastName}`}</li>)): "No students found!"}
                </ol>
          </div>
        </div>
    );
};

export default StudentRegistration;