import { Project } from "@/components/Project.tsx";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu.tsx";
import { useProjectContext } from "@/contexts/ProjectContext.tsx";
import { DefaultProjects } from "@/models/enums/DefaultProjects.ts";
import { Project as ProjectModel } from "@/models/Project.ts";
import { Fragment, useEffect } from "react";
import { BsCalendar2Date, BsCalendar3, BsInbox } from "react-icons/bs";

type SidebarProps = {}

export const Sidebar = (props: SidebarProps) => {
	const {} = props;
	const { projects, setProjects } = useProjectContext();
	
	useEffect(() => {
		setProjects([
			new ProjectModel(DefaultProjects.INBOX, "Inbox", [ 1, 2, 3 ], new Date(), new Date(), false, false),
			new ProjectModel(DefaultProjects.TODAY, "Today", [ 3, 3, 3, 3 ], new Date(), new Date(), false, false),
			new ProjectModel(DefaultProjects.UPCOMING, "Upcoming", [], new Date(), new Date(), false, false),
		]);
	}, [ setProjects ]);
	
	return (
		<div className="w-[264px] h-full">
			<NavigationMenu className="w-full">
				<NavigationMenuList className="flex flex-col w-full">
					{
						Object.entries(DefaultProjects).map(([ _, value ]) => {
							let icon = <Fragment />;
							if (value === DefaultProjects.INBOX) {
								icon = <BsInbox size={19} className="text-blue-600" />;
							} else if (value === DefaultProjects.TODAY) {
								icon = <BsCalendar2Date size={18} className="text-green-600" />;
							} else {
								icon = <BsCalendar3 size={18} className="text-violet-600" />;
							}
							return (
								<Project
									key={value}
									icon={icon}
									project={projects.find(project => project.id === value) || ProjectModel.EMPTY} />
							);
						})
					}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
