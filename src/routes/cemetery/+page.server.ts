import { ProjectsService } from "$lib/services/projects";
import { WorkService } from "$lib/services/work";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async ({ locals }) => {
    const projectsService = new ProjectsService();
    const workService = new WorkService(locals.sanity);

    const projects = await projectsService.getProjects();
    const jobs = await workService.getJobs();

    return {
        projects,
        jobs,
    };
};