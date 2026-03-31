export default function TailwinCSS(){
      return(
            <div>
                  <h1 className="shadow-lg bg-blue-100 p-2 m-4">Belajar Tailwind CSS 4</h1>
                  <button className="bg-red-700 text-gray-300 px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>
                  
                  <Spacing title="Card" content="ABCDEFGH"/>
                  <FlexboxGrid/>
                  <Typography/>
                  <BorderRadius/>
                  <BackgroundColors/>
                  <ShadowEffects/>
                  <CardComponent/>
            </div>
      )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 m-6 rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Logout</h1>

        </nav>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-4 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="p-4">
            <h1 className="text-2xl font-extrabold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-400 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
      <div>
            <button className="border-3 hover:shadow-md border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-l-lg"> Klik Saya </button>
            <button className="border-3 hover:shadow-md border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-r-lg"> Klik Saya </button>
      </div>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-pink-200 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

const CardComponent = ({ 
  title = "Card", 
  content = "ABCDEFGHIJKLMNOPQRSTUVWXYZ..." 
}) => {
  return (
    // BackgroundColors, BorderRadius, ShadowEffects, Spacing, dan FlexboxGrid diterapkan di sini
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-md mx-auto border border-gray-100">
      
      {/* Typography untuk Judul */}
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
        {title}
      </h2>
      
      {/* Typography untuk Konten/Deskripsi */}
      <p className="text-base text-gray-600 leading-relaxed">
        {content}
      </p>

      {/* FlexboxGrid tambahan di dalam konten (opsional, untuk mendemonstrasikan grid) */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        <div className="bg-blue-50 text-blue-600 font-semibold p-3 rounded-lg text-center shadow-sm">
          Aksi 1
        </div>
        <div className="bg-indigo-50 text-indigo-600 font-semibold p-3 rounded-lg text-center shadow-sm">
          Aksi 2
        </div>
        <div className="bg-indigo-50 text-indigo-600 font-semibold p-3 rounded-lg text-center shadow-sm">
          Aksi 3
        </div>
        <div className="bg-indigo-50 text-indigo-600 font-semibold p-3 rounded-lg text-center shadow-sm">
          Aksi 4
        </div>
        <div className="bg-indigo-50 text-indigo-600 font-semibold p-3 rounded-lg text-center shadow-sm">
          Aksi 5
        </div>
      </div>

    </div>
  );
};