import { useState, useCallback } from 'react'

import './Email.css'

const Email = () => {
    const [email, setEmail] = useState("");

    const onChangeEmail = useCallback((event: React.FormEvent<HTMLInputElement>): void => (
        setEmail(event?.currentTarget?.value)
    ), []);


    const onClickSubmit = (): void => {
        console.log(email);
    }

    return (
        <form className='email-form'>
            <input type='text' placeholder='Email Adress' required className='email-field' onChange={onChangeEmail} value={email} />
            <button id="email-button" onClick={onClickSubmit}>
                {">"}
            </button>
        </form>
    )
}

export default Email