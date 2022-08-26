import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudent, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setgender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [dob, setdob] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])




    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !gender|| !email || !phoneno || !dob) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required',
                showConfirmButton: true
            });
        }
        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            gender,
            email,
            phoneno,
            dob,
        }
        students.push(newStudent);
        setStudent(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });

    }


    return (
        <div className="small-containner">
            <form onSubmit={handleAdd}>
                <h1>Add student</h1>
                {/*1. label for first name */}
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />

                {/*2. label for last name */}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />


                {/* 3.label for gender */}
                <label htmlFor="gender">Gender</label>
                <div style={{ marginTop: '10px' }}>
                    <input
                        id="gender"
                        type="radio"
                        name="gender"
                        value={"Male"}
                        onChange={e => setgender(e.target.value)}
                    />Male
                    <input
                        id="gender"
                        type="radio"
                        name="gender"
                        value={"Female"}
                        onChange={e => setgender(e.target.value)}
                    />Female
                </div>


                {/* 4 label for Email */}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                {/*  5 label for phone Number*/}
                <label htmlFor="phoneno">Phone Number</label>
                <input
                    id="phoneno"
                    type="number"
                    name="phoneno"
                    value={phoneno}
                    onChange={e => setphoneno(e.target.value)}
                />

                {/* label for DOB */}
                <label htmlFor="dob">D.O.B</label>
                <input
                    id="dob"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={e => setdob(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />

                </div>

            </form>
        </div>

    )
}

export default Add