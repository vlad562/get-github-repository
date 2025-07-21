import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/**
 * Базовый API-клиент для приложения, созданный с помощью RTK Query.
 *
 * - **reducerPath:** `"api"` — ключ, под которым API будет зарегистрирован в store.
 * - **baseUrl:** `"https://api.github.com/"` — базовый URL для всех запросов.
 * - **endpoints:** пока пустой объект, endpoints будут добавляться через `baseApi.injectEndpoints`.
 */

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/",
	}),
	endpoints: () => ({}),
})
