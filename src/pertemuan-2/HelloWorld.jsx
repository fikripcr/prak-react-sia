import QuoteText from "./QuoteText";

export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <img src="./img/neon.png" width="100%"/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Fikri"
                nim="1256401011"
                tanggal="2026/03/10"
            />
            <UserCard
                nama="Adudu"
                nim="123"
                tanggal="2026/03/10"
            />

            <UserCard {...propsUserCard}/>

        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari binjai👌🖐️</small>
    )
}

function UserCard(props){
    return (
        <>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>image: {props.image}</p>
        </>
    )
}
