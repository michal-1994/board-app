import { IList } from '../interfaces/IList';

export const loadListsFromLocalStorage = (): IList[] | null => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : null;
};

export const saveListsToLocalStorage = (lists: IList[]) => {
    localStorage.setItem('lists', JSON.stringify(lists));
};
