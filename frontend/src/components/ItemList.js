import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>ITEMS</h1>
            <h5>This is where you can see the records you filled up</h5>
            {items.length === 0 ? (
                <p>No items found.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <strong>First Name:</strong> {item.first_name} <br />
                            <strong>Middle Name:</strong> {item.middle_name} <br />
                            <strong>Surname:</strong> {item.last_name} <br />
                            <strong>Email:</strong> {item.email} <br />
                            <strong>Residential Address:</strong> {item.residential_address} <br />
                            <strong>Permanent Address:</strong> {item.permanent_address} <br />
                            <strong>Birthday:</strong> {item.birthday} <br />
                            <strong>Telephone:</strong> {item.telephone} <br />
                            <strong>Mobilephone:</strong> {item.mobile_phone} <br />
                            <strong>Place of Birth:</strong> {item.place_of_birth} <br />
                            <strong>Sex:</strong> {item.sex} <br />
                            <strong>Civil Status:</strong> {item.civil_status} <br />
                            <strong>Citizenship:</strong> {item.citizenship} <br />
                            <strong>Height:</strong> {item.height} <br />
                            <strong>Weight:</strong> {item.weight} <br />
                            <strong>Blood Type:</strong> {item.blood_type} <br />
                            <strong>Father's Name:</strong> {item.father_name} <br />
                            <strong>Father's Occupation:</strong> {item.father_occupation} <br />
                            <strong>Mother's Name:</strong> {item.mother_name} <br />
                            <strong>Mother's Occupation:</strong> {item.mother_occupation} <br />
                            <strong>Elementary School:</strong> {item.elementary_school} <br />
                            <strong>High School:</strong> {item.high_school} <br />
                            <strong>Senior High School:</strong> {item.senior_high_school} <br />
                            <strong>College:</strong> {item.college} <br />
                            <button onClick={() => onEdit(item)}>Edit</button>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
