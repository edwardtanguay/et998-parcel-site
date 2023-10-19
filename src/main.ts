import { Header } from './components/Header';
import { Skills } from './components/Skills';
import './style.scss';
import skills from '../data/skills.json';

document.querySelector('#app')!.innerHTML  = /*html*/ `
	${Header()}
	<img class="rounded" src="images/code.png"/>
	${Skills()}
`;