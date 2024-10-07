import { useState, useCallback } from 'react'

import './Email.css'
import IconError from '../../assets/images/icon-error.svg'
import IconChevron from '../../assets/images/icon-arrow.svg'

const Email = () => {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
        e.currentTarget.value === "" && setError(null)
    }

    const isEmailValid = useCallback((email: string): boolean => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return regex.test(email)
    }, [])

    const onHandleSubmit = useCallback((e: React.SyntheticEvent): void => {
        e.preventDefault()
        if (!isEmailValid(email)) {
            setError('Please provide a valid email.')
        } else {
            setError(null)
            setEmail("")
        }
    }, [email]);

    return (
        <form className='email-form' method='POST' onSubmit={onHandleSubmit}>
            <input type='text' name="email" placeholder='Email Adress' required className={`email-field ${error != null ? 'email-error' : ''}`} onChange={onChangeEmail} value={email} />
            <button className="email-button" type='submit'>
               <img className='icon-chevron' src={IconChevron} />
            </button>
            {error != null && (
                <>
                    <img className="icon-error" src={IconError} />
                    <span className='error-message'>{error}</span>
                </>
            )}
        </form>
    )
}

export default Email