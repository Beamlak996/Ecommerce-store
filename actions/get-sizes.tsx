import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(url, {
        cache: "no-cache"
    })
    return res.json()
}

export default getSizes