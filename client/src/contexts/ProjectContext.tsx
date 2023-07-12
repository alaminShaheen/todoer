import { DefaultProjects } from "@/models/enums/DefaultProjects.ts";
import { Project } from "@/models/Project.ts";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type ProjectContext = {
	projects: Project[];
	setProjects: Dispatch<SetStateAction<Project[]>>;
	selectedProjectId: string | DefaultProjects;
	setSelectedProjectId: Dispatch<SetStateAction<string | DefaultProjects>>;
}

type ProjectContextProviderProps = {
	children: ReactNode;
}

const defaultContext: ProjectContext = {
	projects: [],
	setProjects: () => null,
	selectedProjectId: DefaultProjects.INBOX,
	setSelectedProjectId: () => null,
};

const context = createContext<ProjectContext>(defaultContext);

export const useProjectContext = () => {
	return useContext<ProjectContext>(context);
};


export const ProjectContextProvider = (props: ProjectContextProviderProps) => {
	const [ projects, setProjects ] = useState<Project[]>(defaultContext.projects);
	const [ selectedProjectId, setSelectedProjectId ] = useState<string | DefaultProjects>(defaultContext.selectedProjectId);
	
	return <context.Provider value={{ projects, setProjects, setSelectedProjectId, selectedProjectId }}>
		{props.children}
	</context.Provider>;
};
