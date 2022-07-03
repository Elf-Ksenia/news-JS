import './search.css';

export function search() {
  const input = document.querySelector('.search') as HTMLInputElement;
  const filter = input.value.toUpperCase();
  const sources = document.querySelector('.sources') as HTMLElement;
  const sourceItems = sources.getElementsByClassName('source__item') as HTMLCollection;

  for (let i = 0; i < sourceItems.length; i++) {
    const sourceName = sourceItems[i].querySelector('.source__item-name') as HTMLElement;
    if (sourceName.innerHTML.toUpperCase().indexOf(filter) > -1) {
      (sourceItems[i] as HTMLElement).style.display = '';
    } else {
      (sourceItems[i] as HTMLElement).style.display = 'none';
    }
  }
}

export default search;
