export interface SearchBarProps {
    value?: string | number | undefined
    onSearchResult: (value) => {} | Function
}