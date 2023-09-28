import { basedUrl } from "../Network/Network";

export const signupUrl =basedUrl + 'users/create-user'

export const isAdminUrl = (email) => basedUrl + `users/admin/${email}`

