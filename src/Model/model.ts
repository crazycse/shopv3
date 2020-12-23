export interface itemModel{
    Category:string,
    Name:string,
    Total_kg:number,
    Price_kg:number,
    Total_price:number,
    Exp_date:Date,
    image:string
}
export interface selectedModel{
    id:number,
    dataSelected:itemModel
}