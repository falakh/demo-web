import { tierDatas } from "../../constant/tierDatas";

export function About() {
  return (
    <>
      <footer className=" text-3xl space-y-4 p-8">
        <h1 className="">About</h1>
        <p>
          ERP untuk memudahkan seorang pengusaha dalam mencatat setiap barang yang keluar masuk dan mencatat setiap
          keuntungan yang mereka dapatkan setiap harinya. ERP bertujuan untuk mempermudahpekerjaan yang dilakukan
          pengguna
        </p>
        <p>ERP memiliki tier yang bermacam macam tergantung pada kebutuhan pelanggan. Antara lain : </p>
        <ul className="space-y-5 list-disc px-8">
          {tierDatas[2].benefit.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>

        <div />
      </footer>
    </>
  );
}
