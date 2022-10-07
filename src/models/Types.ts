export interface IFavorite {
    id: number,
    value: string,
    data?: {}
}

export interface IFavoriteSaga {
    type: string,
    payload: IFavorite
}

export interface IFavoriteSagaArg {
    type: string,
    payload: IFavorite
}

export interface Test {
    name: string,
    hours: null | number
}

export interface TestSagaArg {
    type: string,
    payload: Test
}

export interface Action {
    type: string,
    payload: Test,
}

export interface UserState {
    favoriteJokes: IFavorite[],
    isLoading: boolean,
    error: string,
    joke: string,
    everyThreeSeconds: boolean,
    test: Test
}

export interface getJokeAction {
    joke: string | undefined,
    error?: string,
    isLoading: boolean
}