import { unstable_cache } from "next/cache";
import { cache } from "react";

const getData = async (page: string) => {
  console.log(`
   === api call with page: ${page} ===
   `);
  const res = await fetch(`http://localhost:3000/${page}`, {
    cache: "no-store",
  });

  return res;
};

const getDataReactCache = cache(getData);

const getDataUnstableCache = unstable_cache(getData, ["my-tag"]);

const api = {
  call: (page: string) => getDataUnstableCache(page),
};

export default api;
