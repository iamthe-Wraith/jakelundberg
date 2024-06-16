import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

interface IRedirect {
    url: string;
    text: string;
    target?: '_blank';
}

interface IToastRequest {
    message: string;
    redirect?: IRedirect;
    type?: 'success' | 'error';
    duration?: number;
}

export interface IToast {
    id: string,
    message: string;
    type: 'success' | 'error';
    exp: number;
    redirect: IRedirect | null;
}

const { subscribe, update } = writable<IToast[]>([]);

const defaultDuration = 3500;

let interval: number | undefined = undefined;

const add = (t: IToastRequest) => {
    const newToast: IToast = {
        id: uuidv4(),
        message: t.message,
        type: t.type || 'success',
        exp: Date.now() + (t.duration || defaultDuration),
        redirect: t.redirect || null,
    }

    update(toasts => [...(toasts || []), newToast]);

    if (interval === undefined) {
        interval = window.setInterval(tick, 100);
    }
};

const init = (data: IToast[]) => {
    update(toasts => [...(toasts || []), ...data]);

    if (interval === undefined) {
        interval = window.setInterval(tick, 100);
    }
}

const remove = (id: string) => {
    update(toasts => toasts.filter(t => t.id !== id));
};

const reset = () => {
    update(() => []);
    window.clearInterval(interval);
    interval = undefined;
}

const tick = () => {
    update(toasts => {
        const updated = toasts.filter(t => t.exp > Date.now());
    
        if (!toasts.length) {
            window.clearInterval(interval);
            interval = undefined;
        }
    
        return updated;
    });
}

export const toast = {
  subscribe,
  add,
  init,
  remove,
  reset,
};