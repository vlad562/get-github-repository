import { baseApi } from "@/share/api/baseApi"
import type { SearchReposResponse } from "../model/interface"

// типизация параметров запроса
interface SearchReposArgs { 
	q: string 
	page?: number 
	perPage?: number 
}

export const movieApi = baseApi.injectEndpoints({
	endpoints: build => ({
		searchRepository: build.query<SearchReposResponse, SearchReposArgs>({
			query: ({ q, page = 1, perPage = 10 }) => ({
				url: "search/repositories",
				params: { q, page, per_page: perPage },
			}),
		}),
	}),
})

export const { useSearchRepositoryQuery, useLazySearchRepositoryQuery } =
	movieApi // хуки для получения данных
