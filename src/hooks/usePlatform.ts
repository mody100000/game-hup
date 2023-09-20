import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatform;
