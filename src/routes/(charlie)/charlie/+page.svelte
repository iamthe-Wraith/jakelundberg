<div class="container">
    <div class="bg"></div>

    <div class="monitor-frame center">
        <div class="monitor-case center">
            <div class="webcam"></div>

            <div class="monitor"></div>

            <i class="fa-regular fa-ghost logo"></i>
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('https://res.cloudinary.com/dxpwpno1e/image/upload/v1722477038/computer-monitor_urinaa.png') no-repeat center center;
        background-size: cover;
        filter: blur(2px);
    }

    .monitor-frame {
        width: 96%;
        height: 96%;
        border: 2px solid var(--neutral-100);
        border-radius: 1rem;
        background: var(--neutral-100);
        background: linear-gradient(287deg, var(--accent1-500) 0%, var(--primary-500) 40%, var(--primary-100) 70%);
        overflow: hidden;

        &:before {
            content: '';
            position: absolute;
            bottom: 70%;
            left: 50%;
            width: 150%;
            height: 50%;
            background: rgba(0, 0, 0, 0.3);
            transform: translateX(-50%) rotate(5deg);
        }
    }

    .monitor-case {
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        border-radius: 1rem;
        background: var(--neutral-100);
        background: linear-gradient(287deg, var(--accent1-200) 0%, var(--primary-200) 40%, var(--primary-100) 70%);

        &:before {
            content: '';
            position: absolute;
            bottom: 70%;
            left: 50%;
            width: 150%;
            height: 50%;
            background: rgba(0, 0, 0, 0.3);
            transform: translateX(-50%) rotate(5deg);
        }
    }

    .webcam {
        position: absolute;
        top: 0.15rem;
        left: 50%;
        width: 0.7rem;
        height: 0.7rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        transform: translateX(-50%);

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            height: 60%;
            background: var(--neutral-100);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .monitor {
        position: absolute;
        top: 1rem;
        right: 1rem;
        bottom: 2.5rem;
        left: 1rem;
        border: 2px solid var(--neutral-100);
        border-radius: 1rem;
        background: var(--neutral-150);
        box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.3);
    }

    .logo {
        position: absolute;
        bottom: 0.25rem;
        left: 50%;
        color: var(--neutral-100);
        font-size: 2rem;
        transform: translateX(-50%);
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>