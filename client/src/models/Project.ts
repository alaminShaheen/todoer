import { DefaultProjects } from "@/models/enums/DefaultProjects.ts";

export class Project {
	constructor (
		public id: string | DefaultProjects,
		public name: string,
		public todos: number[],
		public createdAt: Date,
		public updatedAt: Date,
		public archived: boolean,
		public favourite: boolean,
	) {
	}
	
	static EMPTY = new Project("", "", [], new Date(), new Date(), false, false);
	
	archiveProject () {
		this.archived = true;
	}
	
	favouriteProject () {
		this.favourite = true;
	}
}
