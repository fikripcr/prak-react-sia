import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Angka 404 dengan efek gradien */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          404
        </h1>
        
        {/* Judul Pesan */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Halaman tidak ditemukan
        </h2>
        
        {/* Deskripsi */}
        <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari. Halaman tersebut mungkin telah dipindahkan atau dihapus.
        </p>
        
        {/* Tombol Aksi */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link 
            to="/" 
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
          >
            Kembali ke Beranda
          </Link>
          <Link 
            to="/bantuan" 
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
          >
            Hubungi Bantuan <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}