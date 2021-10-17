import { useEffect, useMemo, useState } from 'react'


export function usePagination<T>(list: T[], pageSize: number): [number, T[], (page: number) => void] {
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [page, setPage] = useState(1)
    const [pageList, setPageList] = useState([])

    useEffect(() => {
        let pages = Math.ceil(list.length / pageSize)
        setNumberOfPages(Math.round(pages))
    }, [list, pageSize])

    useMemo(()=> {
        let jump = (page-1) * pageSize
        let pageList = list.slice(jump, jump+pageSize)
        setPageList(pageList)
    },[page, list, pageSize])

    return [numberOfPages, pageList, setPage]
}