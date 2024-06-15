<div class="container">
    <div class="manor-gate">
        <img
            class="manor-gate-mobile"
            src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718378575/manor-gate-mobile_fbhyjq.png"
            alt=""
        />

        <div class="manor-gate-desktop">
            <img
                src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718378575/manor-gate-desktop_vsv0fr.png"
                alt=""
            />
        </div>
    </div>

    <div class="intro">
        <p class="h1">Welcome to Wraith Manor</p>

        <div class="intro-content">
            <img
                src="https://res.cloudinary.com/dxpwpno1e/image/upload/v1718376369/bugs-hi-square_uxkso5.png"
                alt="A cute cartoon wraith with big, innocent eyes and a red cloak waving at the viewer."
            />
    
            <div>
                <p>
                    I'm Dee Bugz, but everyone just calls me Bugz for short. 
                </p>
        
                <p>
                    I'll be your guide as you explore the grounds of Wraith Manor, once the home of
                    a mad engineer named <span>Jake Lundberg</span>, whose passion for building software 
                    led him to create many strange and wonderful things for the web.
                </p>

                <p>
                    But be careful...
                </p>
        
                <p>
                    Ever since Jake mysteriously disappeared from his lab, strange things have been
                    happening here. 
                    
                    ...
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .manor-gate {
        max-width: 80rem;
        margin: 0 auto;

        & .manor-gate-mobile {
            display: none;
        }

        & .manor-gate-desktop {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 20rem;

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .intro {
        position: relative;
        width: 94%;
        max-width: 60rem;
        margin: -5rem auto 3rem;
        padding: 2rem 1rem;
        border-top: 5px solid var(--primary-500);
        background: var(--neutral-200);
        z-index: 1;

        & .h1 {
            position: relative;
            z-index: 2;
        }

        & .intro-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 50rem;
            margin: 0 auto;

            & img {
                width: 10rem;
                height: 10rem;
                margin: 0 auto;
                animation: float 5s ease-in-out infinite;
            }

            & p:last-child {
                margin-bottom: 0;
            }
        }

        & .greeting {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 2rem;
            text-align: center;
        }

        & p {
            margin-bottom: 1rem;

            & span {
                color: var(--accent1-500);
            }

            & a {
                text-decoration: none;
            }
        }
    }

    @media (min-width: 500px) {
        .intro .intro-content {
            flex-direction: row;
            gap: 0.5rem;
        }
    }

    @media (min-width: 620px) {
        .intro .intro-content img {
            width: 10rem;
            height: 10rem;
        }
    }

    @media (min-width: 768px) {
        .intro .intro-content img {
            width: 12rem;
            height: 12rem;
        }
    }
</style>