import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productData from "../data/products.json";

export default function Products() {
  return (
    <div>
      <PageHeader />

      <div class="container mx-auto py-8 px-4">
        <div class="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-100 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Product Title
                </th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Code
                </th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Brand
                </th>
                <th class="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th class="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Stock
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                {productData.map((product, index) => (
                    <tr class="hover:bg-blue-50 transition-colors">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                           <Link to={`/products/${product.id}`} className="text-emerald-400 hover:text-emerald-500">
                                {product.title}
                            </Link>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 italic">
                        {product.code}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {product.category}
                        </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {product.brand}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-right font-mono text-gray-900">
                        Rp {product.price}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm">
                        <span class="font-bold text-green-600">25</span>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-gray-500 text-sm italic">
          * Menampilkan 3 dari 30 data produk.
        </p>
      </div>
    </div>
  );
}
