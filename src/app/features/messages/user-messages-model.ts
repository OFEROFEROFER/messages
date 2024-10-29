export interface AllUserMessages{
    incoming: UserMessage[],
    outgoing: UserMessage[]
}
 
export interface UserMessage{
    fromUser:string,
    toUser:string,
    sendTime:string,
    title:string,
    content:string,
    isRead?:boolean
}



