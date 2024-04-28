import '../App.css'
import { useState } from "react";

// Typscript type declarations
// Props should be treated as immutable, or read-only
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function TestListGroup({items, heading, onSelectItem}: Props) {

    // State is treated as mutable
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={item}
						onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                            }}
                    >
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default TestListGroup;
