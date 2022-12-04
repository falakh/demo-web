export interface IProps {
  name: string;
  benefit: string[];
  price: number;
  rounded?: boolean;
}
export function PricingCard(props: IProps) {
  return (
    <div
      className={`bg-white ${
        props.rounded ? "rounded-xl" : ""
      } px-10 py-7 md:w-80  space-y-7 hover:drop-shadow-2xl hover:bg-kedaBlue justify-between min-h-600px`}
    >
      <h1 className="text-2xl text-center">{props.name}</h1>
      <h1>Rp {props.price.toLocaleString("ID")}</h1>
      <p className="text-lg font-semibold">Benefit</p>
      <ul className="space-y-5 list-disc">
        {props.benefit.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
