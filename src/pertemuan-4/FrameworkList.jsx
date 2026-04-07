import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-12 space-y-6 bg-gray-950 rounded-3xl shadow-2xl">
    {frameworkData.map((item, index) => {
        // Tentukan palet warna berdasarkan indeks untuk variasi warna yang hype
        const colorPalettes = [
            { // Teal/Emerald (Hijau)
                cardBg: 'border-emerald-800/50 bg-emerald-950/20',
                textTitle: 'text-emerald-300',
                textDot: 'text-emerald-700',
                tag: 'bg-emerald-950 text-emerald-300 border border-emerald-800',
                button: 'bg-emerald-600 text-white hover:bg-emerald-500',
                shadow: 'hover:shadow-[0_0_25px_rgba(5,150,105,0.3)]',
                focusRing: 'focus:ring-emerald-500/50',
            },
            { // Indigo (Ungu)
                cardBg: 'border-indigo-800/50 bg-indigo-950/20',
                textTitle: 'text-indigo-300',
                textDot: 'text-indigo-700',
                tag: 'bg-indigo-950 text-indigo-300 border border-indigo-800',
                button: 'bg-indigo-600 text-white hover:bg-indigo-500',
                shadow: 'hover:shadow-[0_0_25px_rgba(79,70,229,0.3)]',
                focusRing: 'focus:ring-indigo-500/50',
            },
            { // Sky/Blue (Biru)
                cardBg: 'border-sky-800/50 bg-sky-950/20',
                textTitle: 'text-sky-300',
                textDot: 'text-sky-700',
                tag: 'bg-sky-950 text-sky-300 border border-sky-800',
                button: 'bg-sky-600 text-white hover:bg-sky-500',
                shadow: 'hover:shadow-[0_0_25px_rgba(14,165,233,0.3)]',
                focusRing: 'focus:ring-sky-500/50',
            },
            { // Amber/Orange (Oranye)
                cardBg: 'border-amber-800/50 bg-amber-950/20',
                textTitle: 'text-amber-300',
                textDot: 'text-amber-700',
                tag: 'bg-amber-950 text-amber-300 border border-amber-800',
                button: 'bg-amber-600 text-white hover:bg-amber-500',
                shadow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]',
                focusRing: 'focus:ring-amber-500/50',
            },
        ];
        
        const palette = colorPalettes[index % colorPalettes.length];

        return (
            <div 
                key={item.id} 
                className={`hover:rotate-2 p-6 sm:p-8 rounded-2xl border ${palette.cardBg} transition-all duration-300 ease-in-out ${palette.shadow} overflow-hidden`}
            >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 relative ">
                    {/* Efek aksen gradien halus di latar belakang kartu */}
                    <div className={`absolute inset-0 -m-8 opacity-10 bg-gradient-to-r from-${palette.textTitle.split('-')[1]}-500 via-${palette.textDot.split('-')[1]}-500 to-${palette.textTitle.split('-')[1]}-500 blur-2xl`}></div>

                    {/* Bagian Teks & Informasi */}
                    <div className="flex-1 relative z-10 ">
                        <h2 className={`text-3xl font-extrabold tracking-tighter ${palette.textTitle} drop-shadow-sm`}>
                            {item.name}
                        </h2>
                        <p className="mt-3 text-lg text-gray-200 leading-relaxed font-light">
                            {item.description}
                        </p>
                        
                        <p className="mt-5 text-sm text-gray-400 flex items-center gap-3">
                            <span className="font-medium text-gray-100">Developed by <span className={`font-semibold ${palette.textTitle}`}>{item.details.developer}</span></span>
                            <span className={`${palette.textDot} font-black`}>&bull;</span>
                            <span className="font-medium text-gray-100">{item.details.releaseYear}</span>
                        </p>

                        {/* Tags yang Berwarna */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {item.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${palette.tag} drop-shadow-sm`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action (Link Berbentuk Tombol yang Hype) */}
                    <a 
                        href={item.details.officialWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={` inline-flex shrink-0 items-center justify-center px-6 py-3 border border-transparent shadow-lg text-base font-bold rounded-xl ${palette.button} transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${palette.focusRing}`}
                    >
                        Visit Website
                    </a>
                </div>
            </div>
        );
    })}
</div>
    )
}