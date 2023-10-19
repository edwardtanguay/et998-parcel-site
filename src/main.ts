import { Header } from './components/Header';
import './style.scss';

document.querySelector('#app')!.innerHTML  = /*html*/ `
	${Header()}
	<img class="rounded" src="images/code.png"/>
`;