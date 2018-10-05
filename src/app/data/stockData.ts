export class Stock{
    constructor(
        public id:number,
        public name:string,
        public price:number,
        public rating:number,
        public desc:string,
        //多选框，用数组来显示
        public categories:Array<string>
    ){}
}

export class Menu{
    constructor(
        public id:number,
        public name:string,
        public link:string
    ){}
}

export const menus:Menu[]=[
    new Menu(1,'首页','home'),
    new Menu(2,'股票管理','stockmanager')
]



// export const stocks:Stock[]=[
//     new Stock(1,"第一只股票",12,3,"这是第一只股票",["金融","科技"]),
//     new Stock(2,"第二只股票",13,2,"这是第二只股票",["金融"]),
//     new Stock(3,"第三只股票",15,5,"这是第三只股票",["科技"]),
//     new Stock(4,"第四只股票",11,4,"这是第四只股票",["网络","科技"]),
//     new Stock(5,"第五只股票",16,2,"这是第五只股票",["金融","网络"]),
//     new Stock(6,"第六只股票",19,3.5,"这是第六只股票",["网络"]),
//     new Stock(7,"第七只股票",12,3,"这是第七只股票",["金融","科技","网络"]),
//     new Stock(8,"第八只股票",19,2.5,"这是第八只股票",["金融","网络"]),
//     new Stock(9,"第九只股票",23,1.5,"这是第九只股票",["网络","科技"]),
// ]