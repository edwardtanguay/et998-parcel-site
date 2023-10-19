import { Header } from './components/Header';
import { Skills } from './components/Skills';
import './style.scss';
import skills from './data/skills.json';
import { Jobs } from './components/Jobs';

(async () => {
	const response = await fetch('https://edwardtanguay.vercel.app/share/jobs.json');
	const jobs = await response.json();

	document.querySelector('#app')!.innerHTML = /*html*/ `
	${Header()}
	<img class="rounded" src="images/code.png"/>
	${Skills(skills)}
	${Jobs(jobs)}
`;
})();