export interface ListCategory {

    name: string;
    subcategories: ListSubCategory[];
}

export interface ListSubCategory {
    name: string;
    lists: List[];
}

export interface List {
    name: string;
    mandatory: boolean;
    private: boolean;
}

export interface VigilanceLists {
    vigLists: ListCategory[];
}
