import { TierTable } from "../organism/price-table";

export function PriceTemplate() {
  return (
    <div style={{ height: 900 }} className="flex flex-col bg-kedaPurple py-10">
      <h1 className="text-center text-white">Bingung Pilih yang mana ?</h1>
      <br />
      <TierTable />
    </div>
  );
}
