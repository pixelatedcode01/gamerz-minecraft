import { useEffect, useRef, useState } from 'react';
import '../Styles/AddItem.css';
import { nanoid } from 'nanoid';

export default function AddItem() {
    const formRef = useRef();
    const [item, setItem] = useState({
        id: '',
        itemname: '',
        description: '',
        price: 0,
        image: ''
    })
    const [message, setMessage] = useState('');
    function handleUpdate(event) {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
    }

    async function handleAddItem(event) {
        event.preventDefault();

        setItem({
            ...item,
            id: nanoid()
        });

        try {
            // Use await to wait for the fetch call to complete
            const response = await fetch('http://localhost:3000/add-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            // Wait for the response to be converted to JSON
            const result = await response.json();

            // Check if the response was successful
            if (response.ok) {
                setMessage('Item added successfully');
                setItem({
                    itemname: '',
                    description: '',
                    price: 0,
                    image: ''
                });
                formRef.current.reset();
            } else {
                setMessage(`Failed to add item: ${result.message}`);
            }
        } catch (error) {
            console.error('Error adding item:', error);
            setMessage('An error occurred while adding the item');
        }
    }
    return (
        <div className="additem-container">
            <div className="additem-wrapper col gp-16">
                <div className="additem-header">
                    <h3 style={{
                        color: 'black'
                    }}>
                        Add Item
                    </h3>
                </div>
                <div className="body col">
                    {message && <p className='message' style={{
                        color: message.includes('successfully') ? 'green' : 'red',
                        textAlign: 'center',
                        width: '100%',
                        marginBottom: '1rem'
                    }}>{message}</p>}
                    <form ref={formRef} className="additem-form col gp-12" onSubmit={(e) => handleAddItem(e)} action='#'>
                        <input type="text" placeholder="Item Name" name='itemname' onChange={handleUpdate} required />
                        <input type="text" placeholder="Description" name='description' onChange={handleUpdate} />
                        <input type="number" placeholder="Price" name='price' required onChange={handleUpdate} />
                        <input type="file" placeholder="Image URL" accept='image/*'
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        setItem({
                                            ...item,
                                            image: e.target.result
                                        })
                                    }
                                    reader.readAsDataURL(file)
                                }
                            }}
                        />
                        <button type="submit" className='add-item-button'>Add Item</button>
                        <button type='reset' className='reset-button'>Reset</button>
                        <button type="button" className='back-button row al-ctr jc-ctr gp-4'>
                            <span className="material-symbols-rounded"
                                style={{
                                    fontSize: '1rem',
                                    color: 'black'
                                }}
                            >arrow_back</span>
                            Back</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
