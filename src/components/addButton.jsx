function AddButton({text, onClick}) {
    return (
        <button className="addBtn" onClick={onClick}>{text}</button>
    )
}

export default AddButton