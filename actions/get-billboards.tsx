import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${url}/${id}`, {
        cache: "no-cache"
    })
    return res.json()
}

export default getBillboard