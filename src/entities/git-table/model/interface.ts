// типизация поля items в SearchReposResponse
export interface GitHubRepo {
	id: number
	name: string
	full_name: string
	html_url: string
	description: string | null
	stargazers_count: number
	language: string | null
	fork: boolean
	forks: number | null
	updated_at: string
	topics: string[]
	license: ILicense
}
// типизация поля license в GitHubRepo
interface ILicense {
	spdx_id: "GPL-3.0" | null
}
// типизация ответа от сервер
export interface SearchReposResponse {
	total_count: number
	incomplete_results: boolean
	items: GitHubRepo[]
}
