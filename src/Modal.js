import React, { useState, useEffect } from "react";

const Modal = ({ title, children, closeable }) => {
    const [open, setOpen] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [baskets, setBaskets] = useState([]);
    const [selectedBasket, setSelectedBasket] = useState("");

    useEffect(() => {
        const fetchBaskets = async () => {
            try {
                const response = await fetch("http://localhost:8080/baskets");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBaskets(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchBaskets();
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedBasket(event.target.value);
    };

    if (open) {
        return (
            <div style={{
                border: "1px solid yellow",
                padding: "10px",
                margin: "10px",
                maxHeight: "150px",
                overflow: "auto"
            }}>
                <hr />
                {title}
                <hr />
                {children}
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter text"
                    style={{ display: "block", margin: "10px 0" }}
                />
                <select onChange={handleSelectChange} value={selectedBasket}>
                    <option value="">Select a basket</option>
                    {baskets.map((basket) => (
                        <option key={basket.id} value={basket.id}>
                            {basket.name}
                        </option>
                    ))}
                </select>
                <input type="text" value={selectedBasket} readOnly style={{ display: "block", margin: "10px 0" }} />
                {closeable ? (
                    <button disabled={inputValue === ""} onClick={() => setOpen(false)}>Close</button>
                ) : null}
            </div>
        );
    } else {
        return (
            <div>
                {title}
                <button onClick={() => setOpen(true)}>Open</button>
            </div>
        );
    }
};

export default Modal;