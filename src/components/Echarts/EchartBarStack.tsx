import React, {Component, Fragment} from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import Chartdiv from './ChartDiv';
import { UsageDataItems } from './chartDataInterface';

/** EchartsBarStack representing Bar Stack Chart State */
class EchartsBarStack extends Component {
	chartId: string = 'bar-stack';
	CHARTDATA_ENDPOINT: string = process.env.REACT_APP_API_URL || '';

	/**
	 * Get DOM chart div
	 * @return {HTMLDivElement} chart div.
	 */
	getChartElement() {
		return document.getElementById(this.chartId) as HTMLDivElement;
	}

	/**
	 * Set EChart option configuration
	 * @param {UsageDataItems} usageObj - {documentType, documentSize, maxAllowedUsage}
	 * @return {Object} chart option configuration.
	 */
	setChartOption(usageObj: UsageDataItems) {
		return {
			tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
			},
			legend: {
				data: ['Document Size', 'Max Allowed Usage']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value'
			},
			yAxis: {
				type: 'category',
				data: usageObj.documentType
			},
			series: [
				{
					name: 'Document Size',
					type: 'bar',
					stack: 'total',
					label: {
							show: true,
							position: 'insideRight'
					},
					data: usageObj.documentSize
				},
				{
					name: 'Max Allowed Usage',
					type: 'bar',
					stack: 'total',
					label: {
							show: true,
							position: 'insideRight'
					},
					data: usageObj.maxAllowedUsage
				},
			]
	};
	}

	/**
	 * componentDidMount
	 */
	componentDidMount() {
		const chartDiv = this.getChartElement();
		const echartConfig = echarts.init(chartDiv);

	/**
	 * Fetch json file - chartsData.json
	 * @param {string} this.CHARTDATA_ENDPOINT
	 */
		axios.get(this.CHARTDATA_ENDPOINT)
			.then(jsonRes => {

				let documentType = jsonRes.data.usage.types.map((item: { documentType: String; }) => item.documentType),
						documentSize = jsonRes.data.usage.types.map((item: { size: Number; }) => item.size),
						maxAllowedUsage = jsonRes.data.usage.types.map(() => jsonRes.data.usage.maxAllowedUsage),
						usageData = {documentType, documentSize, maxAllowedUsage},
						chartOption =  this.setChartOption(usageData);

				echartConfig.setOption((chartOption as any));
			})
			.catch(err => console.log(err));
		}

	render() {
		return (
			<Fragment>
				<Chartdiv id={this.chartId}  widthVal="100%" />
			</Fragment>
		);
	}
}

export default EchartsBarStack;