import './style.scss';
import * as tools from './tools';

document.querySelector('#app')!.innerHTML  = /*html*/ `
	<h1>Parcel Site</h1>
`;

tools.changeTitle();