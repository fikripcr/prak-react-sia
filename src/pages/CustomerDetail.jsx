import { Link, useParams } from "react-router-dom";
import customerData from "../data/customers.json";

const CustomerDetail = () => {
  const { id } = useParams();

  // Mencari data customer berdasarkan ID dari URL
  const customer = customerData.find((item) => item.id === Number(id));

  const loyaltyStyles = {
    Platinum: "bg-green-100 text-green-700 border-green-200",
    Gold: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Silver: "bg-slate-100 text-slate-700 border-slate-200",
    Bronze: "bg-orange-100 text-orange-700 border-orange-200",
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-10">
      <div className="h-24 bg-gradient-to-r from-indigo-500 to-green-600"></div>

      <div className="px-6 pb-8">
        <div className="relative -mt-12 mb-4">
          <div className="w-24 h-24 bg-white p-1 rounded-full shadow-lg mx-auto">
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-600 uppercase">
              {/* Gunakan charAt(0) supaya hanya muncul inisial saja */}
              {customer.nama.charAt(0)}
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{customer.nama}</h2>
          <p className="text-gray-500 text-sm">
            Customer ID: #{customer.id.toString().padStart(3, "0")}
          </p>
          <div className="mt-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border ${loyaltyStyles[customer.loyalti]}`}
            >
              {customer.loyalti} Member
            </span>
          </div>
        </div>

        <hr className="border-gray-100 mb-6" />

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">
                Email
              </p>
              <p className="text-gray-700 font-medium">{customer.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">
                Alamat
              </p>
              <p className="text-gray-700 font-medium leading-relaxed">
                {customer.alamat}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">
                Usia
              </p>
              <p className="text-gray-700 font-medium">{customer.usia} Tahun</p>
            </div>
          </div>
        </div>

        <Link to={`/customers`}>
          <button className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95">
            Kembali
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerDetail;
