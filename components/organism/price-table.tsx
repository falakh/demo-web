import { useState } from "react";
import { PricingCard } from "./pricing-card";
import { TabNavigation } from "./tab-navigation";
import { tierDatas } from "../../constant/tierDatas";

export function TierTable() {
  const [activeTab, setActiveTab] = useState(tierDatas[0].name);
  const activeTier = tierDatas.find((value) => value.name === activeTab);
  return (
    <>
      <div className="mx-auto md:flex flex-row space-x-6 py-20 hidden md:visible">
        {tierDatas.map((tierData) => (
          <PricingCard rounded benefit={tierData.benefit} name={tierData.name} price={tierData.price} />
        ))}
      </div>
      <div className="md:hidden visible flex flex-col px-8">
        <TabNavigation tabList={tierDatas.map((value) => value.name)} onChange={setActiveTab} activeTab={activeTab} />
        {activeTier && <PricingCard benefit={activeTier.benefit} name={activeTier.name} price={activeTier.price} />}
      </div>
    </>
  );
}
