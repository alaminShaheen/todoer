import { NavigationMenuItem } from "@/components/ui/navigation-menu.tsx";
import { clsx } from "clsx";
import { ReactNode } from "react";

type ProjectProps = {
	name: string,
	todoCount: number
	icon: ReactNode
}

export const Project = (props: ProjectProps) => {
	const { name, icon, todoCount} = props;
	return (
		<NavigationMenuItem className="flex justify-between w-full items-center text-sm">
			<div className="flex items-center gap-2">
				{icon}
				<span>{name}</span>
			</div>
			<div className={clsx(todoCount > 0 && "text-secondary")}>{todoCount}</div>
		</NavigationMenuItem>
	);
};
