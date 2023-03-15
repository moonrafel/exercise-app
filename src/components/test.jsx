<div>
    <label htmlFor="email">Email</label>
    <input type="text" className="border-2" name="email" value={props.values.email} />
    <p>{props.errors.email}</p>
</div>


(props) => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" className="border-2" name="email" value={props.values.email} />
            <p>{props.errors.email}</p>
        </div>)
}