import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { RowsIcon, HomeIcon, PlusIcon } from "@radix-ui/react-icons";


type TopBarProps = {}

export const TopBar = (props: TopBarProps) => {
	const {} = props;
	
	return (
		<div className="bg-secondary w-100 h-12">
			<NavigationMenu
				className="px-7 grid-cols-2 justify-between items-center h-11 grid-rows-1 flex flex-1 items-center m-auto max-w-[992px]">
				<NavigationMenuList className="gap-2">
					<NavigationMenuItem>
						<RowsIcon className="text-secondary-foreground cursor-pointer" width={18} height={18} />
					</NavigationMenuItem>
					<NavigationMenuItem>
						<HomeIcon className="text-secondary-foreground cursor-pointer" width={20} height={20} />
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList className="gap-2">
					<NavigationMenuItem>
						<PlusIcon className="text-secondary-foreground cursor-pointer" width={20} height={20} />
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Avatar className="cursor-pointer">
							<AvatarImage src="https://github.com/shadcn.png" className="h-8 w-8" />
							<AvatarFallback>User</AvatarFallback>
						</Avatar>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
