import { basedUrl } from "../Network/Network";

export const createBookUrl = basedUrl + 'books/create-book'

export const getBooksUrl = basedUrl + 'books/get-all-book'

export const getSingelUrl = (id) => basedUrl + `books/get-singel-book/${id}`

export const updateBooksUrl = (id) => basedUrl + `books/update-book/${id}`

export const deleteBookUrl = (id) => basedUrl + `books/delete/${id}`
// localhost:8000/api/v1/books/update/65159c967b92511555c707f0

// ======== copoun 

export const createCouponUrl = basedUrl + 'books/create-coupon'

export const getAllCouponUrl = basedUrl + 'books/get-all-coupon'

export const getSingelCouponUrl = (id) => basedUrl + `books/get-singel-coupon/${id}`

export const updateCouponUrl = (id) => basedUrl + `books/update-coupon/${id}`

export const deleteCouponUrl = (id) => basedUrl + `books/delete-coupon/${id}`

// ======= category

export const createCategoryUrl = basedUrl + 'books/create-category'

export const getAllCategoryUrl = basedUrl + 'books/get-all-category'

export const getAllCategoryPaginationUrl = (page, pageSize) => basedUrl + `books/get-all-category?page=${page}&pageSize=${pageSize}`

export const getSingelCategoryUrl = (id) => basedUrl + `books/get-singel-category/${id}`

export const updateCategoryUrl = (id) => basedUrl + `books/update-category/${id}`

export const deleteCategoryUrl = (id) => basedUrl + `books/delete-category/${id}`

// ======== lavel 

export const createLevelUrl = basedUrl + 'books/create-level'

export const getAllLevelUrl = basedUrl + 'books/get-all-level'

export const getSingelLevelUrl = (id) => basedUrl + `books/get-singel-level/${id}`

export const updateLevelUrl = (id) => basedUrl + `books/update-level/${id}`

export const deleteLevelUrl = (id) => basedUrl + `books/delete-level/${id}`


