// source: https://svelte.dev/repl/adb8dc564044415f8ffbbd240a39d68d?version=3.44.2

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

export const lazyLoad = (image: HTMLImageElement, src: string) => {
    const loaded = () => {
        image.classList.add('visible');
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            image.src = src;
            if (image.complete) {
                loaded();
            } else {
                image.addEventListener('load', loaded);
            }
        }
    }, options);

    observer.observe(image);

    return {
        destroy() {
            image.removeEventListener('load', loaded);
        }
    }
}