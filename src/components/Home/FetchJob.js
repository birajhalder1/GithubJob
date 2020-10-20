import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTION = {
    MAKE_REQUEST: 'make-request',
    GET_REQUEST: 'get-data',
    ERROR: 'error'
}
//https://api.allorigins.win/raw?url= for to many request
//https://cors-anywhere.herokuapp.com for cors policy block
const BASE_URL = 'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json'

function reducer(state, action) {
    switch (action.type) {
        case ACTION.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTION.GET_REQUEST:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTION.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }
}

export default function FetchJob(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })


    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTION.MAKE_REQUEST })
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            console.log(res)
            dispatch({ type: ACTION.GET_REQUEST, payload: { jobs: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTION.ERROR, payload: { error: e } })
        })

        return () => {
            cancelToken.cencel()
        }
    }, [params, page])
    return state
}
