import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
  return (
    <div>
      <PageHeader />

      <div className="container mx-auto py-8 px-4">
        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Loyalti
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Usia
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Alamat
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {customersData.map((customer, index) => (
                <tr key={customer.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/customers/${customer.id}`}
                      className="text-emerald-400 hover:text-emerald-500"
                    >
                      {customer.nama}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 italic">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {customer.loyalti}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {customer.usia}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-mono text-gray-900">
                    Rp {customer.alamat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-500 text-sm italic">
          * Menampilkan 3 dari 30 data produk.
        </p>
      </div>
    </div>
  );
}
