import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async () => {
    const work = [
        {
            id: 5,
            title: 'Senior Software Engineer',
            company: 'Greenplaces',
            url: 'https://greenplaces.com/',
            location: 'Raleigh, NC (Remote)',
            startDate: dayjs('Oct 1 2023 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            endDate: null,
            summary: 'Jake is currently in the middle of leading a major overhaul of the Greenplaces application. The project is a huge undertaking, handling redesigning the UI, building out a new component library, refactoring and consolidating large portions of the backend, and implementing thorough testing to keep it all dependable and easy to maintain. During this whole process he\'s administered standards across the team, manages the release process, and has even reduced cycle time by more than 40%!',
            highlights: [
                'Improved engineering cycle time by 42% by implementing new processes and standards across the team',
                'Led implementation of a full application refactor and redesign to improve UX and code standardization, as well as to reduce bugs and development time in future work using PHP, Laravel, and Livewire.',
                'Ensured high application dependability and maintainability through thorough testing using Dusk and PHPUnit',
            ],
            tags: ['PHP', 'Laravel', 'Livewire', 'Dusk', 'PHPUnit']
        },
        {
            id: 4,
            title: 'Software Engineer',
            company: 'Kickfin',
            url: 'https://kickfin.com/',
            location: 'Austin, TX (Remote)',
            startDate: dayjs('Aug 1 2022 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            endDate: dayjs('Jul 01 2023 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            summary: 'When he was at Kickfin, Jake headed up the frontend development of their latest (at the time) product, taking it from it\'s inception through to launch and beyond. He also lead development of lots of different features both for their internal tools used to manage the business, and for their external clients. So he got to experience solving problems for different kinds of users, which I know he really enjoyed!',
            highlights: [
                'Led the frontend development and maintenance of a new product from initialization to launch using React, Redux, Node, Typescript, CSS, and HTML',
                'Led end-to-end implementation of new features across multiple client facing and internal applications',
                'Ensured high application dependability and maintainability through thorough testing using Cypress and Jest',
                'Fostered cross-functional collaboration with leadership, designers, and engineers to optimize feature development efficiency',
            ],
            tags: ['Node', 'Typescript', 'React', 'Redux', 'CSS', 'Cypress', 'Jest']
        },
        {
            id: 3,
            title: 'Software Engineer',
            company: 'Karma Wallet',
            url: 'https://karmawallet.io/',
            location: 'Raleigh, NC (Remote)',
            startDate: dayjs('Nov 1 2021 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            endDate: dayjs('Aug 01 2022 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            summary: 'Jake joined Karma Wallet very early on, so he was one of only three developers. But that didn\'t hinder him from building out a custom integration with external financial software, implementing a new automated continuous integration and continuous deployment (or CI/CD for short) pipeline, and also building an entirely new admin portal for internal employees to monitor business reporting and manage the company\'s users. While doing all this, he was still able to lead the team in migrating to Mobx and Typescript, which were new technologies for them, in an effort to solve some of their pain points.',
            highlights: [
                'Developed a custom integration with external financial software which enhanced business decision-making capabilities and data analysis',
                'Increased deployment frequency and reduced process bottlenecks by implementing automatic deployment to AWS services using Github Actions',
                'Designed and developed an internal portal for managing customer data resulting in faster delivery of business needs and initiatives',
                'Improved project maintainability by leading the migration to new technologies including Node, MongoDB, React, Mobx, Typescript, Javascript, CSS and HTML',
            ],
            tags: ['Node', 'MongoDB', 'Typescript', 'React', 'Mobx', 'CSS']
        },
        {
            id: 2,
            title: 'Software Developer 2',
            company: 'Levitate',
            url: 'https://levitate.ai/',
            location: 'Raleigh, NC (Hybrid)',
            startDate: dayjs('Jul 1 2020 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            endDate: dayjs('Nov 01 2021 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            summary: 'Jake landed at Levitate just days after being laid off at the very beginning of the Covid pandemic. There he went from having 0 React experience to becoming the lead frontend developer of a new gamified sales tool the company was building. He\'s also big on knowledge sharing, so he led the initiative of building an internal knowledge-base for other teams to use to solve their customer\'s problems. Not only that, but he regularly joined client calls to help provide technical support, and he volunteered to maintain the companies marketing website!',
            highlights: [
                'Developed the frontend of a custom sales solution leveraging React, Mobx, Typescript, Javascript, CSS and HTML which reduced company costs, increased sales efforts, and eventually became a product which is being sold today',
                'Enhanced functionality and improved user experience by leading frontend development for multiple major features',
                'Established a centralized internal knowledge base by leading the research, testing, and implementation of a knowledge sharing tool for the entire company, which resulted in faster access to information in order to address client needs',
                'Ensured seamless integration and alignment with evolving needs by collaborating closely with team members, other teams, and company leadership',
                'Ensured optimal performance and user satisfaction by providing technical support and troubleshooting expertise through regular participation in client calls',
                'Demonstrated a strong commitment to the company’s success and brand image by maintaining the company’s publicly facing marketing website',
            ],
            tags: ['Typescript', 'React', 'Mobx', 'CSS', 'C#']
        },
        {
            id: 1,
            title: 'Senior Optimization Engineer',
            company: 'Brooks Bell',
            url: 'https://www.brooksbell.com/',
            location: 'Raleigh, NC',
            startDate: dayjs('May 1 2016 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            endDate: dayjs('Jun 01 2020 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
            summary: 'Brooks Bell was Jake\'s very first professional development job after graduating college where he built A/B tests for really big companies. Within his first 6 months, and on his own time, Jake built a custom command line tool they eventually named Igor that was quickly adopted by the team to automate large portions of the their work, and also to align the entire team around a single set of standards for all their clients. Jake maintained that tool for the next 3(ish) years and it allowed them to increase the number of A/B tests they were able to output by more than 400%!',
            highlights: [
                'Created and maintained an internal automation tool using NodeJS, which resulted in an estimated 400% increase in developer output over approximately 3 years',
                'Developed front-end A/B testing for enterprise clients in hospitality, entertainment, finance, and retail using Javascript, HTML, CSS, Adobe Target, Optimizely, and Dynamic Yield',
                'Provided onsite and virtual technical consulting and training to clients',
                'Identified and solved process issues for the development team',
                'Designed and implemented the development team’s process and infrastructure',
                'Served as the go-to developer for technical questions, code reviews, and troubleshooting complex bugs',
                'Assisted in screening and interviewing developer candidates',
                'Contributed to the company’s A/B testing program management tool using React and Redux',
                'Led training and presentations for internal and external teams',
            ],
            tags: ['Node', 'Javascript', 'HTML', 'CSS', 'Adobe Target', 'Optimizely', 'Dynamic Yield']
        }
    ];

    return {
        work,
    };
};