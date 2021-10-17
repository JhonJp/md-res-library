export const createObjectFilter = (id: string, label: string, selected: boolean, subVertical?: any) => {
    let initial = {
        id: id,
        label: label,
        subVertical: subVertical
    }
    initial[id] = selected
    return initial
}