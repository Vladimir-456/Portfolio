import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  homepage?: string;
}

interface GitHubReposResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepo[];
}

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    tagTypes: ['Portfolio'],
    endpoints: (builder) => ({
        getUserRepos: builder.query<GitHubRepo[], string>({
            query: (username) => `users/${username}/repos`,
            providesTags: ['Portfolio'],
        }),
        searchRepo: builder.query<GitHubReposResponse, string>({
            query: (search) => `search/repositories?q=${search}`,
        })
    }),
})

export const { useGetUserReposQuery, useSearchRepoQuery } = githubApi

