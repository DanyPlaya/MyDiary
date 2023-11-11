export type Note = {
    id: number,
    title: string,
    body: string,
    datetime: string,
}
//Dto для получения всех записей
export type ReqNotesDto = void
export type ResNotesDto = Note[]

//Dto для получения одной записи
export type ReqNoteDetailsDto = Pick<Note, 'id'>
export type ResNoteDetailsDto = Note

//Dto для добавления записи

export type ReqAddNoteDto = Omit<Note, "id">
export type ResAddNoteDto = void