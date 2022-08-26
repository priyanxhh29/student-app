import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudent, setIsEditing }) {

    const id = selectedStudent.id;

    const [firstName, setFirstName] = useState(selectedStudent.firstName);
    const [lastName, setLastName] = useState(selectedStudent.lastName);
    const [gender, setgender] = useState(selectedStudent.gender);
    const [email, setEmail] = useState(selectedStudent.email);
    const [phoneno, setphoneno] = useState(selectedStudent.phoneno);
    const [dob, setdob] = useState(selectedStudent.dob);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !gender || !email || !phoneno || !dob) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All field are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            firstName,
            lastName,
            gender,
            email,
            phoneno,
            dob

        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudent(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'updated!',
            text: `${student.firstName} ${student.lastName} 's data
            has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });

    };


    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit student details</h1>
                <label htmlFor="firstName">First name</label>
                <input
                    id="firstName"
                    type="text"
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
                    <input type="submit" value="update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />

                </div>
            </form>
        </div>

    )
}

export default Edit