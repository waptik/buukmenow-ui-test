import CustomerSearch from "@/components/customer-search";
import { Menu } from "@/components/navbar/menu";
import NavTabs from "@/components/navtabs";
import CustomersTable from "@/components/table";

export default function Page() {
  return (
    <>
      <Menu />
      <div className="flex items-center">
        <main className="flex flex-col bg-gray-100 w-full h-auto p-6">
          <div className="flex w-[939px] gap-[747px] relative my-8 left-[251px]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="w-[110px] -mt-px font-medium text-selected text-xl tracking-[-0.40px] relative">
                Customers
              </div>
              <p className="w-fit font-normal text-secondary text-sm tracking-[-0.28px] whitespace-nowrap relative">
                See all your customers in one place
              </p>
            </div>
          </div>
          <NavTabs />
          <CustomerSearch />
          <CustomersTable />
        </main>
      </div>
    </>
  );
}
