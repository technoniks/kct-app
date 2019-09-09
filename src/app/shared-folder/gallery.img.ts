export class GalleryImg{
    $key: string
    file:File
    name:string
    url:string
    progress:number
    detail:string
    date:Date = new Date()

    constructor(file:File,detail:string){
        this.file = file
        this.detail = detail
    }
}