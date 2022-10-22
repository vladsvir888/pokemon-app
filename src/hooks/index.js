import { useState } from "react";

export const useFetching = (cb) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => { // rest ЗАворачиваем аргументы в массив
        try {
            setIsLoading(true);

            await cb(...args); // spread РАЗворачиваем массив в аргументы
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}