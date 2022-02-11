export default class Card{
    constructor(data){
        
        this.updatedAt = data.updatedAt ?? new Date(),
        this.createdAt = data.createdAt ?? new Date()
    }
}