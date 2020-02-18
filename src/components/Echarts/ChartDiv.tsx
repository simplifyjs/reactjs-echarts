import React from 'react';

const chartdiv = (props: any) => {
	let defaultWidth = '700px';
	let widthVal: string = props.widthVal || defaultWidth;

	return (
		<section id={props.id} style={{width: `${widthVal}`, height:'400px'}}></section>
	);
};

export default chartdiv;