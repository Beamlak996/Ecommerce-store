import { Product } from "@/types";
import qs from "query-string";

type Query = {
    categoryId?: string
    sizeId?: string
    colorId?: string
    isFeatured?: boolean
}

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
    const baseUrl = qs.stringifyUrl({
        url: url,
        query: {
            categoryId: query.categoryId,
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    })
    const res = await fetch(baseUrl, {
        cache: "no-cache"
    })
    return res.json()
}

export default getProducts