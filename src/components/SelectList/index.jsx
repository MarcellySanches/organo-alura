import "./selectList.css"
const SelectList = (props) => {
    return (
        <div className="list">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.onChange(event.target.value)}>                
                <option value=""></option>
                {props.itensList.map((item) => {
                    return <option key={item}>{item}</option>
                } )}              
            </select>
        </div>
    )
}

export default SelectList