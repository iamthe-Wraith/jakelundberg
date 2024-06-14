<script lang="ts">
    import './global.css';
    import { page } from '$app/stores';  

    const socialItems = [
        {
            text: 'GitHub',
            route: 'https://github.com/iamthe-Wraith',
            icon: 'fa-brands fa-github',
        },
        {
            text: 'LinkedIn',
            route: 'https://www.linkedin.com/in/jake-lundberg/',
            icon: 'fa-brands fa-linkedin',
        },
        {
            text: 'Dev.to',
            route: 'https://dev.to/wraith',
            icon: 'fa-brands fa-dev',
        }
    ];

    const navItems = [
        {
            text: 'Experience',
            subText: 'Stuff I\'ve worked on',
            route: '/experience',
            icon: 'fa-regular fa-laptop-code',
            iconStyles: 'transform: rotate(2deg);'
        },
        {
            text: 'About',
            subText: 'Beyond the code',
            route: '/about',
            icon: 'fa-regular fa-person-pinball',
            iconStyles: 'transform: rotate(0deg);'
        },
        {
            text: 'Blog',
            subText: 'Learn it. Share it',
            route: 'https://dev.to/wraith',
            icon: 'fa-regular fa-blog',
            iconStyles: 'transform: rotate(-6deg);'
        },
        {
            text: 'The Lab',
            subText: 'Where I experiment',
            route: '/the-lab',
            icon: 'fa-regular fa-flask-round-poison',
            iconStyles: 'transform: rotate(8deg);'
        },
        {
            text: 'Uses',
            subText: 'Tools I use',
            route: '/uses',
            icon: 'fa-regular fa-gear-complex-code',
            iconStyles: 'transform: rotate(-4deg);'
        },
        {
            text: 'Contact',
            subText: 'Get in touch',
            route: '/contact',
            icon: 'fa-regular fa-at',
            iconStyles: 'transform: rotate(5deg);'
        }
    ];
</script>

<div class="app">
    <header>
        <div class="top">
            <div class="side left"></div>

            <a href="/" class="logo">
                <i class="fa-regular fa-ghost"></i>
            </a>

            <div class="side right">
                {#each socialItems as { text, route, icon }}
                    <a
                        href={route}
                        target="_blank"
                        class="social-item"
                        aria-label={text}
                    >
                        <i class={icon}></i>
                    </a>
                {/each}
            </div>
        </div>

        <nav>
            {#each navItems as { text, subText, route, icon, iconStyles }}
                <a
                    href={route}
                    class="nav-item {$page.url.pathname === route ? 'active' : ''}"
                    target={route.startsWith('http') ? '_blank' : ''}
                >
                    <div class="nav-item-icon">
                        <i class={icon} style={ iconStyles ?? '' }></i>
                    </div>

                    <div class="nav-item-text-container">
                        <span class="nav-item-text h4">{text}</span>
                        {#if subText}
                            <span class="nav-item-subtext">{subText}</span>
                        {/if}
                    </div>
                </a>
            {/each}
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>
</div>

<style>
    .app {
        width: 100vw;
        height: 100vh;
        overflow: auto;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 1.5rem 1.5rem 1rem;
        background: var(--neutral-100);
    }

    .top {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1rem;

        &:before {
            content: '';
            position: absolute;
            top: 100%;
            left: 20%;
            right: 20%;
            height: 5px;
            background: var(--neutral-300);
        };

        & .side {
            display: flex;
            gap: 1rem;                
            width: calc(50% - 3rem);

            &.right {
                justify-content: flex-end;
            }

            &.left {
                justify-content: flex-start;
            }
        }
    }

    .social-item {
        color: var(--neutral-600);

        &:hover {
            color: var(--accent1-500);
        }

        & i {
            font-size: 1.25rem;
        }
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        width: 100%;

        & .nav-item {
            position: relative;
            display: flex;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid transparent;
            text-decoration: none;
            transition: all 0.25s ease-in-out;

            &.active {
                border-bottom: 2px solid var(--accent1-500);

                & .nav-item-text {
                    color: var(--accent1-500);
                }
            }

            &:hover:not(.active) {
                & .nav-item-text {
                    color: var(--primary-100);
                }
            }
        }

        & .nav-item-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.5rem;
            /* color: var(--neutral-700); */
            
            & i {
                font-size: 2rem;
            }
        }

        & .nav-item-text-container {
            display: flex;
            flex-direction: column;
        }

        & .nav-item-text {
            margin-bottom: 0;
            line-height: 2rem;
            transition: all 0.25s ease-in-out;
            text-align: left;
        }

        & .nav-item-subtext {
            font-size: 0.75rem;
            /* color: var(--neutral-700); */
            line-height: 1rem;
            white-space: nowrap;
        }

        & .nav-item-active {
            position: absolute;
            top: calc(100% + 0.3rem);
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .logo {
        display: flex;
        color: var(--primary-500);
        color: var(--neutral-900);

        & i {
            font-size: 2.25rem;
        }
    }


</style>