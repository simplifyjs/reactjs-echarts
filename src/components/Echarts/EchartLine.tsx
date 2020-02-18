import React, {Component, Fragment} from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
import Chartdiv from './ChartDiv';
import moment from 'moment';
import { ActivityDataItems } from './chartDataInterface';

/** EchartLine representing Line Graph */
class EchartLine extends Component {
	chartId: string = 'chart-line';
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
	 * @param {ActivityDataItems} activityData - {activityTs, activityVolume}
	 * @return {Object} chart option configuration.
	 */
	setChartOption(activityData: ActivityDataItems) {
		return {
				xAxis: {
						type: 'category',
						data: activityData.activityTs
				},
				yAxis: {
						type: 'value'
				},
				series: [{
						data: activityData.activityVolume,
						type: 'line'
				}]
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
 				let activityTs = jsonRes.data.activity.map((item: { ts: Number; }) =>  moment(+item.ts).format("MMM D")),
				 activityVolume = jsonRes.data.activity.map((item: { volume: Number; }) => item.volume);

				let	option =  this.setChartOption({activityTs, activityVolume});
				echartConfig.setOption((option as any));
			})
			.catch(err => console.log(err));
		}

	render() {
		return (
			<Fragment>
				<Chartdiv id={this.chartId} widthVal="100%"/>
			</Fragment>
		);
	}
}

export default EchartLine;