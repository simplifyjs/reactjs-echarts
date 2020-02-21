import React, {Fragment, Component} from 'react';
import ChartDiv from './ChartDiv';
import axios from 'axios';
import * as echarts from 'echarts';
import moment from 'moment';
import { VolumeDataItems } from './chartDataInterface';

/** EchartBarAnimation representing Bar Animation Chart State */
class EchartBarAnimation extends Component {
	chartId: string = 'bar-animate';
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
	 * @param {VolumeDataItems} volumeData - {chartVolume, xAxisData}
	 * @return {Object} chart option configuration.
	 */
	setChartOption(volumeData: VolumeDataItems) {
		return {
			title: {
        text: 'Volume for 30 Days'
			},
			legend: {
					data: ['Volume']
			},
			toolbox: {
				feature: {
					magicType: {
							type: ['stack', 'tiled']
					},
					dataView: {},
					saveAsImage: {
							pixelRatio: 2
					}
				}
			},
			tooltip: {},
			xAxis: {
					data: volumeData.chartTs,
					splitLine: {
							show: false
					}
			},
			yAxis: {
			},
			series: [{
					name: 'Volume',
					type: 'bar',
					data: volumeData.chartVolume,
					animationDelay: function (idx: any) {
							return idx * 10;
					}
			}],
			animationEasing: 'elasticOut',
			animationDelayUpdate: function (idx: any) {
					return idx * 5;
			}
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
				let	chartTs = jsonRes.data.volume.map((item: { ts: String; }) => moment(+item.ts).format("MMM D"));
			  let chartVolume = jsonRes.data.volume.map((item: { volume: Number; }) => item.volume);  

				let option =  this.setChartOption({chartVolume, chartTs});
				echartConfig.setOption((option as any));
			})
			.catch(err => console.log(err));
		}

	render() {
		return (
			<Fragment>
				<ChartDiv id={this.chartId} widthVal="100%" />
			</Fragment>
		);
	}
}

export default EchartBarAnimation;