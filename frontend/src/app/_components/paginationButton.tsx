"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from "react"

export default function PaginationButton (){
    const router = useRouter();
    const [page, setPage] = useState<number>(0)

    const next = () => {
        const newPage = page + 2;
        setPage(newPage);

        const params = new URLSearchParams();
        params.append('page', newPage.toString());

        router.push(`?${params.toString()}`, { scroll: false });
    }

    const prev = () => {
        if (page === 0) {
            return
        }
        const newPage = page - 2;
        setPage(newPage);

        const params = new URLSearchParams();
        params.append('page', newPage.toString());

        router.push(`?${params.toString()}`, { scroll: false });
    }

    return (
        <div>
            <button onClick={prev}>prev -2</button>
            <button onClick={next}>next +2</button>
        </div>
    )
}