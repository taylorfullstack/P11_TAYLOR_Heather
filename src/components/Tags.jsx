import '../styles/Tag.css';
export default function Tags({ tags }) {
  return (
    <ul className='tag-wrapper'>
        {tags.map((tag, index) => {
            return <li className="tag inversed" key={index}>{tag}</li>
        })}
    </ul>
  );
}

