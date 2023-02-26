type Count = { count: number };
type BadRequest = { code: "bad_request"; message: string };

type CountResponse =
| (Omit<Response, "json"> & {
    status: 200;
    json: () => Count | PromiseLike<Count>;
})
| (Omit<Response, "json"> & {
    status: 400;
    json: () => BadRequest | PromiseLike<BadRequest>;
});

const responseHandler = (response: Response) => {
    const res = response as CountResponse;
    if (res.status === 200) return res.json();
    if (res.status === 400) return res.json();
    return Error("Unhandled response code");
};

export function getCount(): Promise<number> {
    if(import.meta.env.VITE_STUB_API == 1) {
        return Promise.resolve(100000);
    }
    return fetch("/count", {})
        .then((res) => responseHandler(res))
        .then((json) => (json as Count).count);
}