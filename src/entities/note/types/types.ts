export type Note = {
    id: number,
    title: string,
    body: string,
    datetime: string,
}
export type SortMode = 'asc' | 'desc'
//Dto для получения всех записей
export type ReqNotesDto = void
export type ResNotesDto = Note[]

//Dto для получения одной записи
export type ReqNoteDetailsDto = Pick<Note, 'id'>
export type ResNoteDetailsDto = Note

//Dto для добавления записи

export type ReqAddNoteDto = Omit<Note, "id">
export type ResAddNoteDto = void

//Dto для сортировки записей

export type ReqSortNotesDto = SortMode
export type ResSortNotesDto = Note[]