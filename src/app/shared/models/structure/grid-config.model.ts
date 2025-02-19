import { PageEvent } from '@angular/material/paginator';
import { PaginationResult } from '../../../core/api/structures/base-response.api.service';


export class GridConfig {
    public static defaultPaginationResult<T>(): PaginationResult<T> {
        return {} as PaginationResult<T>;
    }

    public static defaultPageEvent(): PageEvent {
        return {
            length: 10,
            pageIndex: 0,
            pageSize: 10,
        } as PageEvent;
    }

    public static defaultGrid<T>(): { PaginationResult: PaginationResult<T>, PageEvent: PageEvent } {
        return {
            PaginationResult: this.defaultPaginationResult<T>(),
            PageEvent: this.defaultPageEvent()
        };
    }
}
