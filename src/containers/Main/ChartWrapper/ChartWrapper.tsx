import React, {Fragment} from 'react';
import EchartLine from '../../../components/Echarts/EchartLine';
import EchartBarAnimation from '../../../components/Echarts/EchartBarAnimation';
import EchartsBarStack from '../../../components/Echarts/EchartBarStack';

/**
 * Chart Wrapper Component - Stateless
 * @function 
 * @name chartWrapper
 */
 const chartWrapper = (props: any) => {
	let chart = props.chartType === 'usage' ? <EchartsBarStack /> :
						((props.chartType === 'activity') ? <EchartLine /> : 
						( props.chartType === 'volume' ? <EchartBarAnimation /> : ''));

	return (
	<Fragment>
		<h1>{props.chartType.toUpperCase()}</h1>
		{chart}
	</Fragment>);
}  

export default chartWrapper;