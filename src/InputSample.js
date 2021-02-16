import React, { useRef, useState } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input ref={nameInput} name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>
                    {name} ({nickname})
                </b>
            </div>
        </div>
    );
};

export default InputSample;
