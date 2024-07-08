import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForms = ({ item, onSuccess }) => {
    const [first_name, setFname] = useState('');
    const [middle_name, setMname] = useState('');
    const [last_name, setLname] = useState('');
    const [residential_address, setResidentialAddress] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile_phone, setMobilePhone] = useState('');
    const [place_of_birth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [father_name, setFatherName] = useState('');
    const [father_occupation, setFatherOccupation] = useState('');
    const [mother_name, setMotherName] = useState('');
    const [mother_occupation, setMotherOccupation] = useState('');
    const [elementary_school, setElementarySchool] = useState('');
    const [high_school, setHighSchool] = useState('');
    const [senior_high_school, setSeniorHighSchool] = useState('');
    const [college, setCollege] = useState('');

    useEffect(() => {
        if (item) {
            setFname(item.first_name || '');
            setMname(item.middle_name || '');
            setLname(item.last_name || '');
            setResidentialAddress(item.residential_address || '');
            setPermanentAddress(item.permanent_address || '');
            setZipcode(item.zipcode || '');
            setEmail(item.email || '');
            setBirthday(item.birthday || '');
            setTelephone(item.telephone || '');
            setMobilePhone(item.mobile_phone || '');
            setPlaceOfBirth(item.place_of_birth || '');
            setSex(item.sex || '');
            setCivilStatus(item.civil_status || '');
            setCitizenship(item.citizenship || '');
            setHeight(item.height || '');
            setWeight(item.weight || '');
            setBloodType(item.blood_type || '');
            setFatherName(item.father_name || '');
            setFatherOccupation(item.father_occupation || '');
            setMotherName(item.mother_name || '');
            setMotherOccupation(item.mother_occupation || '');
            setElementarySchool(item.elementary_school || '');
            setHighSchool(item.high_school || '');
            setSeniorHighSchool(item.senior_high_school || '');
            setCollege(item.college || '');
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            last_name,
            residential_address,
            permanent_address,
            zipcode,
            email,
            birthday,
            telephone,
            mobile_phone,
            place_of_birth,
            sex,
            civil_status,
            citizenship,
            height,
            weight,
            blood_type,
            father_name,
            father_occupation,
            mother_name,
            mother_occupation,
            elementary_school,
            high_school,
            senior_high_school,
            college,
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
            // Clear the form fields
            setFname('');
            setMname('');
            setLname('');
            setResidentialAddress('');
            setPermanentAddress('');
            setZipcode('');
            setEmail('');
            setBirthday('');
            setTelephone('');
            setMobilePhone('');
            setPlaceOfBirth('');
            setSex('');
            setCivilStatus('');
            setCitizenship('');
            setHeight('');
            setWeight('');
            setBloodType('');
            setFatherName('');
            setFatherOccupation('');
            setMotherName('');
            setMotherOccupation('');
            setElementarySchool('');
            setHighSchool('');
            setSeniorHighSchool('');
            setCollege('');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>FILL-UP FORM</h1>
            <h5>Fill this form so you can see the records</h5>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMname(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLname(e.target.value)} />
            </div>
            <div>
                <label>Residential Address:</label>
                <textarea value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)} />
            </div>
            <div>
                <label>Permanent Address:</label>
                <textarea value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Telephone:</label>
                <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div>
                <label>Mobilephone:</label>
                <input type='text' value={mobile_phone} onChange={(e) => setMobilePhone(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Height (cm):</label>
                <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div>
                <label>Father's Name:</label>
                <input type='text' value={father_name} onChange={(e) => setFatherName(e.target.value)} />
            </div>
            <div>
                <label>Father's Occupation:</label>
                <input type='text' value={father_occupation} onChange={(e) => setFatherOccupation(e.target.value)} />
            </div>
            <div>
                <label>Mother's Name:</label>
                <input type='text' value={mother_name} onChange={(e) => setMotherName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Occupation:</label>
                <input type='text' value={mother_occupation} onChange={(e) => setMotherOccupation(e.target.value)} />
            </div>
            <div>
                <label>Elementary School:</label>
                <input type='text' value={elementary_school} onChange={(e) => setElementarySchool(e.target.value)} />
            </div>
            <div>
                <label>High School:</label>
                <input type='text' value={high_school} onChange={(e) => setHighSchool(e.target.value)} />
            </div>
            <div>
                <label>Senior High School:</label>
                <input type='text' value={senior_high_school} onChange={(e) => setSeniorHighSchool(e.target.value)} />
            </div>
            <div>
                <label>College:</label>
                <input type='text' value={college} onChange={(e) => setCollege(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForms;
