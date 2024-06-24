import SearchBar from "./SearchBar";
import PremiumButton from "./PremiumButton";
import TrendingTopic from "./TrendingTopic";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <SearchBar />
      <PremiumButton />
      <TrendingTopic />
    </div>
  );
}
