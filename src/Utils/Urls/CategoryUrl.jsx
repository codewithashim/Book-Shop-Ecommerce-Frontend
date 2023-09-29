import { basedUrl } from "../Network/Network";

export const getPopularCategoryUrl = basedUrl + 'category/get-all'

export const addPopularCategoryUrl = basedUrl + 'category/create'

export const deletePopularCategoryUrl = (id) => basedUrl + `category/delete/${id}`

export const updatePopularCategoryUrl = (id) => basedUrl + `category/update/${id}`
