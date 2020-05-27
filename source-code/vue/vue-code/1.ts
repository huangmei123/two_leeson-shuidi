//1.ts如何来约束闭包函数的类型
function tsMakeMap(
  str:string,
  expectLowserCase:boolean
) :(key:string)=> boolean {
    const map = Object.create(null);
    const list = str.split(',');
    return expectLowserCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}
