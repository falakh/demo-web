import { PhoneIcon } from "../atoms/phone-icon";
import { PinIcon } from "../atoms/pin-icon";

export function ContactTemplate() {
  return (
    <div className="px-8 space-y-4 py-10 bg-kedaBlue">
      <h1>Contact Us</h1>
      <div className="flex flex-row items-center">
        <PinIcon />
        <p>Komplek Green Ville, Jalan Ratu Kemuning Blok BL No. 1, RT.8/RW.14 Daerah Khusus Ibukota Jakarta</p>
      </div>
      <div className="flex flex-row items-center">
        <PhoneIcon />
        <p>(62) 8966-2230</p>
      </div>
    </div>
  );
}
