"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard";
import productsData from "@/datas/product.json";
import { Check, X, Search, SlidersHorizontal } from "lucide-react";
import { useEffect } from "react";

export default function Collection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mobileSearchInput, setMobileSearchInput] = useState(query);

  useEffect(() => {
    setMobileSearchInput(query);
  }, [query]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const categories = ["All", "Jackets", "Coats", "Overshirts"];

  const handleCategoryToggle = (cat: string) => {
    if (cat === "All") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      if (query && !product.title.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      const price = product.price;
      if (minPrice && price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && price > parseInt(maxPrice)) {
        return false;
      }
      return true;
    });
  }, [query, selectedCategories, minPrice, maxPrice]);

  return (
    <section className="min-h-screen w-full bg-loren-white px-6 pb-24 pt-32 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1577px] flex-col gap-8 lg:flex-row lg:gap-16">

        {/* Mobile Filter Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isFilterOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
          onClick={() => setIsFilterOpen(false)}
        />

        <div className={`fixed inset-x-0 bottom-0 z-50 flex h-[85vh] w-full shrink-0 flex-col space-y-8 overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:static lg:h-auto lg:w-[280px] lg:translate-y-0 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none ${isFilterOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"}`}>
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="font-dmSerifDisplay text-2xl text-loren-black">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="hidden lg:block font-dmSerifDisplay text-2xl text-loren-black md:text-3xl">Category</h2>
            <div className="flex flex-col space-y-4">
              {categories.map((cat) => {
                const isSelected = cat === "All" ? selectedCategories.length === 0 : selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryToggle(cat)}
                    className="group flex items-center space-x-4 text-left"
                  >
                    <div className={`flex h-5 w-5 items-center justify-center border-2 transition-colors ${isSelected ? "border-rose-900" : "border-rose-900"}`}>
                      {isSelected && <Check className="h-4 w-4 text-rose-900" strokeWidth={3} />}
                    </div>
                    <span className="font-dmSerifDisplay text-lg text-rose-900 transition-opacity group-hover:opacity-75 md:text-xl">
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 h-px w-full bg-zinc-200" />
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="font-dmSerifDisplay text-2xl text-loren-black md:text-3xl">Price</h2>
            <div className="flex gap-4">
              <div className="flex w-full flex-col space-y-2">
                <span className="font-sans text-xs font-bold text-loren-black">From</span>
                <div className="flex items-center rounded border border-zinc-200 px-3 py-2">
                  <span className="mr-2 font-sans text-xs font-bold text-loren-black">Rp</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                    className="w-full bg-transparent font-sans text-xs outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col space-y-2">
                <span className="font-sans text-xs font-bold text-loren-black">To</span>
                <div className="flex items-center rounded border border-zinc-200 px-3 py-2">
                  <span className="mr-2 font-sans text-xs font-bold text-loren-black">Rp</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="50.000.000"
                    className="w-full bg-transparent font-sans text-xs outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-6">
          {/* Mobile Search and Filter Toggle */}
          <div className="flex w-full flex-col gap-3 lg:hidden">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (mobileSearchInput.trim()) {
                  router.push(`/collection?q=${encodeURIComponent(mobileSearchInput.trim())}`);
                } else {
                  router.push(`/collection`);
                }
              }}
              className="flex w-full items-center overflow-hidden rounded-full border border-zinc-200 bg-white px-5 py-3 transition-colors focus-within:border-loren-primary"
            >
              <Search className="mr-3 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={mobileSearchInput}
                onChange={(e) => setMobileSearchInput(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent font-sans text-base text-loren-black outline-none placeholder:text-zinc-400"
              />
            </form>

            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white py-3 font-sans text-sm font-medium text-loren-black shadow-sm transition-colors hover:bg-zinc-50"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters & Sorting
            </button>
          </div>

          {query && (
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-6 py-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col">
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Search Results
                </span>
                <h3 className="mt-1 font-dmSerifDisplay text-2xl text-loren-black md:text-3xl">
                  "{query}"
                </h3>
              </div>

              <button
                onClick={() => router.push("/collection")}
                className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 transition-all duration-300 hover:border-loren-primary hover:bg-loren-primary/5 hover:shadow-sm"
              >
                <span className="font-sans text-sm font-medium text-zinc-600 transition-colors duration-300 group-hover:text-loren-primary">
                  Clear Search
                </span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 transition-colors duration-300 group-hover:bg-loren-primary/20">
                  <X className="h-3 w-3 text-zinc-500 transition-colors duration-300 group-hover:text-loren-primary" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-center py-24 text-center">
              <p className="font-dmSerifDisplay text-2xl text-loren-black">No products found.</p>
              <p className="mt-2 font-sans text-zinc-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
