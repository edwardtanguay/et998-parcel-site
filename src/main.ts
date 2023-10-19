import { Header } from './components/Header';
import { Skills } from './components/Skills';
import './style.scss';
import skills from './data/skills.json';
import { Jobs } from './components/Jobs';
import axios from 'axios';

(async () => {
	const jobs = (await axios.get('https://edwardtanguay.vercel.app/share/jobs.json')).data;

	document.querySelector('#app')!.innerHTML = /*html*/ `
	${Header()}
	<img class="rounded" src="images/code.png"/>
	${Skills(skills)}
	${Jobs(jobs)}
`;
})();