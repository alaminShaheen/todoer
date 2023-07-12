import { NavigationMenuItem } from "@/components/ui/navigation-menu.tsx";
import { useProjectContext } from "@/contexts/ProjectContext.tsx";
import { Project as ProjectModel } from "@/models/Project.ts";
import { clsx } from "clsx";
import { ReactNode } from "react";

type ProjectProps = {
	project: ProjectModel,
	icon: ReactNode
}

export const Project = (props: ProjectProps) => {
	const { project, icon } = props;
	const { name, id, todos } = project;
	const { selectedProjectId, setSelectedProjectId } = useProjectContext();
	
	const selectProject = () => {
		setSelectedProjectId(id);
	};
	
	return (
		<NavigationMenuItem className={clsx(
			"flex justify-between w-full items-center text-sm cursor-pointer p-3 rounded hover:bg-muted",
			selectedProjectId === id && "bg-muted",
		)} onClick={selectProject}>
			<div className="flex items-center gap-2">
				{icon}
				<span>{name}</span>
			</div>
			{
				todos.length > 0 &&
				<div className={clsx(
					selectedProjectId === id ? "text-secondary" : "text-slate-400",
				)}>
					{todos.length}
				</div>
			}
		</NavigationMenuItem>
	);
};
