export interface Room{
    totalRooms:number
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList{
    roomType: string;
    amenities: string;
    price:number;
    photos:string;
    availibility:boolean;
    checkInTime:Date;
    checkOutTime:Date;
    roomId:number;
}
