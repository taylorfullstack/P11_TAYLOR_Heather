import '../styles/Tag.css';
export default function Tags({ tags }) {
  return (
    <ul className='tag-wrapper'>
        {tags.map((tag, index) => {
            return <li className="tag inversed text-shadow" key={index}>{tag}</li>
        })}
    </ul>
  );
}

