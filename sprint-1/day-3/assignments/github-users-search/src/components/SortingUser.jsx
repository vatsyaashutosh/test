
export const SortingUser= ({setOrder})=>{
    return (
        <div>
            <select name="sorting" id="" onChange={(e) =>setOrder(e.target.value)}>
                <option value="desc">sort by updated</option>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </div>
    )
}