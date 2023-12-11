const Tweet = (props) => {
    return (
        <div class="card m-3 w-50">
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">@{props.username}</h6>
                <p class="card-text">{props.message}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">{props.date}</h6>
            </div>
        </div>
    );
}