import CustomerSearch from "@/components/customer-search";
import { Menu } from "@/components/navbar/menu";
import NavTabs from "@/components/navtabs";
import Pagination from "@/components/pagination";
import { TableHead } from "@/components/table/thead";

export default function Page() {
  return (
    <>
      <Menu className="absolute -left-px -top-px" />
      <div className="flex w-[939px] items-end gap-[747px] absolute top-32 left-[251px]">
        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <div className="w-[110px] -mt-px [font-family:'Matter-Medium',_Helvetica] font-medium text-selected text-xl tracking-[-0.40px] relative">
            Customers
          </div>
          <p className="w-fit [font-family:'Matter-Regular',_Helvetica] font-normal text-secondary text-sm tracking-[-0.28px] whitespace-nowrap relative">
            See all your customers in one place
          </p>
        </div>
      </div>
      <NavTabs />
      <div className="inline-flex flex-col items-end absolute top-[328px] left-[250px]">
        <TableHead className="self-stretch w-full flex-[0_0_auto]" />
        <div
          className="
        flex-[0_0_auto]
        "
        >
          Hello
          <div>
            {/* <IconlyLightArrowLeft1 /> */}
          </div>
        </div>
      </div>
      <CustomerSearch />
      <Pagination />
    </>
  );
}
