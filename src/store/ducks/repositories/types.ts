/* Action Types */
export enum RepositoriesTypes {
    LOAD_REQUEST = "@repositories/LOAD_REQUEST",
    LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
    LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

/* Data Types */
export interface Repository {
    id: number;
    name: string;
}

/* State Types */
export interface RepositoriesState {
    data: Repository[];
    loading: boolean;
    error: boolean;
}
