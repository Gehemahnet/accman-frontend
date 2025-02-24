export const useLocalStorage = () => {
    const get = <T>(key: string) =>
        JSON.parse(localStorage.getItem(key)) as T;

    const has = (key: string) =>
        Boolean(JSON.parse(localStorage.getItem(key)));

    const set = <T>(key: string, value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const clear = (key: string) => {
        localStorage.removeItem(key);
    };

    return {
        get, has, set, clear,
    };
};