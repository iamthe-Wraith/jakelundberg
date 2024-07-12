import { Logger } from "$lib/services/logger";
import { ProjectsService } from "$lib/services/projects";
import { WorkService, type IJob } from "$lib/services/work";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async ({ locals }) => {
    const projectsService = new ProjectsService();
    const workService = new WorkService(locals.sanity);

    let jobs: IJob[] = [];
    let jobsError: string = '';

    const projects = await projectsService.getProjects();
    
    try {
        jobs = await workService.getJobs();
    } catch (err: unknown) {
        Logger.error("Failed to get jobs", (err as Error).message);
        jobsError = "Uh oh, looks like there was an issue retrieving Jake's work history. Let me see what's going on. Come back in a bit!";
    }

    return {
        projects,
        jobs: {
            data: jobs,
            error: jobsError,
        },
    };
};