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

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Typescript 기본 문법</h1>
            <ul className="mt-10">
                <li>기본 데이터 타입 (string) : 이름 = {name}</li>
                <li>기본 데이터 타입 (number) : 나이 = {age}</li>
                <li>기본 데이터 타입 (boolean) : {isStudent ? '학생' : '일반인'}</li>
            </ul>
        </div>
    )
}
