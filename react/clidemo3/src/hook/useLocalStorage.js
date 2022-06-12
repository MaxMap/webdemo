import { useState, useEffect } from 'react'
export default function useLocalStoratge(key, deefaultValue) {
    const [message, setMessage] = useState(deefaultValue)
    useEffect(() => {
        window.localStorage.setItem(key, message)
    }, [message, key])
    return [message, setMessage]
}