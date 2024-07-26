import "./style/search_user.sass"

import api from "../../../config/api"
import { SearchInput } from "../ui/input/SearchInput"
import { useRef } from "react"


export function SearchUser() {
    let searchRef = useRef("")

    const search = async (event) => {
        event.preventDefault()

        await api.post("/", {"user_id": searchRef.current.value}).
            then(( response )=>{
                console.log(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
            searchRef.current.value = ""
        }

    return(
        <section className="search-user">
            <h2 className="hidden__title">Поиск пользователей</h2>
            <form className="search-user-form" action="/" method="POST">
                <SearchInput innerRef={ searchRef }/>
                <button className="search-btn" onClick={(event) => search(event)}>
                    <img className="" src="/public/icon/search.svg" alt="Поиск" />
                </button>
            </form>
        </section>
    )
}
