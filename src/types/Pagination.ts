export interface Pagination {
    count: number,
    per_page: number,
    current_page: number,
    next_page: string,
    has_more_pages: boolean,
    next_page_url: string | null,
    previous_page_url: string | null,
}