import {
  Ellipsis,
  Wifi,
  WifiOff,
  ChevronsLeftRightEllipsis,
  Dot,
  MapPin,
} from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  publicIP: string;
  countryCode: string;
  city: string;
  isConnected: boolean;
  id: string;
};

export default function DeviceMetadata({
  name,
  publicIP,
  countryCode,
  city,
  isConnected,
  id,
}: Props) {
  return (
    <div className="w-[90%] bg-gray-400 m-3 rounded p-2 flex flex-row justify-between">
      <div>
        <div className="flex flex-row items-center justify-start">
          <p className="text-l font-semibold">{name}</p>
          <Dot color={!isConnected ? "red" : "green"} size={50} />
        </div>
        <div className="flex flex-row items-center justify-start">
          <MapPin size={15} />
          <p className="text-sm mb-0">
            <strong>IP:</strong>
            <span>
              {" "}
              {publicIP} - {city}, {countryCode}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end h-full gap-5">
        <Link
          href={`/devices/${id}`}
          className="bg-black rounded-lg p-1.5 self-end"
        >
          <Ellipsis color="white" />
        </Link>
        <div className="flex flex-row justify-between gap-2">
          {isConnected ? <Wifi /> : <WifiOff />}
          <ChevronsLeftRightEllipsis />
        </div>
      </div>
    </div>
  );
}
