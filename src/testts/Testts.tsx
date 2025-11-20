export default function Testts() {
    // 기본 데이터 타입
    let age : number = 30
    let name : string = 'K-digital'
    let isStudent : boolean = true;

    let x : any
    x = 10
    let y : undefined = undefined
    //y = 10 // 이렇게는 안됨.
    let z : null = null
    let arrTuple : [string, number] = ["K-digital", 30];

    let nums : number[] = [1,2,3]
    let num2 : Array<string> = ['1','2','3']

    type Person = {
        name:string,
        age:number
    }

    interface Person2 {
        name:string,
        age:number
    }

    let person : {name:string, age: number} = {name: 'pnu', age : 30}
    let person2 : Person = {name: 'pnu1', age : 20}
    let person3 : Person2 = {name: 'pnu2', age : 25}
    
    let direction : string = 'left'
    direction = 'right'

    let direct : 'left' | 'right' = 'left' // 유니온 타입.
    direct = 'right'

    type HandleMsg = (msg : string) => string;

    type HandleClick = () => void

    const handleMsg : HandleMsg = (msg) => {
        return msg + " 님 안녕하세요."
    }
    

    const handleclick : HandleClick = () : void => {
        console.log("handleClick")
        console.log(handleMsg('Kdigital'))
    }


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Typescript 기본 문법</h1>
            <ul className="mt-10">
                <li>기본 데이터 타입 (string) : 이름 = {name}</li>
                <li>기본 데이터 타입 (number) : 나이 = {age}</li>
                <li>기본 데이터 타입 (boolean) : {isStudent ? '학생' : '일반인'}</li>
                <li>배열 {nums.join(',')}</li>
                <li>배열2 {num2.join(',')}</li>
                <li>튜플 : 이름 {arrTuple[0]}</li>
                <li>오브젝트 이름 : {person.name} 나이 {person['age']}</li>
                <li>오브젝트 이름2 : {person2.name} 나이 {person2['age']}</li>
            </ul>
            <div>
                <button className="bg-amber-700 text-white p-2 hover:cursor-pointer"onClick={handleclick}>클릭</button>
            </div>
        </div>
    )
}
