import { useState } from "react";

import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState("");


  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toLowerCase();

  

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    const matchesDeveloper = selectedDeveloper
      ? framework.details.developer === selectedDeveloper
      : true;
    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
//   const allDevelopers = [
//     ...new Set(frameworkData.map((f) => f.details.developer)),
//   ].sort();

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-slate-50 rounded-3xl font-sans">
      <div className="flex flex-col gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-4 border-2 border-slate-200 rounded-xl bg-white focus:border-violet-400 focus:ring-4 focus:ring-violet-100 focus:outline-none transition-all"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-4 border-2 border-slate-200 rounded-xl bg-white focus:border-violet-400 focus:ring-4 focus:ring-violet-100 focus:outline-none transition-all cursor-pointer"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {/* <select
          className="p-3"
          onChange={(e) => setSelectedDeveloper(e.target.value)}
        >
          <option value="">Semua Developer (Dev)</option>
          {allDevelopers.map((dev, index) => (
            <option key={index} value={dev}>
              {" "}
              {dev}
            </option>
          ))}
          /
        </select> */}
      </div>

      <div className="space-y-5">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col sm:flex-row gap-6 justify-between items-start"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800">{item.name}</h2>
              <p className="mt-2 text-slate-600">{item.description}</p>

              <p className="mt-4 text-sm text-slate-500">
                Developed by{" "}
                <span className="font-bold text-slate-700">
                  {item.details.developer}
                </span>{" "}
                &bull; {item.details.releaseYear}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol yang simpel tapi tetap 'fun' */}
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center shrink-0 px-6 py-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white font-bold rounded-xl transition-colors"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
