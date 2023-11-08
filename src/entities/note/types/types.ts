export type Note = {
    id: number,
    title: string,
    body: string,
    date: string,
    time: string
}
//Dto для получения всех записей
export type ReqNotesDto = Note[]
export type ResNotesDto = void

//Dto для получения одной записи
export type ReqNoteDetailsDto = Note
export type ResNoteDetailsDto = Pick<Note, 'id'>