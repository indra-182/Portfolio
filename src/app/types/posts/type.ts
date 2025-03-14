export interface PostPageParams {
    params: {
        postId: string;
    };
    searchParams?: Record<string, string | string[] | undefined>;
}