import { Project } from "@/components/Project.tsx";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu.tsx";
import { CalendarIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

type SidebarProps = {}

export const Sidebar = (props: SidebarProps) => {
	const {} = props;
	return (
		<div className="w-[264px] border-r h-full p-4">
			<NavigationMenu className="w-full">
				<NavigationMenuList className="gap-6 flex flex-col w-full">
					<Project todoCount={1} key="inbox"
							 icon={<EnvelopeClosedIcon className="cursor-pointer" width={18} height={18} />}
							 name="Inbox" />
					<Project todoCount={0} key="today"
							 icon={<CalendarIcon className="cursor-pointer" width={18} height={18} />}
							 name="Today" />
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
