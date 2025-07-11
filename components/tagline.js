import { FaMoneyCheckAlt, FaUsers, FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";

export default function Tagline() {
  return (
    <div className="bg-[#074B78] text-white py-9 flex justify-around items-center flex-wrap gap-4 px-10">
      {/* Fast Approvals */}
      <div className="flex items-center gap-2">
        <FaMoneyCheckAlt className="text-4xl" />
        <span className="text-2xl">Fast Approvals</span>
      </div>

      {/* 400000 Customers */}
      <div className="flex items-center gap-2">
        <FaUsers className="text-4xl" />
        <span className="text-2xl">400+ Customers</span>
      </div>

      {/* Flexible Payments */}
      <div className="flex items-center gap-2">
        <FaCreditCard className="text-4xl" />
        <span className="text-2xl">Flexible Payments</span>
      </div>

      {/* No Prepayment Fees */}
      <div className="flex items-center gap-2">
        <FaFileInvoiceDollar className="text-4xl" />
        <span className="text-2xl">No Prepayment Fees</span>
      </div>
    </div>
  );
}
