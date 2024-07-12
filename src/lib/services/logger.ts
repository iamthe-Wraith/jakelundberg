export class Logger {
    public static log = (message: string, ...args: unknown[]): void => {
        console.log(message, args);
    }

    public static error = (message: string, ...args: unknown[]): void => {
        console.error(message, args);
    }
}