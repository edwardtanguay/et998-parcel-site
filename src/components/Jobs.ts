import { IJob } from "../interfaces";

export const Jobs = (jobs:IJob[]) => {
	return /*html*/ `
		<h2 class="text-2xl mt-3">There are ${jobs.length} jobs.</h2>	
		<ul>
		${jobs.slice(0,5).map((job,index) => {
			return /*html*/ `
				<li>${index + 1}. <span class="font-bold">${job.title}</span> - (${job.publicationDate}) - ${job.skillList}</li>	
			`
		}).join('')}
		</ul>
	`	
};