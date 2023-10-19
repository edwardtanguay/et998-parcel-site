import { ISkill } from "../interfaces";

export const Skills = (skills:ISkill[]) => {
	return /*html*/ `
		<h2 class="text-2xl mt-3">There are ${skills.length} skills.</h2>
		<ul>
		${skills.map((skill,index) => {
			return /*html*/ `
				<li>${index + 1}. <span class="font-bold">${skill.name}</span> - ${skill.description}</li>	
			`
		}).join('')}
		</ul>
	`;
}