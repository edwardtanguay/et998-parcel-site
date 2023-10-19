import { ISkill } from "../interfaces";

export const Skills = (skills:ISkill[]) => {
	return /*html*/ `
		<h2 class="text-2xl mt-3">There are ${skills.length} skills.</h2>
	`;
}