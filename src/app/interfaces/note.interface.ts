export interface INote {
    title: string;
    content: string;
    category: 'personal' | 'work' | 'study' | 'other';
    pinged: boolean;
    tags: {
        label: string;
        color: string;
    }
}