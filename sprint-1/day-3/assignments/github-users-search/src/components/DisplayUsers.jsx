


export const DisplayUsers= ({val})=>{
    let {avatar_url, login, type}= val
    return (
        <div className="displayUsers">
            <div className="userImg">
                <img src={avatar_url} alt="userImg" />
            </div>
            <div className="userInfo">
                <h4>{login}</h4>
            </div>
        </div>
    )
}