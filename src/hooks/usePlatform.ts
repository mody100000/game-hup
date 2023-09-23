import platforms from "../data/platforms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platforms, error: null });

export default usePlatform;
