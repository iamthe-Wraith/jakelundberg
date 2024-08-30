import { Logger } from "$lib/services/logger";
import { ProjectsService, type IProject } from "$lib/services/projects";
import { WorkService, type IJob } from "$lib/services/work";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async ({ locals }) => {
    const projectsService = new ProjectsService(locals.sanity);
    const workService = new WorkService(locals.sanity);

    let projects: IProject[] = [];
    let projectError: string = '';

    let jobs: IJob[] = [];
    let jobsError: string = '';

    try {
        projects = await projectsService.getProjects();
    } catch (err: unknown) {
        Logger.error("Failed to get projects", (err as Error).message);
        projectError = "Uh oh, Jake's projects aren't here. I hope they didn't come back to life and wander off! Let me see what's going on. Come back in a bit!";
    }
    
    try {
        jobs = await workService.getJobs();
    } catch (err: unknown) {
        Logger.error("Failed to get jobs", (err as Error).message);
        jobsError = "Uh oh, Jake's work history isn't here. I hope they didn't come back to life and wander off! Let me see what's going on. Come back in a bit!";
    }

    return {
        projects: {
            data: projects,
            error: projectError
        },
        jobs: {
            data: jobs,
            error: jobsError,
        },
    };
};