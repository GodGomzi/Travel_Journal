
function Entry(props)
{
    return(
        <article className="entry">
            <div>
            <img src={props.d.img.src} alt={props.d.img.alt} className="entryimg"/>
            </div>
                <div className="mapicon">
                <div className="map">
                <span>{props.d.country}</span> 
                <a href={props.d.href}  className="link">View on Google Maps</a>
                </div>
                <h1>{props.d.name}</h1>
                <h5>{props.d.date}</h5>
                <p>{props.d.text}</p>
                </div>
                </article>
    );
}

export default Entry;