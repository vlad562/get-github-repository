import { useSearchRepositoryQuery } from "@/entities/git-table/api/searchRepository"
import { useAppSelector } from "./redux"


/**
 * Пользовательский хук для поиска репозиториев через GitHub API.
 *
 * - Получает из Redux состояния `queryInput`, `page` и `perPage` (параметры поиска).
 * - Выполняет запрос `useSearchRepositoryQuery` (RTK Query) для поиска репозиториев.
 * - Пропускает запрос (`skip: true`), если `queryInput` пустая строка.
 *
 * @returns Объект с данными поиска:
 * - `data` — результат запроса (по умолчанию `{ items: [], total_count: 0 }`).
 * - `isFetching` — флаг, что запрос выполняется.
 * - `isError` — флаг, что произошла ошибка.
 * - `error` — объект ошибки от RTK Query.
 * - `queryInput`, `page`, `perPage` — параметры поиска из состояния.`
 */
export function useSearchRepositories() {
	const { queryInput, page, perPage } = useAppSelector(store => store.searchUI)

	const {
		data = { items: [], total_count: 0 },
		isFetching,
		isError,
		error,
	} = useSearchRepositoryQuery(
		{ q: queryInput, page, perPage },
		{ skip: !queryInput.trim() }
	)

	return { data, isFetching, isError, error, queryInput, page, perPage }
}
