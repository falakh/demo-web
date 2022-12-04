export function TabNavigation(props: { tabList: string[]; onChange: (tab: string) => void; activeTab: string }) {
  return (
    <div className="flex w-full">
      {props.tabList.map((tab, index) => {
        return (
          <div
            onClick={() => props.onChange(tab)}
            key={tab}
            className={`border-white  border-t-2 px-4 py-2 flex-grow
              ${props.activeTab === tab ? "mt-0 bg-white rounded-t-lg " : "mt-3 text-white"}
              ${index === 0 ? "rounded-tl-lg border-l-2" : ""}
              ${index === props.tabList.length - 1 ? "rounded-tr-lg border-r-2" : ""}
              `}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}
