export interface ApiResponse<T> {
    success: boolean;
    data: T[];
    token?: any;
    message?: [string];
    statusCode?: number;
}

export interface ApiGetByIdResponse<T> {
    success: boolean;
    data: T;
    token?: any;
    message?: [string];
    statusCode?: number;
}

export interface ApiResponseDialog {
    success: boolean;
    message?: [string];
    statusCode?: number;
}

export interface DTO<TResponseDto> {
    success: boolean,
    httpCode: number,
    error: error,
    content: TResponseDto
}

export interface error {
    messages: string[],
    details: object
}

export interface PaginationResult<T> {
    items: T[];
    pageNumber: number;
    pageSize: number;
    firstPage: number;
    lastPage: number;
    totalPages: number;
    totalElements: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

export interface PaginatedResultSlim<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  items: T[];
}
  
export interface BasicResponse {

}