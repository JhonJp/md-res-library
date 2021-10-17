// Input Interface
export interface INT_InlineTextField {
    error?: boolean,
    errorText?: string,
    id?: string,
    defaultValue?: string,
    label: string,
    dense?: boolean,
    labelled?: boolean,
    password?: boolean
}

export interface INT_AutoCompField {
    error?: boolean,
    errorText?: string,
    id?: string,
    defaultValue?: string,
    label: string,
    dense?: boolean,
    labelled?: boolean,
    options: Options[]
}

export interface Options {
    id: string,
    label: string
}

export interface SVG {
    dimension?: number,
    fill?: string
}

// Button Interface
export interface Btns {
    styles?: any
    label: string
    onClick: any
}

export interface DrawerHeaderProps {
    useImg?: boolean
    useName?: boolean
    name: string
    imgSrc: string
}

export interface DrawerItemsProps {
    label: string
    icon: any
    link: string
}

//Sidebar interface
export interface PropsAppWrapper {
    currentPage: string
    breadcrumbs: Items[]
    drawerHeader: DrawerHeaderProps
    drawerItems: DrawerItemsProps[]
    footerLink: ItemAction[]
    window?: () => Window
}

export interface Items {
    id: string
    label: string
    link: string
}

export interface ItemAction {
    id: string
    label: string
    action: any
}

//Props Breadcrumb
export interface PropsBreadcrumb {
    list: Items[]
}