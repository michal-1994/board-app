import { IList } from '../interfaces/IList';

export const LISTS: IList[] = [
    {
        title: 'Todo',
        items: [
            {
                text: 'Deploy application'
            },
            {
                text: 'Meeting with client'
            }
        ]
    },
    {
        title: 'In Progress',
        items: [
            {
                text: 'Create tests'
            }
        ]
    },
    {
        title: 'Done',
        items: [
            {
                text: 'Install project'
            },
            {
                text: 'Add layout'
            }
        ]
    }
];
