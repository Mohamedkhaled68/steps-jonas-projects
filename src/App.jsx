import React, { useState } from 'react';

const btnColor = { backgroundColor: '#7950f2', color: '#fff' };

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

const App = () => {
    const [steps, setSteps] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    const increaseHandler = () => {
        if (steps < messages.length) setSteps((prev) => prev + 1);
    };
    const decreaseHandler = () => {
        if (steps != 1) setSteps((prev) => prev - 1);
    };
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className="close">
                &times;
            </div>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        {messages.map((message, idx) => {
                            return (
                                <div
                                    className={steps > idx ? 'active' : ''}
                                    key={idx}
                                >
                                    {idx + 1}
                                </div>
                            );
                        })}
                    </div>
                    <div className="message">
                        {messages.map((message, idx) => {
                            if (steps === idx + 1) {
                                return (
                                    <p key={idx}>
                                        Step {idx + 1}: {message}
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div className="buttons">
                        <button onClick={decreaseHandler} style={btnColor}>
                            Previous
                        </button>
                        <button onClick={increaseHandler} style={btnColor}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
