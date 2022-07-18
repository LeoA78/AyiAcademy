import './styles.css';

function DataInput({data, handleChange}) {




    return(
        <section className="data-container">
            <h4>{data.title}</h4>
            {data.inputs.map(input => ( <input key={input.id} onChange={(e) => handleChange(e)} name={input.placeholder} type={input.type} placeholder={input.placeholder} /> ))}
        </section>
    );
}

export default DataInput;