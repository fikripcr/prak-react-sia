import PageHeader from "../components/PageHeader";

export default function FiturXyz() {

  // Data 10 Isu Terhot Indonesia (Mei 2026)
  const issuesData = [
    {
      id: 1,
      title: "Evaluasi & Standarisasi Program Makan Bergizi Gratis (MBG)",
      category: "Sosial / Kebijakan Publik",
      context: "Badan Gizi Nasional (BGN) memperketat evaluasi anggaran dan operasional SPPG. Ribuan unit sempat ditangguhkan demi menjaga standar kualitas dan gizi.",
      impact: "Sorotan terhadap pemotongan anggaran, kualitas gizi (pro-kontra susu formula), dan keberlanjutan program jangka panjang."
    },
    {
      id: 2,
      title: "Fluktuasi Nilai Tukar Rupiah & Stabilitas Keuangan",
      category: "Ekonomi / Moneter",
      context: "Nilai tukar Rupiah mengalami tekanan global. KSSK dan BI memperketat pembatasan threshold transaksi valas domestik untuk menjaga cadangan devisa.",
      impact: "Kekhawatiran pelaku usaha terhadap biaya impor, harga barang pokok, dan stabilitas daya beli masyarakat."
    },
    {
      id: 3,
      title: "Efisiensi BUMN & Pemangkasan Anak Usaha",
      category: "Ekonomi / Korporasi",
      context: "Badan Pengelola BUMN bersama superholding Danantara melakukan restrukturisasi besar-besaran, termasuk memangkas puluhan anak usaha Telkom dan audit PLN.",
      impact: "Dampak reorganisasi terhadap efisiensi anggaran negara, nasib karyawan, serta efektivitas pelayanan publik."
    },
    {
      id: 4,
      title: "Ketimpangan Capaian Penurunan Stunting",
      category: "Kesehatan",
      context: "Data terbaru menunjukkan penurunan stunting nasional, namun distribusi pincang (NTT masih ~37%, sementara Bali berhasil menekan di bawah 10%).",
      impact: "Menjadi alarm bagi pemerataan fasilitas kesehatan dasar dan distribusi logistik gizi di daerah pelosok."
    },
    {
      id: 5,
      title: "Kasus Korupsi Komoditas / CPO (Minyak Goreng)",
      category: "Hukum / Korupsi",
      context: "Kejaksaan Agung menetapkan tersangka baru, termasuk eks anggota lembaga negara (Ombudsman), terkait aliran dana korupsi tata kelola CPO.",
      impact: "Menurunnya kepercayaan publik terhadap integritas pengawas pelayanan publik serta tuntutan transparansi komoditas strategis."
    },
    {
      id: 6,
      title: "Isu Krisis Listrik Lapisan Regional (Blackout Sumatera)",
      category: "Infrastruktur / Energi",
      context: "Gangguan transmisi masif menyebabkan pemadaman total di wilayah Sumatera, memicu Danantara melakukan audit besar-besaran terhadap infrastruktur PLN.",
      impact: "Kerugian ekonomi sektor UMKM dan industri, serta tuntutan modernisasi sistem kelistrikan nasional yang lebih resilient."
    },
    {
      id: 7,
      title: "Mekanisme Baru Impor Minyak Pertamina & BLU",
      category: "Energi / Kebijakan",
      context: "Pemerintah merancang regulasi baru terkait tata cara impor minyak bagi Pertamina dan Badan Layanan Umum guna meningkatkan efisiensi fiskal.",
      impact: "Fluktuasi harga BBM domestik dan dampaknya pada beban APBN untuk subsidi energi."
    },
    {
      id: 8,
      title: "Persiapan Logistik Mudik & Puncak Haji 2026",
      category: "Keagamaan / Transportasi",
      context: "Jutaan jemaah Indonesia mulai bergeser ke Arafah. Di dalam negeri, aktivitas menjelang Idul Adha memicu pergerakan logistik hewan ternak antar pulau.",
      impact: "Fokus pada keselamatan jemaah lansia (layanan safari wukuf) serta kesiapan transportasi domestik menghadapi libur panjang."
    },
    {
      id: 9,
      title: "Wajib Sertifikasi Halal Industri Kuliner (Tenggat Oktober 2026)",
      category: "Ekonomi Kreatif / Regulasi",
      context: "Sosialisasi masif terus dikejar mengingat batas akhir seluruh industri makanan dan minuman wajib bersertifikat halal jatuh pada Oktober tahun ini.",
      impact: "Keluhan pelaku usaha mikro terkait kerumitan birokrasi, meski pemerintah terus menjanjikan fasilitasi gratis."
    },
    {
      id: 10,
      title: "Moratorium Perluasan Lahan Sawah Dilindungi (LSD)",
      category: "Agraria / Pangan",
      context: "Masalah pemetaan lahan yang tumpang tindih membuat DPR mengusulkan jeda aturan guna mengevaluasi tata ruang agraria dan ketahanan pangan.",
      impact: "Hambatan investasi properti dan industri di daerah, serta konflik pemanfaatan ruang hijau vs pembangunan fisik."
    }
  ];

  // Helper untuk warna badge kategori
  const getCategoryColor = (category) => {
    if (category.includes("Ekonomi")) return "bg-blue-50 text-blue-700 border-blue-200";
    if (category.includes("Sosial")) return "bg-purple-50 text-purple-700 border-purple-200";
    if (category.includes("Hukum")) return "bg-red-50 text-red-700 border-red-200";
    if (category.includes("Kesehatan")) return "bg-green-50 text-green-700 border-green-200";
    if (category.includes("Energi") || category.includes("Infrastruktur")) return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-slate-50 text-slate-700 border-slate-200";
  }
    return (
        <div>
            <PageHeader/>
            <h1>Ini halaman FiturXyz</h1>
            <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                        10 Isu Terhot di Indonesia (Mei 2026)
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                        Daftar tren pemberitaan nasional, dinamika kebijakan publik, dan sorotan sosial-ekonomi terkini.
                  </p>
            </div>

            {/* Kontainer untuk Responsive Scroll */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                  <table className="w-full text-left border-collapse bg-white text-sm text-slate-600">
                        <thead className="bg-slate-50 font-semibold text-slate-700 uppercase tracking-wider text-xs border-b border-slate-200">
                              <tr>
                              <th scope="col" className="px-4 py-3.5 text-center w-12">No</th>
                              <th scope="col" className="px-6 py-3.5 w-64">Nama Isu / Topik</th>
                              <th scope="col" className="px-4 py-3.5 w-44">Kategori</th>
                              <th scope="col" className="px-6 py-3.5 min-w-[320px]">Ringkasan Konteks & Dinamika Terkini</th>
                              <th scope="col" className="px-6 py-3.5 min-w-[280px]">Dampak / Fokus Utama Masyarakat</th>
                              </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                              {issuesData.map((issue, index) => (
                              <tr key={issue.id} className="hover:bg-slate-50/70 transition-colors">
                              <td className="px-4 py-4 text-center font-medium text-slate-400">
                                    {index + 1}
                              </td>
                              <td className="px-6 py-4 font-semibold text-slate-900 align-top">
                                    {issue.title}
                              </td>
                              <td className="px-4 py-4 align-top">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(issue.category)}`}>
                                    {issue.category}
                                    </span>
                              </td>
                              <td className="px-6 py-4 text-slate-600 leading-relaxed align-top">
                                    {issue.context}
                              </td>
                              <td className="px-6 py-4 text-slate-600 leading-relaxed align-top">
                                    <span className="font-medium text-slate-700 block md:inline">Sorotan: </span>
                                    {issue.impact}
                              </td>
                              </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
         
        </div>
    );
}