import './../css/tags.css'


const Tags = ({ tags }) => {
    return (
        <ul className="logement-tags-list">
            {tags.map((tag, index) => (
                <li key={index} className="logement-tags">{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;